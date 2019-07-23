<template>
  <div class="page-inner">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-outline-info">
          <div class="card-header">
            <h4 class="m-b-0 text-white"> {{user.adSoyad}} 'Adlı Kullanıcı'ya ' Firma Ata</h4>
          </div>
          <div class="card-body">
            <div class="form-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Şirket Seçiniz</label>
                    <multiselect v-model="value" :options="optionss" :multiple="true"
                                 :close-on-select="false"
                                 :clear-on-select="false" :preserve-search="false"
                                 select-label="Seç"
                                 selected-label="Seçili"
                                 deselect-label="Seçimi Kaldır"
                                 @select="companychange"
                                 @remove="removecompany"
                                 :searchable="false"
                                 placeholder="Şirket Seçiniz" label="firmaAdi" track-by="firmaAdi" :preselect-first="false">
                      <template slot="selection"
                                slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
              {{ values.length }} Şirket Seçildi
                </span>  </template>
                    </multiselect>

                  </div>
                </div>
              </div>
              <div class="row" v-if="selectedcompany.length">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-body table-responsive">
                      <h4 class="card-title m-t-40">Yetki Listesi</h4>
                      <div class="demo-checkbox">
                        <input type="checkbox" id="md_checkbox_1"  checked />
                        <label for="md_checkbox_1">Red</label>
                      </div>
                      <div class="demo-checkbox">
                        <input type="checkbox" id="md_checkbox_2"  checked />
                        <label for="md_checkbox_2">Red</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" v-if="selectedcompany.length">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-body table-responsive">
                      <table class="table table-hover">
                        <thead>
                        <tr >
                          <th>Şirket Adı </th>
                          <th>Yetki Seviyesi</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,i) in selectedcompany" >
                          <td>{{item.firmaAdi}}</td>
                          <td>

                            <div class="demo-checkbox">
                              <input type="checkbox" v-model="item.manager"> <label  @click="setmanagercheck(item,i,'M')">Yönetici</label>
                              <input type="checkbox" v-model="item.submanager"> <label @click="setmanagercheck(item,i,'S')">Alt Yönetici</label>

                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="float:right">
              <button type="button" class="btn btn-success" @mouseup="addcompanytouser" ><i class="fa fa-check"></i> Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  import Component from '../../Plugins/Component'
  import CompanyService from '../../ApiService/CompanyService'
  import UserService from '../../ApiService/UserService'
  import Multiselect from 'vue-multiselect'
    export default {
        name: "AddUserCompany",
      data(){
        return{
          optionss: [],
          value: [],
          selectedcompany:[],
          myuserlist:[],
          user:""
        }
      },
      created() {
          debugger
        this.$store.commit('setmainpage', 'Oluşturdugum Kullanıcılar')
        this.$store.commit('setsubpage', 'Firma Ata')
        this.$store.commit('setbreadcrumbtitle', 'Firma Ata')
          this.getmyuserlist();
      this.getcompanylist()
      },
      methods:{
        addcompanytouser(){
          if(this.selectedcompany.length) {
            const companylist=[]
            this.selectedcompany.forEach((x) => {
              companylist.push({
                firmaId: x.firmaId,
                yetkiSeviye: x.manager == true ? 1 : 0,
              })
            })

            CompanyService.editmanager({
              data:{
                kullaniciId: this.$store.getters.getuser.kullaniciId,
                userToken: this.$store.getters.getuser.userToken,
                yoneticiId:this.$route.params.userid,
                firmaList:companylist,
                methodName: "yoneticiGuncelle"
              }
            }).then((res)=>{
              if(res.status===200){
                this.value=[]
                this.selectedcompany=[]

                debugger
                Component.showalert("Firma Atama İşlemi Başarıyla Gerçekleşti","success","Tamam")
              }else{
                Component.showalert(res.msg,"error","Tamam")
              }
            })
          }else{
            Component.showalert("Lütfen Firma Seçimi Yapınız","error","Tamam")
          }
        },
        getmyuserlist(){
          debugger
          UserService.createduserlist({
            data:{
              kullaniciId: this.$store.getters.getuser.kullaniciId,
              userToken: this.$store.getters.getuser.userToken,
              methodName: "olusturulanList"
            }
          }).then((res)=>{
            if(res.status===200){
              var isuser=false;
              debugger
              for (let i = 0; i <res.data.length ; i++) {
                if(res.data[i].kullaniciId==this.$route.params.userid){
                  isuser=true
                  this.user=res.data[i];
                  break
                }else{
                  isuser=false

                }
              }

              if(isuser!=true){
                this.$router.push("/Olusturulankisiler");
              }
              this.myuserlist=res.data
            }else {
              this.$router.push("/Olusturulankisiler");
              Component.showalert(res.msg,"error","Tamam")
            }
          })
        },
        removecompany(param){
          this.selectedcompany= this.selectedcompany.filter((x)=>{
            return x.firmaId!=param.firmaId
          })
        },
        companychange(item){
          item.submanager=true
          item.manager=false
          this.selectedcompany.push(item)
        },
        setmanagercheck(item,index,type){
          const companies=JSON.parse(JSON.stringify(this.selectedcompany))
          this.selectedcompany=[]
          companies.forEach((x,i)=>{
            if(i===index){
              if(type==="M"){
                x.manager=true
                x.submanager=false
              }
              else{
                x.manager=false
                x.submanager=true
              }
            }
          })
          this.selectedcompany=companies
        },
        getcompanylist(){
          CompanyService.getcompanylist(
            {
              'data': {
                kullaniciId: this.$store.getters.getuser.kullaniciId,
                userToken: this.$store.getters.getuser.userToken,
                methodName: 'firmalarim'
              }
            }
          ).then((res) => {
            if (res && res.data && res.data.length) {

              this.optionss = res.data
            } else { this.optionss = [] }
          })
        },
      },
      components:{
          Multiselect
      }
    }
</script>

<style scoped>

</style>
