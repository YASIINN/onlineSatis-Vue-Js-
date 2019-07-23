<template>
  <div class="page-inner">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-outline-info">
          <div class="card-header">
            <h4 class="m-b-0 text-white">Yeni Kullanıcı Oluştur</h4>
          </div>
          <div class="card-body">
            <div class="form-body">
              <h3 class="card-title">Kullanıcı Bilgileri</h3>
              <hr>
              <div class="row p-t-20">
                <div class="col-md-12">
                  <div class="form-group">

                    <label class="control-label">Kullanıcı Adı *</label>
                    <input type="text" id="firstName"
                           :class="validation.usermail"
                           class="form-control" v-model="user.usermail" placeholder="example@domain.com">
                    <div class="invalid-feedback">
                      LÜTFEN GEÇERLİ BİR EMAİL ADRESİ GİRİNİZ ÖRN: ahmet@gmail.com
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group ">

                    <label class="control-label">Adı*</label>
                    <input type="text"
                           :class="validation.username"
                           v-model="user.username" id="lastName" class="form-control form-control-danger"
                           placeholder="Adı">
                    <div class="invalid-feedback">
                      AD ALANI 3 KARAKTERDEN AZ VE SAYISAL DEĞER İÇEREMEZ
                    </div>
                  </div>
                </div>
              </div>
              <!--/row-->
              <div class="row">
                <div class="col-md-12">
                  <!--has-success-->
                  <div class="form-group ">
                    <label class="control-label">SoyAdı *</label>
                    <input type="text"
                           placeholder="SoyAdı"
                           :class="validation.userlastname"
                           v-model="user.userlastname" class="form-control form-control-danger" >
                    <div class="invalid-feedback">
                      SOYAD ALANI 3 KARAKTERDEN AZ VE SAYISAL DEĞER İÇEREMEZ
                    </div>

                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <label>TC No </label>
                    <input
                      type="text"
                      class="form-control"
                      :class="validation.tcno"
                      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                      minlength="11"
                      maxlength="11"
                      v-model="user.tc"
                      placeholder="TC No *"
                    >
                    <div class="invalid-feedback">
                      LÜTFEN GEÇERLİ BİR TC NO GİRİNİZ
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Parola </label>
                    <input
                      type="password"
                      class="form-control"
                      :class="validation.password"
                      v-model="user.password"
                      placeholder="Parola *"
                      @keyup="pswstranger"
                    >
                    <div v-if="ne" class="invalid-feedback">
                      PAROLANIZ 8 KARAKTERDEN KÜÇÜK OLAMAZ
                    </div>
                    <br><br><br>
                    <label v-if="user.password">Parola Güvenlik Seviyesi {{passwordmsg}}</label>
                    <div class="col-12" v-if="user.password">
                      <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar"
                             :style="{width: passwordstrong  +'%'}"
                             style=" height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Parola Tekrarı</label>
                    <input
                      type="password"
                      v-on:blur="checkpasswords"
                      class="form-control"
                      :class="validation.confirmpassword"
                      v-model="user.confirmpassword"
                      placeholder="Parola Tekrarı *"
                    >
                    <div v-if="ne" class="invalid-feedback">
                      PAROLANIZ 8 KARAKTERDEN KÜÇÜK OLAMAZ
                    </div>
                    <div v-if="!ne" class="invalid-feedback">
                      PAROLALAR EŞLEŞMİYOR
                    </div>
                  </div>
                </div>

                <!--/span-->
                <div class="col-md-12">
                  <div class="form-group">
                    <label>İl </label>
                    <select class="form-control"
                            :class="validation.city"
                            @change="citychange(selected)" v-model="selected">
                      <option
                        v-for="option in options"
                        :disabled="option.ilId==0"
                        v-bind:value="option.ilId"
                      >{{ option.baslik }}
                      </option>
                    </select>
                    <div class="invalid-feedback">
                      LÜTFEN İL SEÇİNİZ
                    </div>
                  </div>
                  <div class="form-group">
                    <label>İlçe </label>
                    <select class="form-control"
                            :class="validation.district"
                            v-model="selectedistrict">
                      <option
                        class="hidden"
                        v-for="item in district"
                        :disabled="item.ilceId==0"
                        :selected="item.ilceId==0"
                        v-bind:value="item.ilceId"
                      >{{ item.baslik }}
                      </option>
                    </select>
                    <div class="invalid-feedback">
                      LÜTFEN İLÇE SEÇİNİZ
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="comment">Adres *</label>
                    <textarea class="form-control"
                              :class="validation.adress"
                              v-model="user.adress" rows="5" placeholder="Teknokent"
                              id="comment"></textarea>
                    <div class="invalid-feedback">
                      LÜTFEN   GEÇERLİ BİR ADRES GİRİNİZ
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Telefon Numarası *</label>
                  <the-mask :mask="'0(###)-###-##-##'"  class="form-control"  placeholder="0(555)-555-55-55"
                            :value="user.phone"
                            :class="validation.phone"
                            v-model="user.phone"
                  />



                  <div class="invalid-feedback">
                    LÜTFEN   GEÇERLİ BİR TELEFON NUMARASI GİRİNİZ
                  </div>
                </div>
              </div>
            </div>

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




                          <!--   <select class="form-control-sm" v-model="item.selecttype" @change="selectchange(item,i)">
                              <option :value="1">Yönetici</option>
                              <option :value="0">Alt Yönetici</option>
                            </select> -->
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
              <button type="button" class="btn btn-success" @click="checkvalidate"><i class="fa fa-check"></i> Kaydet
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
import StaticService from '../../ApiService/StaticService'
import CompanyService from '../../ApiService/CompanyService'
import Multiselect from 'vue-multiselect'
import Validation from '../../Plugins/Validation'
import md5 from 'md5'
export default {
  created () {
    this.getcity()
    this.getcompanylist()
    this.$store.commit('setmainpage', 'AnaSayfa')
    this.$store.commit('setsubpage', 'Yeni Kullanıcı Oluştur')
    this.$store.commit('setbreadcrumbtitle', 'Yeni Kullanıcı Oluştur')
  },
  data () {
    return {
      ne: true,
      selected: '0',
      selectedistrict: '0',
      district: [{ ilceId: '0', baslik: 'İlçe Seçiniz' }],
      options: [],
      value: [],
      selectedcompany:[],
      selecttype: '',
      passwordstrong: 0,
      passwordmsg: '',
      optionss: [
      ],
      validation: {
        usermail: '',
        username: '',
        userlastname: '',
        tc: '',
        password: '',
        confirmpassword: '',
        city: '',
        district: '',
        adress: '',
        phone: ''
      },
      user: {
        usermail: '',
        username: '',
        userlastname: '',
        tc: '',
        password: '',
        confirmpassword: '',
        city: '',
        district: '',
        adress: '',
        phone: '0'
      }
    }
  },
  components: {
    Multiselect
  },
  methods: {
    checkpasswords(){

      if (
        this.user.password.trim() == '' ||
        this.user.password.trim().length < 8

      ) {
        this.validation.confirmpassword = 'is-invalid'
        this.validation.password = 'is-invalid'
      } else if (
        this.user.confirmpassword.trim() == '' ||
        this.user.confirmpassword.trim().length < 8
      ) {
        this.validation.confirmpassword = 'is-invalid'
        this.validation.password = 'is-invalid'
      } else if (this.user.password.trim() !=
        this.user.confirmpassword.trim()) {
        this.validation.password = 'is-invalid'
        this.validation.confirmpassword = 'is-invalid'
        this.ne = !this.ne
      } else {
        this.validation.password = 'is-valid'
        this.validation.confirmpassword = 'is-valid'
      }

    },
    pswstranger () {
      if (Component.passwordstronger(this.user.password) != undefined) {
        if (Component.passwordstronger(this.user.password) == 'Zayıf') {
          this.passwordstrong = 33.3
          this.passwordmsg = 'Zayıf'
        } else if (Component.passwordstronger(this.user.password) == 'Orta') {
          this.passwordmsg = 'Orta'
          this.passwordstrong = 66.6
        } else if (Component.passwordstronger(this.user.password) == 'Yüksek') {
          this.passwordmsg = 'Yüksek'
          this.passwordstrong = 100
        }
      }
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
    removecompany(param){
      this.selectedcompany= this.selectedcompany.filter((x)=>{
        return x.firmaId!=param.firmaId
      })
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
    getcity () {
      StaticService.gettallcity({
        data: {
          methodName: 'il'
        }
      }).then(res => {
        if (res.data) {
          this.options = res.data
          this.options.unshift({ ilId: '0', baslik: 'Şehir Seçiniz' })
        }
      })
    },
    citychange (param) {
      this.selectedistrict = 0
      StaticService.getdistrict({
        data: {
          methodName: 'ilce',
          ilId: param
        }
      }).then(res => {
        if (res.data) {
          this.district = res.data
          this.district.unshift({ ilceId: '0', baslik: 'İlçe Seçiniz' })
        }
      })
    },
    companychange(item){
      item.submanager=true
      item.manager=false
      this.selectedcompany.push(item)
    },
    cleardatamodel(){
      this.selectedcompany=[],
      this.validation=  {
        usermail: '',
          username: '',
          userlastname: '',
          tc: '',
          password: '',
          confirmpassword: '',
          city: '',
          district: '',
          adress: '',
          phone: ''
      },
        this.user={
          usermail: '',
          username: '',
          userlastname: '',
          tc: '',
          password: '',
          confirmpassword: '',
          city: '',
          district: '',
          adress: '',
          phone: ''
        }
    },
    addnewuser(){
      const companylist=[]
      let phoneformat= "("+ this.user.phone.substr(0,4)+")"+ "-"+ this.user.phone.substr(4,3)+"-"+ this.user.phone.substr(7,2)+"-"+ this.user.phone.substr(9,2)
      if(this.selectedcompany.length){
        this.selectedcompany.forEach((x)=>{
          companylist.push({
            firmaId:x.firmaId,
            yetkiSeviye:x.manager==true?1:0,
          })
        })
        CompanyService.addcompanyuser({
          data:{
            kullaniciId: this.$store.getters.getuser.kullaniciId,
            userToken: this.$store.getters.getuser.userToken,
            tur:1,
            tcNo:this.user.tc,
            adSoyad:this.user.username.toUpperCase()+ " "+ this.user.userlastname,
            kullaniciAdi:this.user.usermail,
            sifre:md5(this.user.confirmpassword),
            adres:this.user.adress.toUpperCase(),
            il:this.selected,
            ilce:this.selectedistrict,
            telefon:phoneformat,
            telefon2:"",
            firmaList:companylist,
            methodName: "yoneticiTanimla"
          }
        }).then((res)=>{
          if(res.status==200){

            Component.showalert("İşlem Başarıyla Gerçekleşti","success","Tamam")
          }else{
            Component.showalert(res.msg,"error","Tamam")
          }
        })
      }else{
        CompanyService.addcompanyuser({
          data:{
            kullaniciId: this.$store.getters.getuser.kullaniciId,
            userToken: this.$store.getters.getuser.userToken,
            tur:1,
            tcNo:this.user.tc,
            adSoyad:this.user.username.toUpperCase()+ " "+ this.user.userlastname,
            kullaniciAdi:this.user.usermail,
            sifre:md5(this.user.confirmpassword),
            adres:this.user.adress.toUpperCase(),
            il:this.selected,
            ilce:this.selectedistrict,
            telefon:phoneformat,
            telefon2:"",
            methodName: "yoneticiTanimla"

          }
        }).then((res)=>{
            if(res.status==200){
                Component.showalert("İşlem Başarıyla Gerçekleşti","success","Tamam")
            }else{
              Component.showalert(res.msg,"error","Tamam")
            }
        })
      }
    },
    checkvalidate () {
      this.user.phone="0"+this.user.phone;
      if (
        Component.validateemail(this.user.usermail) == false) {
        Component.showalert('Lütfen Form Verilerinizi Kontrol Ediniz', 'error', 'Tamam')
        this.validation.usermail = 'is-invalid'
      } else {
        this.validation.usermail = 'is-valid'
      }
      this.validation.username = Validation.checkvalidate(this.user.username, "<", 3);

      this.validation.userlastname = Validation.checkvalidate(this.user.userlastname,"<","1")

      /* if  (!Component.checktc(this.registermodel.tcno)){
                this.validation.tcno="is-invalid"
              }
              else{
                this.validation.tcno="is-valid"
              } */

      if (
        this.user.password.trim() == '' ||
          this.user.password.trim().length < 8

      ) {
        Component.showalert('Lütfen Form Verilerinizi Kontrol Ediniz', 'error', 'Tamam')
        this.validation.confirmpassword = 'is-invalid'
        this.validation.password = 'is-invalid'
      } else if (
        this.user.confirmpassword.trim() == '' ||
          this.user.confirmpassword.trim().length < 8
      ) {
        Component.showalert('Lütfen Form Verilerinizi Kontrol Ediniz', 'error', 'Tamam')
        this.validation.confirmpassword = 'is-invalid'
        this.validation.password = 'is-invalid'
      } else if (this.user.password.trim() !=
          this.user.confirmpassword.trim()) {
        Component.showalert('Lütfen Form Verilerinizi Kontrol Ediniz', 'error', 'Tamam')
        this.validation.password = 'is-invalid'
        this.validation.confirmpassword = 'is-invalid'
        this.ne = !this.ne
      } else {
        this.validation.password = 'is-valid'
        this.validation.confirmpassword = 'is-valid'
      }
      this.validation.city = Validation.checkvalidate(this.selected, "=", "", 0)
      this.validation.district = Validation.checkvalidate(this.selectedistrict, "=", "", 0)
      this.validation.adress = Validation.checkvalidate(this.user.adress)
      this.validation.phone = Validation.checkvalidate(this.user.phone, "<", 10)
      if(this.validation.usermail=="is-valid" && this.validation.username=="is-valid" && this.validation.userlastname=="is-valid" &&
    /*  this.validation.tcno=="is-valid" &&*/ this.validation.password=="is-valid" && this.validation.confirmpassword=="is-valid" &&
    this.validation.city=="is-valid" && this.validation.district=="is-valid" && this.validation.adress=="is-valid" && this.validation.phone=="is-valid"
      ){
        this.addnewuser();
      }
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
