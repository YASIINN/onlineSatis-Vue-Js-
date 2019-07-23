<template>
  <div class="page-inner">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">{{user.adSoyad}} Adlı Kullanıcıya  Oluşturulan  Firmaların Listesi </div>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-hover">
              <thead>
              <tr>
                <th>Firma No</th>
                <th>Firma Adı</th>
                <th>Vergi Numarası</th>
                <th>Yetki Seviyesi</th>
                <th>İşlemler</th>
              </tr>
              </thead>
              <tbody><br>
              <tr v-for="(item,index) in companylist" >
                <td>{{item.firmaId}}</td>
                <td>{{item.firmaAdi}} </td>
                <td>{{item.vergiNo}} </td>
                <td> <label v-if="item.disabled">{{item.yetkiSeviye=='1'?'Yönetici':'Personel'}}</label>

                  <div class="demo-checkbox" v-if="!item.disabled">
                    <input type="checkbox" v-model="item.manager"> <label  @click="setmanagercheck(item,index,'M')">Yönetici</label>
                    <input type="checkbox" v-model="item.submanager"> <label @click="setmanagercheck(item,index,'S')">Alt Yönetici</label>
                  </div>
                </td>
                <td>
                  <div class="button-group">


                    <button class="btn  btn-danger"
                            v-if="item.disabled"
                            @mouseup="removemanageruser(item,index)" data-toggle="tooltip" data-placement="bottom" title="Yöneticiyi Sil" >  <i class="fas fa-trash"></i>  </button>
                    <button class="btn  btn-warning"
                            v-if="item.disabled"
                            @mouseup="editmanager(item,index)" data-toggle="tooltip" data-placement="bottom" title="Yönetici Yetkisini Değiştir" >  <i class="fas fa-edit"></i>  </button>



                    <button class="btn btn-success" data-toggle="tooltip" data-placement="bottom" title="Kaydet" v-if="!item.disabled" @mouseup="savemanageredit(item)"> <i class="fa fa-save"></i> </button>
                    <button class="btn btn-danger" data-toggle="tooltip" data-placement="bottom" title="İptal Et" v-if="!item.disabled" @mouseup="cancalmanageredit(item)"> <i class="fas fa-times"></i> </button>
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
</template>

<script>
  import CompanyService from '../../ApiService/CompanyService'
  import Component from '../../Plugins/Component'
  import UserService from '../../ApiService/UserService'
    export default {
        name: "UserCompanyList",
      data(){
          return{
            user:"",
            companylist:[],
            oldmanagerlist:[]
          }
      },
      created() {
          debugger
        this.$store.commit('setmainpage', 'AnaSayfa')
        this.$store.commit('setsubpage', 'Kullanıcı Firmaları')
        this.$store.commit('setbreadcrumbtitle', 'Kullanıcı Firmaları')
        this.getmyuserlist();
      },
      methods:{
        cancalmanageredit(item){
          item.disabled=!item.disabled
          for (let j = 0; j <this.companylist.length ; j++) {
            this.companylist[j].manager=this.oldmanagerlist[j].manager
            this.companylist[j].submanager=this.oldmanagerlist[j].submanager
          }
        },
        savemanageredit(item){
          debugger
          var ischanged=false;
          if(item.disabled==true){
            item.disabled=false
          }else{
            for (let j = 0; j <this.companylist.length ; j++) {
              debugger
              if(this.companylist[j].manager!=this.oldmanagerlist[j].manager
                || this.companylist[j].submanager!=this.oldmanagerlist[j].submanager
              ){
                ischanged=true
                break;
              }else{
                ischanged=false
              }
            }
            debugger
            if(ischanged){
              debugger
              //yetki güncellenecek api den
              var editedauth;
              if(item.submanager===true){
                editedauth=0
              }else{
                editedauth=1
              }
              debugger
              CompanyService.editmanager(
                {
                  data:{
                    kullaniciId: this.$store.getters.getuser.kullaniciId,
                    userToken: this.$store.getters.getuser.userToken,
                    yoneticiId: this.user.kullaniciId,
                    methodName: "yoneticiGuncelle",
                    firmaList:[{
                      firmaId: item.firmaId,
                      yetkiSeviye:editedauth
                    }]
                  }
                }
              ).then((res)=>{
                if(res.status===200){

                  Component.showalert("Yetki Seviysi Başarıyla Değiştirildi","success","Tamam")
                this.getcompany()
                }else{
                  Component.showalert(res.msg,"error","Tamam")
                }
                debugger
              })
            }else{
              Component.showalert("Yönetici Yetkisinde Herhangi Bir Değişiklik Yapılmadı Lütfen Değişik Yapıp Tekrar Deneyin","warning","Tamam")
            }
          }
        },
        setmanagercheck(item,index,type){
          debugger
          const list=JSON.parse(JSON.stringify(this.companylist))
          this.companylist=[]
          list.forEach((x,i)=>{
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
          this.companylist=list
        },
          getmyuserlist(){
            var BreakException = {};
          let  userid=this.$route.params.userid
            UserService.createduserlist({
              data:{
                kullaniciId: this.$store.getters.getuser.kullaniciId,
                userToken: this.$store.getters.getuser.userToken,
                methodName: "olusturulanList"
              }
            }).then((res)=>{
              debugger
              if(res.status===200){
                var isuser=false;
                debugger
                for (let i = 0; i <res.data.length ; i++) {
                  if(res.data[i].kullaniciId==userid){
                    isuser=true
                    this.user=res.data[i]
                    break
                  }else{
                    isuser=false
                  }
                }
                if(isuser!=true){
                  this.$router.push("/Olusturulankisiler");
                }
              else{
                this.getcompany()
                }
              }else {
                Component.showalert(res.msg,"error","Tamam")
                this.$router.push("/Olusturulankisiler");
              }
            })
          },
        removemanageruser (item, index) {
          debugger
          const name = this.user.adSoyad
          const title = item.yetkiSeviye == '1' ? 'Yöneticiyi' : 'Personeli'
          swal({
            title: name + ' ' + 'Adlı' + title + ' ' + '    ' + ' Silmek İstediğinize Emin Misiniz ?',
            icon: 'warning',
            buttons: ['Hayır', 'Evet'],
            dangerMode: true
          })
            .then((willDelete) => {
              if (willDelete) {
                CompanyService.removamanager(
                  {
                    data: {
                      kullaniciId: this.$store.getters.getuser.kullaniciId,
                      userToken: this.$store.getters.getuser.userToken,
                      yonetimId: item.yonetimId,
                      methodName: 'yoneticiKaldir'
                    }
                  }
                ).then((res) => {
                  if (res.status == 200) {
                    debugger
                    this.companylist.splice(index, 1)
                    Component.showalert(res.msg, 'success', 'Tamam')
                  } else {
                    Component.showalert(res.msg, 'error', 'Tamam')
                  }
                })
              }
            })
        },
        editmanager(item){
          item.disabled=!item.disabled
        },
          getcompany(){
            CompanyService.getmanagerlist(
              {
                data:{
                  kullaniciId: this.$store.getters.getuser.kullaniciId,
                  userToken: this.$store.getters.getuser.userToken,
                  methodName: "kullaniciFirmalari",
                  yoneticiId:this.$route.params.userid
                }
              }
            ).then((res)=>{
              if(res.status===200){
                res.data.forEach((x)=>{
                  if(x.yetkiSeviye==="1"){
                    x.manager=true
                    x.submanager=false
                  }else{
                    x.manager=false
                    x.submanager=true
                  }
                  x.disabled=true
                })
                this.oldmanagerlist=JSON.parse(JSON.stringify(res.data))
                this.companylist=res.data
              }else{
                Component.showalert(res.msg,"error","Tamam")
                this.$router.push("/Olusturulankisiler");
              }
            })
          }
      }
    }
</script>

<style scoped>

</style>
