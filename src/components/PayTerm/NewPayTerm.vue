<template>
  <div class="page-inner">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-outline-info">
          <div class="card-header">
            <h4 class="m-b-0 text-white">Ödeme Dönemi Tanımla</h4>
          </div>
          <div class="card-body">
            <div class="form-body">
              <h3 class="card-title">Ödemi Dönemi Bilgileri</h3>
              <hr>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="form-group">
                      <label>Ödeme  Dönemi </label>
                      <input
                        @keypress="addnewpayterm($event)"
                        type="text"
                        class="form-control"
                        v-model="paytermname"
                        placeholder="Ödeme Dönemi "
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div style="float:right">
                <button type="button" class="btn btn-success" @mouseup="addnewpayterm('mouse')" ><i class="fa fa-check"></i> Kaydet
                </button>
              </div>

              <div class="row" v-if="paytermlist.length">
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="form-group">
                      <label style="text-decoration: underline">Ödeme Dönemi Listesi  </label>
                      <table class="table table-hover">
                        <thead>
                        <tr>
                          <th>#</th>
                          <th>Ödeme  Dönemi</th>
                        </tr>
                        </thead>
                        <tbody><br>
                        <tr v-for="item in paytermlist">
                          <td>{{item.odemeDonemId}}</td>
                          <td>{{item.detay}}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import PayTermService from '../../ApiService/PayTermService'
  import Component from '../../Plugins/Component'
    export default {
    data(){
      return{
        paytermlist:[],
        paytermname:""
      }
    },
        name: "NewPayTerm",
      created() {
        this.$store.commit('setmainpage', 'AnaSayfa')
        this.$store.commit('setsubpage', 'Ödemi Dönemi Tanımla')
        this.$store.commit('setbreadcrumbtitle', 'Ödemi Dönemi Tanımla')
        this.getallpayterm();
      },
      methods:{
        addnewpayterm(e){
          if (e != 'mouse') {
            if (e.key == 'Enter') {
              if(this.paytermname.trim()=='' || this.paytermname.trim().length<1){
                Component.showalert("Lütfen Ödeme Dönemi Belirtiniz","warning","Tamam")
              }else{
                this.paytermservice()
              }
            }
          } else {
            if(this.paytermname.trim()=='' || this.paytermname.trim().length<1){
              Component.showalert("Lütfen Ödeme Dönemi Belirtiniz","warning","Tamam")
            }else{
              this.paytermservice()
            }
          }
        },
        paytermservice(){
          PayTermService.addpayterm(
            {
              data:{

              kullaniciId: this.$store.getters.getuser.kullaniciId,
              userToken: this.$store.getters.getuser.userToken,
              odemeDetay:this.paytermname.toUpperCase(),
              methodName: "donemTanimla"
              }

            }
          ).then((res)=>{
            if(res.status==200) {
              this.paytermname=""
              this.paytermlist.push(res.data)
              Component.showalert("Ödeme Dönemi Başarıyla Oluşturuldu","success","Tamam")
            }
            else{
              Component.showalert("Ödeme Dönemi Oluşturuluken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyiniz ","error","Tamam")
            }
          })
        },
          getallpayterm(){
          debugger
            PayTermService.getpayterm(
              {
                data:{
                  methodName: "donemList",
                  kullaniciId: this.$store.getters.getuser.kullaniciId,
                  userToken: this.$store.getters.getuser.userToken
                }
              }
            ).then((res)=>{
              if(res.status==200){
                  this.paytermlist=res.data
              }else{
                Component.showalert("İşlem Sırasında Bir Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyin","error","Tamam")
              }
            })
          }
      }
    }
</script>

<style scoped>
  ::placeholder {
    opacity: 0.3; /* Firefox */
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    opacity: 0.3;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    opacity: 0.3;
  }
</style>
