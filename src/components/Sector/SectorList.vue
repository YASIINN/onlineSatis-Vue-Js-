<template>
  <div class="page-inner">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Sektör Listesi</div>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-hover">
              <thead>
              <tr>
                <th>#</th>
                <th>Sektör</th>
                <th>İşlemler</th>
              </tr>
              </thead>
              <tbody><br>
              <tr v-for="(item,i) in sectorlist" :key="i">
                <td>{{item.sektorId}}</td>
                <td><input class="form-control" :disabled="item.disabled" type="text" v-model="item.sektor">   </td>
                <td>
                  <div class="button-group">
          <button class="btn  btn-warning"  v-if="item.disabled" data-toggle="tooltip" data-placement="bottom" title="Düzenle" @mouseup="editsector(item)">  <i class="fas fa-edit"></i>  </button>
                  <button class="btn btn-danger"  v-if="item.disabled" data-toggle="tooltip" data-placement="bottom" title="Sil" @mouseup="removesector(item)"> <i class="fas fa-trash-alt"></i>  </button>


                  <button class="btn btn-success" data-toggle="tooltip" data-placement="bottom" title="Kaydet" v-if="!item.disabled" @mouseup="savesector(item)"> <i class="fa fa-save"></i> </button>
                  <button class="btn btn-danger" data-toggle="tooltip" data-placement="bottom" title="İptal Et" v-if="!item.disabled" @mouseup="cancelsector(item)"> <i class="fas fa-times"></i> </button>
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
  import SectorService from '../../ApiService/SectorService'
  import Component from '../../Plugins/Component'
  import swal from 'sweetalert'
  export default {
    data () {
      return {
        sectorlist:[],
        oldsectorlist:[],
        editedsector:"",
        editedmode:false
      }
    },
    methods:{
      cancelsector(item){
        item.disabled=!item.disabled
        for (let j = 0; j <this.sectorlist.length ; j++) {
         this.sectorlist[j].sektor=this.oldsectorlist[j].sektor
        }
      },
      savesector(item){
        var ischanged=false;
        if(item.disabled==true){
          item.disabled=false
        }else{
          for (let j = 0; j <this.sectorlist.length ; j++) {
            debugger
            if(this.sectorlist[j].sektor.trim()!=this.oldsectorlist[j].sektor.trim()){
              ischanged=true
              break;
            }else{
              ischanged=false
            }
          }
          if(ischanged){
            debugger
            if(item.sektor.trim()!=""){
              SectorService.editsector(
                {
                  data:{
                    kullaniciId: this.$store.getters.getuser.kullaniciId,
                    userToken: this.$store.getters.getuser.userToken,
                    sektorId:item.sektorId,
                    sektor:item.sektor,
                    methodName: "sektorDuzenle"
                  }
                }
              ).then((res)=>{
                if(res.status==200){
                  item.disabled=!item.disabled
                  item.sektor=res.data.sektor.toUpperCase()
                  Component.showalert("Sektör Başarıyla Güncellendi","success","Tamam")
                }else{
                  Component.showalert("Sektör  Güncellenirken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyin","error","Tamam")
                }
              })
            }else{
              Component.showalert("Boş Sektör Adı Girilemez","error","Tamam")
            }
          }else{
            Component.showalert("Sektörde Herhangi Bir Değişiklik Yapılmadı Lütfen Değişik Yapıp Tekrar Deneyin","warning","Tamam")
          }
        }





      },
      removesector(item){
        swal({
          title: item.sektor + ' ' + 'Adlı Sektörü Silmek İstediğinize Emin Misiniz ?',
          icon: 'warning',
          buttons: ['Hayır', 'Evet'],
          dangerMode: true
        })
          .then((willDelete) => {
            if (willDelete) {
             SectorService.deletesector(
               {
                 data:{
                   kullaniciId: this.$store.getters.getuser.kullaniciId,
                   userToken: this.$store.getters.getuser.userToken,
                   methodName: "sektorKaldir",
                   sektorId:item.sektorId,
                 }
               }
             ).then((res)=>{
               if(res.status==200){
                Component.showalert("Sektör Başarıyla Kaldırıldı","success","Tamam")
                    this.sectorlist=this.sectorlist.filter((x)=>{
                      return x.sektorId!=item.sektorId
                    })
               }else{
                 Component.showalert("Sektör Silinirken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyiniz","error","Tamam")
               }
             })
            }
          })
      },
      editsector(item,i){
      var ischanged=false;
        if(item.disabled==true){
          item.disabled=false
        }else{
          for (let j = 0; j <this.sectorlist.length ; j++) {
            if(this.sectorlist[j].sektor.trim()!=this.oldsectorlist[j].sektor.trim()){
              ischanged=true
              break;
            }else{
              ischanged=false
            }
          }
          if(ischanged){
            Component.showalert("Lütfen Sektörde Yaptığınız Değişiklikleri Kaydedin","warning","Tamam")
          }else{
            item.disabled=true
          }
        }
      },
      getallsector(){
        debugger
        SectorService.sectorlist({
          data:{
            kullaniciId: this.$store.getters.getuser.kullaniciId,
            userToken: this.$store.getters.getuser.userToken,
            methodName: "sektorList"
          }
        }).then((res)=>{
          if(res && res.data && res.data.length){
            debugger
            res.data.forEach((x)=>{
              x.disabled=true
              x.sektor=x.sektor.toUpperCase()
            })
            this.oldsectorlist=JSON.parse(JSON.stringify( res.data))
            this.sectorlist=res.data
          }else{
            this.
            Component.showalert("İşlem Sırasında Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyiniz","error","Tamam")
          }
        })
      }
    },

    created () {

      this.$store.commit('setmainpage', 'AnaSayfa')
      this.$store.commit('setsubpage', 'Mevcut Sektörler')
      this.$store.commit('setbreadcrumbtitle', 'Mevcut Sektörler')
      this.getallsector();
    },
  }
</script>

<style scoped>

</style>
