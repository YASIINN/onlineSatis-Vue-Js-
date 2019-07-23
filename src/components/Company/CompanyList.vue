<template>
  <div class="page-inner">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Firma Listesi</div>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-hover">
              <thead>
              <tr>
                <th>Firma No</th>
                <th>Firma Adı</th>
                <th>Vergi Numarası</th>
                <th>İşlemler</th>
              </tr>
              </thead>
              <tbody>
              <br>
              <tr v-for="item in companylist">
                <td>{{item.firmaId}}</td>
                <td>{{item.firmaAdi}}</td>
                <td>{{item.vergiNo}}</td>
                <td>
                <div class="button-group">
                  <button class="btn  btn-info"  @mouseup="showmanagerlist(item)" data-toggle="tooltip" data-placement="bottom" title="Yönetici Listesini Görüntüle" >  <i class="fas fa-eye"></i>  </button>
                </div>
                 </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="selectedcompany.firmaAdi">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">{{selectedcompany.firmaAdi}} Yönetici Listesi  <label style="float: right; color: red;cursor: pointer" class="fas fa-window-close" @mouseup="removemanagerlist"></label>  </div>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-hover">
              <thead>
              <tr>
                <th>Ad Soyad</th>
                <th>TC</th>
                <th>Yetki Seviyesi</th>
                <th>İşlemler</th>
              </tr>
              </thead>

              <tbody>
              <br>

              <tr v-for="(item,index) in managerlist">
                <td>{{item.adSoyad}}</td>
                <td>{{item.tcNo}}</td>
                <td>
                  <label v-if="item.disabled">{{item.yetkiSeviye=='1'?"Yönetici":"Personel"}}</label>
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
import swal from 'sweetalert'
export default {
  data () {
    return {
      companylist: [],
      selectedcompany: [],
      managerlist: [],
      oldmanagerlist:[],
      activecompany:""
    }
  },
  methods: {
    cancalmanageredit(item){
      item.disabled=!item.disabled
      for (let j = 0; j <this.managerlist.length ; j++) {
        this.managerlist[j].manager=this.oldmanagerlist[j].manager
        this.managerlist[j].submanager=this.oldmanagerlist[j].submanager
      }
    },
    savemanageredit(item){
      debugger
      var ischanged=false;
      if(item.disabled==true){
        item.disabled=false
      }else{
        for (let j = 0; j <this.managerlist.length ; j++) {
          debugger
          if(this.managerlist[j].manager!=this.oldmanagerlist[j].manager
          || this.managerlist[j].submanager!=this.oldmanagerlist[j].submanager
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
                yoneticiId: item.kullaniciId,
                methodName: "yoneticiGuncelle",
                firmaList:[{
                  firmaId: this.activecompany.firmaId,
                  yetkiSeviye:editedauth
                }]
              }
            }
          ).then((res)=>{
            if(res.status===200){

              Component.showalert("Yetki Seviysi Başarıyla Değiştirildi","success","Tamam")
                this.showmanagerlist(
                this.activecompany)
            }else{
              Component.showalert(res.msg,"error","Tamam")
            }
            debugger
          })
          /*
            PayTermService.addpayterm(
              {
                data:{
                  kullaniciId: this.$store.getters.getuser.kullaniciId,
                  userToken: this.$store.getters.getuser.userToken,
                  donemId:item.odemeDonemId,
                  odemeDetay:item.detay,
                  methodName: "donemDuzenle"
                }
              }
            ).then((res)=>{
              if(res.status==200){
                item.disabled=!item.disabled
                item.detay=res.data.detay.toUpperCase()
                Component.showalert("Yönetici Yetkisi Başarıyla Güncellendi","success","Tamam")
              }else{
                Component.showalert(res.msg,"error","Tamam")
              }
            })*/


        }else{
          Component.showalert("Yönetici Yetkisinde Herhangi Bir Değişiklik Yapılmadı Lütfen Değişik Yapıp Tekrar Deneyin","warning","Tamam")
        }
      }
    },
    setmanagercheck(item,index,type){
      debugger
      const list=JSON.parse(JSON.stringify(this.managerlist))
      this.managerlist=[]
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
      this.managerlist=list
    },
    editmanager(item){
      item.disabled=!item.disabled
    },
    removemanageruser (item, index) {
      debugger
      const name = item.adSoyad
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
                this.managerlist.splice(index, 1)
                Component.showalert(res.msg, 'success', 'Tamam')
              } else {
                Component.showalert('Kullanıcı Silinirken Hata Gerçekleşti', 'error', 'Tamam')
              }
            })
          }
        })

    },
    removemanagerlist () {
      this.selectedcompany = []
      this.managerlist = []
      this.activecompany=""
    },
    showmanagerlist (param) {
      debugger
      const _this = this
      this.selectedcompany = param

      this.activecompany=param
      CompanyService.getmanagerlist(
        {
          'data': {
            kullaniciId: this.$store.getters.getuser.kullaniciId,
            userToken: this.$store.getters.getuser.userToken,
            firmaId: param.firmaId,
            methodName: 'firmaYonetimList'
          }
        }
      ).then((res) => {
        if (res && res.data && res.data.length) {
          debugger
          const result = res.data.filter((x) => {
            if(x.yetkiSeviye==="1"){
              x.manager=true
              x.submanager=false
            }else{
              x.manager=false
              x.submanager=true
            }
            x.disabled=true
            return x.kullaniciId != _this.$store.getters.getuser.kullaniciId
          })
          this.oldmanagerlist=JSON.parse(JSON.stringify(result))
          result.length > 0 ? this.managerlist = result : this.managerlist = []
        } else { this.managerlist = [] }
      })
    },
    getcompanylist () {
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
          this.companylist = res.data
        } else { this.companylist = [] }
      })
    }
  },
  created () {
    console.log(this.$store.getters.isAuthenticated)

    this.$store.commit('setmainpage', 'AnaSayfa')
    this.$store.commit('setsubpage', 'Firmalar')
    this.$store.commit('setbreadcrumbtitle', 'Firmalar')
    this.getcompanylist()
  }
}
</script>

<style scoped>

</style>
