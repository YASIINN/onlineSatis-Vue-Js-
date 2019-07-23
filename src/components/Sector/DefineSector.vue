<template>
  <div class="page-inner">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-outline-info">
          <div class="card-header">
            <h4 class="m-b-0 text-white">Sektör Oluştur</h4>
          </div>
          <div class="card-body">
            <div class="form-body">
              <h3 class="card-title">Sektör Tanımla</h3>
              <hr>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="form-group">
                      <label>Sektör Adı  </label>
                      <input
                        @keypress="addnewsektor($event)"
                        type="text"
                        class="form-control"
                        v-model="sectorname"
                        placeholder="Sektör Adı "
                      >
                    </div>
                  </div>
                </div>

              </div>
              <div style="float:right">
                <button type="button" class="btn btn-success" @mouseup="addnewsektor('mouse')" ><i class="fa fa-check"></i> Kaydet
                </button>
              </div>

              <div class="row" v-if="sectorlist.length">
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="form-group">
                      <label style="text-decoration: underline">Sektör Listesi  </label>
                      <table class="table table-hover">
                        <thead>
                        <tr>
                          <th>#</th>
                          <th>Sektör Adı</th>
                        </tr>
                        </thead>
                        <tbody><br>
                        <tr v-for="item in sectorlist">
                          <td>{{item.sektorId}}</td>
                          <td>{{item.sektor}}</td>
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
  import SectorService from '../../ApiService/SectorService'
  import Component from '../../Plugins/Component'
    export default {
        name: "DefineSector",
      data(){return{
        sectorlist:[],
        sectorname:"",
      }},
      created() {
        this.$store.commit('setmainpage', 'AnaSayfa')
        this.$store.commit('setsubpage', 'Sektör Tanımla')
        this.$store.commit('setbreadcrumbtitle', 'Sektör Tanımla')
        this.getallsector();
      },
      methods:{
          sectorservice(){
            SectorService.addsector({
              data:{
                kullaniciId: this.$store.getters.getuser.kullaniciId,
                userToken: this.$store.getters.getuser.userToken,
                sektor:this.sectorname.toUpperCase(),
                methodName: "sektorTanimla"
              }
            }).then((res)=>{
              if(res.status==200){
                debugger
                this.sectorname=""
                this.sectorlist.push(res.data)
                Component.showalert("Sektör Başarıyla Oluşturuldu","success","Tamam")
              }else{
                Component.showalert("Sektör Oluşturuluken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyiniz ","error","Tamam")
              }
            })
          },
          addnewsektor(e){
            if (e != 'mouse') {
              if (e.key == 'Enter') {
                if(this.sectorname.trim()=='' || this.sectorname.trim().length<1){
                  Component.showalert("Lütfen Sektör Adı Giriniz","warning","Tamam")
                }else{
                  this.sectorservice()
                }
              }
            } else {
              if(this.sectorname.trim()=='' || this.sectorname.trim().length<1){
                Component.showalert("Lütfen Sektör Adı Giriniz","warning","Tamam")
              }else{
                this.sectorservice()
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
                    this.sectorlist=res.data
                }else{
                  this.
                  Component.showalert("İşlem Sırasında Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyiniz","error","Tamam")
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
