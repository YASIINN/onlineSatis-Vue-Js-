<template>
  <div class="page-inner">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Ödeme Dönemi Listesi</div>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-hover">
              <thead>
              <tr>
                <th>#</th>
                <th>Ödeme Dönemi Adı</th>
                <th>İşlemler</th>
              </tr>
              </thead>
              <tbody><br>
              <tr v-for="(item,i) in paytermlist" :key="i">
                <td>{{item.odemeDonemId}}</td>
                <td><input class="form-control" :disabled="item.disabled" type="text" v-model="item.detay">   </td>
                <td>
                  <div class="button-group">
                    <button class="btn  btn-warning"  v-if="item.disabled" data-toggle="tooltip" data-placement="bottom" title="Düzenle" @mouseup="editpayterm(item)">  <i class="fas fa-edit"></i>  </button>
                    <button class="btn btn-danger"  v-if="item.disabled" data-toggle="tooltip" data-placement="bottom" title="Sil" @mouseup="removepayterm(item)"> <i class="fas fa-trash-alt"></i>  </button>
                    <button class="btn btn-success" data-toggle="tooltip" data-placement="bottom" title="Kaydet" v-if="!item.disabled" @mouseup="savepayterm(item)"> <i class="fa fa-save"></i> </button>
                    <button class="btn btn-danger" data-toggle="tooltip" data-placement="bottom" title="İptal Et" v-if="!item.disabled" @mouseup="cancelpayterm(item)"> <i class="fas fa-times"></i> </button>
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
  import PayTermService from '../../ApiService/PayTermService'
  import Component from '../../Plugins/Component'
  import swal from 'sweetalert'
  export default {
    data () {
      return {
        paytermlist:[],
        oldpaytermlist:[],
        editedpayterm:"",
      }
    },
    methods:{
      cancelpayterm(item){
        item.disabled=!item.disabled
        for (let j = 0; j <this.paytermlist.length ; j++) {
          this.paytermlist[j].detay=this.oldpaytermlist[j].detay
        }
      },
      savepayterm(item){
        var ischanged=false;
        if(item.disabled==true){
          item.disabled=false
        }else{
          for (let j = 0; j <this.paytermlist.length ; j++) {
            debugger
            if(this.paytermlist[j].detay.trim()!=this.oldpaytermlist[j].detay.trim()){
              ischanged=true
              break;
            }else{
              ischanged=false
            }
          }
          if(ischanged){
            debugger
            if(item.detay.trim()!=""){
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
                  Component.showalert("Ödeme Dönemi Başarıyla Güncellendi","success","Tamam")
                }else{
                  Component.showalert("Ödeme Dönemi  Güncellenirken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyin","error","Tamam")
                }
              })
            }else{
              Component.showalert("Boş Ödeme Dönemi Girilemez","error","Tamam")
            }
          }else{
            Component.showalert("Ödeme Döneminde Herhangi Bir Değişiklik Yapılmadı Lütfen Değişik Yapıp Tekrar Deneyin","warning","Tamam")
          }
        }
      },
      removepayterm(item){
        swal({
          title: item.detay + ' ' + 'Adlı Ödeme Dönemini Silmek İstediğinize Emin Misiniz ?',
          icon: 'warning',
          buttons: ['Hayır', 'Evet'],
          dangerMode: true
        })
          .then((willDelete) => {
            if (willDelete) {
              PayTermService.deletepayterm(
                {
                  data:{

                  kullaniciId: this.$store.getters.getuser.kullaniciId,
                  userToken: this.$store.getters.getuser.userToken,
                  methodName: "donemKaldir",
                  donemId:item.odemeDonemId,
                  }
                }
              ).then((res)=>{
                if(res.status==200){
                  Component.showalert("Ödeme Dönemi Başarıyla Kaldırıldı","success","Tamam")
                  this.paytermlist=this.paytermlist.filter((x)=>{
                    return x.odemeDonemId!=item.odemeDonemId
                  })
                }else{
                  Component.showalert("Sektör Silinirken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyiniz","error","Tamam")
                }
              })
            }
          })
      },
      editpayterm(item,i){
        var ischanged=false;
        if(item.disabled==true){
          item.disabled=false
        }else{
          for (let j = 0; j <this.paytermlist.length ; j++) {
            if(this.paytermlist[j].detay.trim()!=this.oldpaytermlist[j].detay.trim()){
              ischanged=true
              break;
            }else{
              ischanged=false
            }
          }
          if(ischanged){
            Component.showalert("Lütfen Ödeme Döneminde  Yaptığınız Değişiklikleri Kaydedin","warning","Tamam")
          }else{
            item.disabled=true
          }
        }
      },
      getallpayterm(){
        PayTermService.getpayterm({
          data:{
            kullaniciId: this.$store.getters.getuser.kullaniciId,
            userToken: this.$store.getters.getuser.userToken,
            methodName: "donemList"
          }
        }).then((res)=>{
          if(res && res.data && res.data.length){
            res.data.forEach((x)=>{
              x.disabled=true
              x.detay=x.detay.toUpperCase()
            })
            this.oldpaytermlist=JSON.parse(JSON.stringify( res.data))
            this.paytermlist=res.data
          }else{
            this.
            Component.showalert("İşlem Sırasında Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyiniz","error","Tamam")
          }
        })
      }
    },
    created () {
      this.$store.commit('setmainpage', 'AnaSayfa')
      this.$store.commit('setsubpage', 'Mevcut Ödeme Dönemleri')
      this.$store.commit('setbreadcrumbtitle', 'Mevcut Ödeme Dönemleri')
      this.getallpayterm();
    },
  }
</script>

<style scoped>

</style>
