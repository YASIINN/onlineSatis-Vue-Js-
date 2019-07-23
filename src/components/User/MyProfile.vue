<template>

	<div class="page-inner">
           <div class="row">
                    <!-- Column -->
                    <div class="col-lg-4 col-xlg-3 col-md-5">
                        <div class="card">
                            <div class="card-body">
                                <center class="m-t-30"> <img src="" class="img-circle" width="150" />
                                    <h4 class="card-title m-t-10">{{$store.getters.getuser.adSoyad}}</h4>
                                    <h6 class="card-subtitle">Front End Developer</h6>
                                </center>
                            </div>
                            <div>
                                <hr> </div>
                            <div class="card-body"> <small class="text-muted">Mail Adresi </small>
                                <h6>ysndlklc1234@gmail.com</h6> <small class="text-muted p-t-30 db">Telefon Numarası</small>
                                <h6>+905541252783</h6> <small class="text-muted p-t-30 db">Adresi</small>
                                <h6>ABC Caddesi XYZ Sokak 5/6 Sivas/Sivas </h6>
                                <small class="text-muted p-t-30 db">Sosyal Hesaplar </small>
                                <br/>
                                <button class="btn btn-circle btn-secondary"><i class="fab fa-facebook"></i></button>
                                <button class="btn btn-circle btn-secondary"><i class="fab fa-instagram"></i></button>
                                <button class="btn btn-circle btn-secondary"><i class="fab fa-twitter"></i></button>
                            </div>
                        </div>
                    </div>

                      <div class="col-lg-8 col-xlg-9 col-md-7">
                        <div class="card">
                            <!-- Nav tabs -->
                          <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profil Bilgilerini Düzenle</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" @click="tabchange">Sms İle Giriş</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                            </li>
                          </ul>
                          <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                              <div class="page-inner">
                                <div class="row">
                                  <div class="col-12">
                                    <div class="card">
                                      <div class="card-body">
                                        <div class="form-material m-t-40">
                                          <div class="form-group">
                                            <label >Mevcut Parola</label>
                                            <input type="password" id="example-email2" name="example-email" class="form-control" placeholder="Mevut Parola"> </div>
                                          <div class="form-group">
                                            <label>Yeni Parola</label>
                                            <input type="password" class="form-control" placeholder="Parola"> </div>
                                          <div class="form-group">
                                            <label>Yeni Parola Tekrarı</label>
                                            <input type="password" class="form-control" placeholder="Parola Tekrarı"> </div>
                                        </div><br><br>
                                        <button class="btn btn-primary" style="float: right">Parolayı Değiştir</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                              <div class="page-inner">
                                <div class="row">
                                  <div class="col-8">
                                    <p>Sms ile Girişi Aktif Et</p>
                                  </div>
                                  <div class="col-4">
                                    <input type="checkbox" v-model="isactivated" id="basic_checkbox_1" @change="changeactivation"  />
                                    <label for="basic_checkbox_1">{{isactivated==true?'Aktif':'Pasif'}}</label>
                                  </div>
                                </div>





                              </div>

                            </div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                              <div class="page-inner">
                                <p>
                                  Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                                </p>

                              </div>

                            </div>
                          </div>
                        </div>
                    </div>
           </div>
  </div>
</template>

<script>
  import PhoneLogin from '../../ApiService/PhoneLoginService'
  import Component from '../../Plugins/Component'
export default {
  methods:{
    tabchange(){
      this.isactivated=this.$store.getters.getuser.smsGiris=="1"?true:false
      console.log(this.$store.getters.getuser)
    },
    changeactivation(){

      const durum= this.isactivated==true?1:0;
      PhoneLogin.activatephone({
        data:{
          kullaniciId: this.$store.getters.getuser.kullaniciId,
          userToken: this.$store.getters.getuser.userToken,
          durum:durum,
          methodName:"telefonGiris"
        }
      }).then((res)=>{
        if(res.status==200){
          if(durum==1){

          this.$store.commit('setToken', this.$store.getters.getuser.userToken)
           this.$store.commit('setUs',
             {
               adSoyad:this.$store.getters.getuser.adSoyad,
               adres:this.$store.getters.getuser.adres,
               durum:this.$store.getters.getuser.durum,
                kullaniciId: this.$store.getters.getuser.kullaniciId,
                smsGiris: 1,
                sonGirisTarihi: this.$store.getters.getuser.sonGirisTarihi,
                tcNo: this.$store.getters.getuser.tcNo,
              telefon: this.$store.getters.getuser.telefon,
              telefon2:this.$store.getters.getuser.telefon2,
                tur: this.$store.getters.getuser.tur,
               userToken:this.$store.getters.getuser.userToken,
               uyelikTarihi:this.$store.getters.getuser.uyelikTarihi
             })
            Component.showalert("Sms ile Giriş Aktifleştirildi","success","Tamam")
          }else{
            this.$store.commit('setToken', this.$store.getters.getuser.userToken)
            this.$store.commit('setUs',
              {
                adSoyad:this.$store.getters.getuser.adSoyad,
                adres:this.$store.getters.getuser.adres,
                durum:this.$store.getters.getuser.durum,
                kullaniciId: this.$store.getters.getuser.kullaniciId,
                smsGiris: 0,
                sonGirisTarihi: this.$store.getters.getuser.sonGirisTarihi,
                tcNo: this.$store.getters.getuser.tcNo,
                telefon: this.$store.getters.getuser.telefon,
                telefon2:this.$store.getters.getuser.telefon2,
                tur: this.$store.getters.getuser.tur,
                userToken:this.$store.getters.getuser.userToken,
                uyelikTarihi:this.$store.getters.getuser.uyelikTarihi
              })
            Component.showalert("Sms ile Giriş Kaldırıldı","success","Tamam")
          }
        }else{
          Component.showalert(res.msg,"error","Tamam")
        }
      })

    }
  },
  data(){
    return{
      isactivated:false
    }
  },
  created () {

    console.log(this.$store.getters.getuser)
    this.$store.commit('setmainpage', 'AnaSayfa')
    this.$store.commit('setsubpage', 'Profil')
    this.$store.commit('setbreadcrumbtitle', 'Profil')
  }
}
</script>
<style scoped>

</style>
