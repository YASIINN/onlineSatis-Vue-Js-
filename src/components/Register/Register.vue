<template>
  <div class="container register">
    <!-- Button trigger modal -->

    <!-- Modal -->
    <contract></contract>
    <div class="row">
      <!--    <div class="col-md-3 register-left">
        <img src="https://www.hakanbt.com.tr/images/favicon.png" alt=""/>
        <h3>Hakan Bilişim Teknolojileri Kayıt Olma Sayfasına Hoşgeldiniz</h3>
        <p>Hakan Bilişim</p>
        <input @mouseup="routelogin" type="button" name="" value="Giriş Yap"/><br/>
      </div>
      -->

      <div class="col-md-12 register-right">
        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
          <li class="nav-item">
            <a

              class="nav-link"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="false"
              @mouseup="settype('Kurumsal')"
            >Kurumsal</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
              @click="settype('Bireysel')"
            >Bireysel</a>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show "
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <h3 class="register-heading">Kurumsal Kayıt</h3>

            <div class="row register-form">
              <div class="col-md-12">
                <label>Kişi Bilgileri</label>
                <hr style="border: 1px solid black">
                <div class="form-group">
                  <label>Kullanıcı Adı</label>
                  <input
                    type="text"
                    v-model="registermodel.usermail"
                    class="form-control"
                    :class="validation.usermail"
                    placeholder="example@domain.com *"
                  >
                  <div class="invalid-feedback">
                    LÜTFEN GEÇERLİ BİR EMAİL ADRESİ GİRİNİZ ÖRN: ahmet@gmail.com
                  </div>
                </div>
                <div class="form-group">
                  <label>Adı</label>
                  <input
                    type="text"
                    :class="validation.username"
                    v-model="registermodel.username"
                    class="form-control"
                    placeholder="Adı *"
                  >
                  <div class="invalid-feedback">
                    AD ALANI 3 KARAKTERDEN AZ VE SAYISAL DEĞER İÇEREMEZ
                  </div>
                </div>
                <div class="form-group">
                  <label>SoyAdı</label>
                  <input
                    type="text"
                    :class="validation.userlastname"
                    v-model="registermodel.userlastname"
                    class="form-control"
                    placeholder="SoyAdı *"
                  >
                  <div class="invalid-feedback">
                    SOYAD ALANI 3 KARAKTERDEN AZ VE SAYISAL DEĞER İÇEREMEZ
                  </div>
                </div>

                <div class="form-group">
                  <label>TC No</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="validation.tcno"
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                    minlength="11"
                    maxlength="11"
                    v-model="registermodel.tcno"
                    placeholder="TC No *"
                  >
                  <div class="invalid-feedback">
                    LÜTFEN GEÇERLİ BİR TC NO GİRİNİZ
                  </div>
                </div>
                <div class="form-group">
                    <label>Parola </label>
                    <input

                      :class="validation.password"
                      type="password"
                      class="form-control"
                      v-model="registermodel.userpassword"
                      placeholder="Parola *"
                      @keyup="pswstranger"
                    >
                    <div v-if="ne" class="invalid-feedback">
                      PAROLANIZ 8 KARAKTERDEN KÜÇÜK OLAMAZ
                    </div>
                    <br><br><br>
                    <label v-if="registermodel.userpassword">Parola Güvenlik Seviyesi {{passwordmsg}}</label>
                    <div class="col-12" v-if="registermodel.userpassword">
                      <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar"
                             :style="{width: passwordstrong  +'%'}"
                             style=" height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                </div>
                <div class="form-group">
                  <label>Parola Tekrarı </label>
                  <input
                    v-on:blur="checkpasswords"
                    :class="validation.confirmpassword"
                    type="password"
                    class="form-control"
                    v-model="registermodel.confirmpassword"
                    placeholder="Parola Tekrarı *"
                  >
                  <div v-if="ne" class="invalid-feedback">
                    PAROLANIZ 8 KARAKTERDEN KÜÇÜK OLAMAZ
                  </div>
                  <div v-if="!ne" class="invalid-feedback">
                    PAROLALAR EŞLEŞMİYOR
                  </div>
                </div>
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
                <div class="form-group">
                  <label>Adres </label>
                  <textarea
                    :class="validation.adress"
                    class="form-control"
                    v-model="registermodel.adress"
                    rows="5"
                    placeholder="Adres *"
                  ></textarea>
                  <div class="invalid-feedback">
                    LÜTFEN ADRES BELİRTİNİZ
                  </div>
                </div>
                <div class="form-group">
                  <label>Telefon Numarası </label>

                    <the-mask :mask="'0(###)-###-##-##'"  class="form-control"  placeholder="0(555)-555-55-55"
                              :value="registermodel.userphone"
                              :class="validation.phone"
                              v-model="registermodel.userphone"
                    />
                    <div class="invalid-feedback">
                      LÜTFEN GEÇERLİ BİR TELEFON NUMARASI GİRİNİZ
                    </div>
                </div>
                <label>Kurum Bilgileri</label>
                <hr style="border: 1px solid black">

              </div>
              <div class="col-md-12">
                <div class="form-group">
                    <label>Firma Adı</label>
                    <input
                      type="text"
                      :class="validation.companyname"
                      class="form-control"
                      v-model="registermodel.companyname"
                      placeholder="Firma Adı *"
                    >
                    <div class="invalid-feedback">
                      LÜTFEN GEÇERLİ BİR ŞİRKET ADI GİRİNİZ
                    </div>
                </div>
                <div class="form-group">
                  <label>Vergi Dairesi</label>
                  <input
                    type="text"
                    :class="validation.tax"
                    class="form-control"
                    v-model="registermodel.tax"
                    placeholder="Vergi Dairesi *"
                  >
                  <div class="invalid-feedback">
                    LÜTFEN GEÇERLİ BİR VERGİ DAİRESİ GİRİNİZ
                  </div>
                </div>

                <div class="form-group">
                  <label>Vergi No</label>
                  <input
                    type="text"
                    minlength="10"
                    maxlength="10"
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                    v-model="registermodel.taxno"
                    name="txtEmpPhone"
                    class="form-control"
                    placeholder="Vergi No *"
                    :class="validation.taxno"

                  >
                  <div class="invalid-feedback">
                    LÜTFEN GEÇERLİ BİR VERGİ NUMARASI GİRİNİZ
                  </div>
                </div>
                <div class="form-group">
                  <label>İl </label>
                  <select class="form-control"
                          :class="validation.ccity"
                          @change="ccitychange(cselected)" v-model="cselected">
                    <option
                      v-for="option in coptions"
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
                          :class="validation.cdistrict"
                          v-model="cselectedistrict">
                    <option
                      class="hidden"
                      v-for="item in cdistrict"
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
                <div class="form-group">
                  <label>Adres </label>
                  <textarea
                    :class="validation.cadres"
                    class="form-control"
                    v-model="registermodel.cadres"
                    rows="5"
                    placeholder="Adres *"
                  ></textarea>
                  <div class="invalid-feedback">
                    LÜTFEN ADRES BELİRTİNİZ
                  </div>
                </div>

                <div class="form-group">
                  <label>Telefon Numarası</label>
                    <the-mask :mask="'0(###)-###-##-##'"  class="form-control"  placeholder="0(555)-555-55-55"
                              :value="registermodel.cphone"
                              :class="validation.cphone"
                              v-model="registermodel.cphone"
                    />
                    <div class="invalid-feedback">
                      LÜTFEN GEÇERLİ BİR TELEFON NUMARASI GİRİNİZ
                    </div>
                  </div>

                <div class="form-group">
                  <label>Dahili</label>
                    <input
                      type="text"
                      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                      class="form-control"
                      v-model="registermodel.innerphone"
                      minlength="2"
                      maxlength="5"
                      placeholder="Dahili  "
                    >
                  </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <div class="demo-checkbox">
                      <input type="checkbox" id="basic_checkbox_1" v-model="registermodel.check">
                      <label for="basic_checkbox_1">
                        <a data-toggle="modal" data-target="#exampleModalLong">
                          Sözleşmeyi
                          Onayladım
                        </a>
                      </label>
                    </div>
                  </label>
                </div>
                <input type="button" @mouseup="checkvalidate" class="btnRegister" value="Kayıt Ol">
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade show active"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >

            <h3 class="register-heading">Bireysel Kayıt</h3>

            <div class="row register-form">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Kullancı Adı </label>
                  <input
                    type="text"
                    v-model="registermodel.usermail"
                    class="form-control"
                    :class="validation.usermail"
                    placeholder="example@domain.com *"
                  >
                  <div class="invalid-feedback">
                    LÜTFEN GEÇERLİ BİR EMAİL ADRESİ GİRİNİZ ÖRN: ahmet@gmail.com
                  </div>
                </div>
                <div class="form-group">
                  <label>Adı </label>
                  <input
                    type="text"
                    :class="validation.username"
                    v-model="registermodel.username"
                    class="form-control"
                    placeholder="Adı *"
                  >
                  <div class="invalid-feedback">
                    AD ALANI 3 KARAKTERDEN AZ VE SAYISAL DEĞER İÇEREMEZ
                  </div>
                </div>

                <div class="form-group">
                  <label>SoyAdı </label>
                  <input
                    type="text"
                    :class="validation.userlastname"
                    v-model="registermodel.userlastname"
                    class="form-control"
                    placeholder="SoyAdı *"
                  >
                  <div class="invalid-feedback">
                    SOYAD ALANI 3 KARAKTERDEN AZ VE SAYISAL DEĞER İÇEREMEZ
                  </div>
                </div>

                <div class="form-group">
                  <label>TC No </label>
                  <input
                    type="text"
                    class="form-control"
                    :class="validation.tcno"
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                    minlength="11"
                    maxlength="11"
                    v-model="registermodel.tcno"
                    placeholder="TC No *"
                  >
                  <div class="invalid-feedback">
                    LÜTFEN GEÇERLİ BİR TC NO GİRİNİZ
                  </div>
                </div>
                <div class="form-group">
                    <label>Parola </label>
                    <input
                      :class="validation.password"
                      type="password"
                      class="form-control"
                      v-model="registermodel.userpassword"
                      placeholder="Parola *"
                      @keyup="pswstranger"
                    >
                    <div v-if="ne" class="invalid-feedback">
                      PAROLANIZ 8 KARAKTERDEN KÜÇÜK OLAMAZ
                    </div>
                    <br><br><br>
                    <label v-if="registermodel.userpassword">Parola Güvenlik Seviyesi {{passwordmsg}}</label>
                    <div class="col-12" v-if="registermodel.userpassword">
                      <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar"
                             :style="{width: passwordstrong  +'%'}"
                             style=" height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Parola Tekrarı </label>
                  <input
                    :class="validation.confirmpassword"
                    type="password"
                    class="form-control"
                    v-on:blur="checkpasswords"
                    v-model="registermodel.confirmpassword"
                    placeholder="Parola Tekrarı *"
                  >
                  <div v-if="ne" class="invalid-feedback">
                    PAROLANIZ 8 KARAKTERDEN KÜÇÜK OLAMAZ
                  </div>
                  <div v-if="!ne" class="invalid-feedback">
                    PAROLALAR EŞLEŞMİYOR
                  </div>
                </div>

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
                <div class="form-group">
                  <label>Adres </label>
                  <textarea
                    :class="validation.adress"
                    class="form-control"
                    v-model="registermodel.adress"
                    rows="5"
                    placeholder="Adres *"
                  ></textarea>
                  <div class="invalid-feedback">
                    LÜTFEN ADRES BELİRTİNİZ
                  </div>
                </div>
                <div class="form-group">
                  <label>Telefon Numarası  </label>
                  <the-mask :mask="'0(###)-###-##-##'"  class="form-control"  placeholder="0(555)-555-55-55"
                            :value="registermodel.userphone"
                            :class="validation.phone"
                            v-model="registermodel.userphone"
                  />
                    <div class="invalid-feedback">
                      LÜTFEN GEÇERLİ BİR TELEFON NUMARASI GİRİNİZ
                    </div>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <div class="demo-checkbox">
                      <input type="checkbox" v-model="registermodel.check">
                      <label for="basic_checkbox_1">
                        <a data-toggle="modal" data-target="#exampleModalLong">
                          Sözleşmeyi
                          Onayladım
                        </a>
                      </label>
                    </div>
                  </label>
                </div>
                <input type="button" @mouseup="checkvalidate" class="btnRegister" value="Kayıt Ol">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterService from '../../ApiService/RegisterService'
import Component from '../../Plugins/Component'
import StaticService from '../../ApiService/StaticService'
import md5 from 'md5'
import Contract from '../Contract/Contract'
import Validation from '../../Plugins/Validation'
export default {
  name: 'Register',
  data () {
    return {
      passwordstrong: 0,
      passwordmsg: '',
      ne: true,
      cselected: '0',
      cselectedistrict: '0',
      cdistrict: [{ ilceId: '0', baslik: 'İlçe Seçiniz' }],
      coptions: [{ ilId: '0', baslik: 'Şehir Seçiniz' }],
      selected: '0',
      selectedistrict: '0',
      district: [{ ilceId: '0', baslik: 'İlçe Seçiniz' }],
      options: [],
      validation: {
        username: '',
        ccity: '',
        cdistrict: '',
        userlastname: '',
        usermail: '',
        tcno: '',
        password: '',
        confirmpassword: '',
        city: '',
        district: '',
        adress: '',
        phone: '',
        companyname: '',
        cphone: '',
        tax: '',
        taxno: '',
        cadres: ''
      },
      registermodel: {
        username: '',
        userlastname: '',
        usermail: '',
        username: '',
        userphone: '0',
        userpassword: '',
        cadres: '',
        confirmpassword: '',
        tcno: '',
        check: false,
        companyname: '',
        cphone: '0',
        adress: '',
        tax: '',
        taxno: '',
        faxno: '',
        userphone2: '',
        innerphone: '',
        registertype: 'Bireysel'
      }
    }
  },
  created () {
    this.getcity()
  },
  mounted(){
    $(".phone-inputmask").inputmask("(9999) - 999-99-99")
  },
  components: {
    Contract
  },
  methods: {
    pswstranger () {
      // buraya bakılacak
      if (Component.passwordstronger(this.registermodel.userpassword) != undefined) {
        if (Component.passwordstronger(this.registermodel.userpassword) == 'Zayıf') {
          this.passwordstrong = 33.3
          this.passwordmsg = 'Zayıf'
        } else if (Component.passwordstronger(this.registermodel.userpassword) == 'Orta') {
          this.passwordmsg = 'Orta'
          this.passwordstrong = 66.6
        } else if (Component.passwordstronger(this.registermodel.userpassword) == 'Yüksek') {
          this.passwordmsg = 'Yüksek'
          this.passwordstrong = 100
        }
      }
    },
    getcity () {
      StaticService.gettallcity({
        data: {
          methodName: 'il'
        }
      }).then(res => {
        if (res.data) {
          this.coptions = res.data
          /*    this.coptions.unshift({ ilId: "0", baslik: "Şehir Seçiniz" }) */
          this.options = res.data
          this.options.unshift({ ilId: '0', baslik: 'Şehir Seçiniz' })
        }
      })
    },
    getdistrict (param, arr) {

      StaticService.getdistrict({
        data: {
          methodName: 'ilce',
          ilId: param
        }
      }).then(res => {
        if (res.data) {
          if (arr == 'company') {
            this.cdistrict = res.data
            this.cdistrict.unshift({ ilceId: '0', baslik: 'İlçe Seçiniz' })
          } else {
            this.district = res.data
            this.district.unshift({ ilceId: '0', baslik: 'İlçe Seçiniz' })
          }
        }
      })
    },
    ccitychange (param) {
      this.cselectedistrict = 0
      this.getdistrict(param, 'company')
    },
    citychange (param) {
      this.selectedistrict = 0
      this.getdistrict(param, 'owner')
    },
    clearmodel () {
      this.registermodel = {
        username: '',
        userlastname: '',
        usermail: '',
        usermail2: '',
        username: '',
        userphone: '',
        userpassword: '',
        confirmpassword: '',
        tcno: '',
        check: false,
        companyname: '',
        adress: '',
        tax: '',
        taxno: '',
        userphone2: '',
        registertype: 'Bireysel'
      }
      this.selected = 0
      this.selectedistrict = 0
      this.district = []
    },
    settype (type) {
      if (this.registermodel.registertype != type) {
        this.validation = {
          username: '',
          userlastname: '',
          usermail: '',
          tcno: '',
          password: '',
          confirmpassword: '',
          city: '',
          district: '',
          adress: '',
          phone: '',
          companyname: '',
          tax: '',
          taxno: '',
          ccity: '',
          cphone: '',
          cdistrict: '',
          cadres: ''
        }
      }
      this.registermodel.registertype = type
      this.registermodel.check = false
    },
    registerservice (data) {
      RegisterService.addregister(data).then(res => {

        if (res.status==200) {
          Component.showalert("Lütfen Mail Adresinize Gelen Doğruluma Linkine Tıklayarak Üyeliğinizi Aktif Edin","info","Tamam")
        } else {
          Component.showalert(res.msg,"error","Tamam")
        }
      })
    },
    addregister (type) {
      var data

      this.registermodel.cphone="0"+this.registermodel.cphone
      this.registermodel.userphone="+0"+this.registermodel.userphone
      let companyphoneformat= "("+ this.registermodel.cphone.substr(0,4)+")"+ "-"+ this.registermodel.cphone.substr(4,3)+"-"+ this.registermodel.cphone.substr(7,2)+"-"+ this.registermodel.cphone.substr(9,2)
      let phoneformat= "("+ this.registermodel.userphone.substr(0,4)+")"+ "-"+ this.registermodel.userphone.substr(4,3)+"-"+ this.registermodel.userphone.substr(7,2)+"-"+ this.registermodel.userphone.substr(9,2)
      if (type === 0) {
        data = {
          data: {
            tur: type,
            tcNo: this.registermodel.tcno,
            adSoyad:
                this.registermodel.username.toUpperCase() +
                ' ' +
                this.registermodel.userlastname.toUpperCase(),
            kullaniciAdi: this.registermodel.usermail,
            sifre: md5(this.registermodel.userpassword),
            adres: this.registermodel.adress.toUpperCase(),
            telefon: phoneformat,
            telefon2: this.registermodel.userphone2,
            methodName: 'uyeOl',
            il: this.selected,
            ilce: this.selectedistrict
          }
        }
        this.registerservice(data)
      } else {
        data = {
          data: {
            tur: type,
            tcNo: this.registermodel.tcno,
            adSoyad:
                this.registermodel.username.toUpperCase() +
                ' ' +
                this.registermodel.userlastname.toUpperCase(),
            kullaniciAdi: this.registermodel.usermail,
            sifre: md5(this.registermodel.userpassword),
            adres: this.registermodel.adress.toUpperCase(),
            telefon: phoneformat,
            telefon2: this.registermodel.userphone2,
            methodName: 'uyeOl',
            il: this.selected,
            ilce: this.selectedistrict,
            firmaAdi: this.registermodel.companyname.toUpperCase(),
            firmaIl: this.selected,
            firmaIlce: this.selectedistrict,
            vergiDairesi: this.registermodel.tax.toUpperCase(),
            vergiNo: this.registermodel.taxno,
            firmaAdres: this.registermodel.adress.toUpperCase(),
            firmaTelefon: companyphoneformat,
            firmaTelefon2: this.registermodel.userphone2,
            methodName: 'uyeOl'
          }
        }
        this.registerservice(data)
      }
    },
    routelogin () {
      this.$router.push('/GirisYap')
    },
    checkpasswords(){

      if (
        this.registermodel.userpassword.trim() == '' ||
        this.registermodel.userpassword.trim().length < 8
      ) {
        this.validation.confirmpassword = 'is-invalid'
        this.validation.password = 'is-invalid'
      } else if (
        this.registermodel.confirmpassword.trim() == '' ||
        this.registermodel.confirmpassword.trim().length < 8
      ) {
        this.validation.confirmpassword = 'is-invalid'
        this.validation.password = 'is-invalid'
      } else if (this.registermodel.userpassword.trim() !=
        this.registermodel.confirmpassword.trim()) {
        this.validation.password = 'is-invalid'
        this.validation.confirmpassword = 'is-invalid'
        this.ne = !this.ne
      } else {
        this.validation.password = 'is-valid'
        this.validation.confirmpassword = 'is-valid'
      }

    },
    checkvalidate () {
      this.registermodel.cphone="0"+this.registermodel.cphone
      this.registermodel.userphone="+0"+this.registermodel.userphone
      if (
        Component.validateemail(this.registermodel.usermail) == false) {
        Component.showalert('Lütfen Form Verilerinizi Kontrol Ediniz', 'error', 'Tamam')
        this.validation.usermail = 'is-invalid'
      } else {
        this.validation.usermail = 'is-valid'
      }
      this.validation.username = Validation.checkvalidate(this.registermodel.username, "<", 3);
      this.validation.userlastname = Validation.checkvalidate(this.registermodel.userlastname,"<","1")
      if (
        this.registermodel.userpassword.trim() == '' ||
          this.registermodel.userpassword.trim().length < 8
      ) {
        Component.showalert('Lütfen Form Verilerinizi Kontrol Ediniz', 'error', 'Tamam')
        this.validation.confirmpassword = 'is-invalid'
        this.validation.password = 'is-invalid'
      } else if (
        this.registermodel.confirmpassword.trim() == '' ||
          this.registermodel.confirmpassword.trim().length < 8
      ) {
        Component.showalert('Lütfen Form Verilerinizi Kontrol Ediniz', 'error', 'Tamam')
        this.validation.confirmpassword = 'is-invalid'
        this.validation.password = 'is-invalid'
      } else if (this.registermodel.userpassword.trim() !=
          this.registermodel.confirmpassword.trim()) {
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
      this.validation.adress = Validation.checkvalidate(this.registermodel.adress)
      this.validation.phone = Validation.checkvalidate(this.registermodel.userphone, "<", 10)
      if (this.registermodel.registertype == 'Kurumsal') {
        this.validation.companyname = Validation.checkvalidate(this.registermodel.companyname, "<",3)
        this.validation.tax=Validation.checkvalidate(this.registermodel.tax,"<","3")
        this.validation.taxno=Validation.checkvalidate(this.registermodel.taxno)
        this.validation.ccity = Validation.checkvalidate(this.cselected, "=", "", 0)
        this.validation.cdistrict = Validation.checkvalidate(this.cselectedistrict, "=", "", 0)
        this.validation.cadres = Validation.checkvalidate(this.registermodel.cadres)
        this.validation.cphone = Validation.checkvalidate(this.registermodel.cphone, "<", 10)
        if (this.validation.username == 'is-valid' && this.validation.phone == 'is-valid' &&
            this.validation.adress == 'is-valid' && this.validation.userlastname == 'is-valid' &&
            this.validation.usermail == 'is-valid' && /* this.validation.tcno=="is-valid" && */
            this.validation.password == 'is-valid' && this.validation.city == 'is-valid' &&
            this.validation.district == 'is-valid' && this.validation.confirmpassword == 'is-valid' &&
            this.validation.ccity == 'is-valid' && this.validation.cdistrict == 'is-valid' &&
            this.validation.cphone == 'is-valid' && this.validation.companyname == 'is-valid' &&
            this.validation.taxno == 'is-valid' && this.validation.tax == 'is-valid' &&
            this.validation.cadres == 'is-valid'
        ) {
          if (this.registermodel.check == false) {
            Component.showalert(
              'Lütfen Sözleşmeyi  Onaylayınız',
              'error',
              'Tamam'
            )
          } else {
             this.addregister(1)
          }
        }
      } else {
        if (this.validation.username == 'is-valid' && this.validation.phone == 'is-valid' &&
            this.validation.adress == 'is-valid' && this.validation.userlastname == 'is-valid' &&
            this.validation.usermail == 'is-valid' && /* this.validation.tcno=="is-valid" && */
            this.validation.password == 'is-valid' && this.validation.city == 'is-valid' &&
            this.validation.district == 'is-valid' && this.validation.confirmpassword == 'is-valid'

        ) {
          if (this.registermodel.check == false) {
            Component.showalert(
              'Lütfen Sözleşmeyi  Onaylayınız',
              'error',
              'Tamam'
            )
          } else {
          this.addregister(0)
          }
        }
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
  .register {
    background: -webkit-linear-gradient(right, #3931af, #00c6ff);
    margin-top: 3%;
    padding: 3%
  }

  .register-left {
    text-align: center;
    color: #fff;
    margin-top: 4%
  }

  .register-left input {
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: 700;
    color: #383d41;
    margin-top: 30%;
    margin-bottom: 3%;
    cursor: pointer
  }

  .register-right {
    background: #f8f9fa;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%
  }

  .register-left img {
    margin-top: 15%;
    margin-bottom: 5%;
    width: 25%;
    -webkit-animation: mover 2s infinite alternate;
    animation: mover 1s infinite alternate
  }

  @-webkit-keyframes mover {
    0% {
      transform: translateY(0)
    }
    100% {
      transform: translateY(-20px)
    }
  }

  @keyframes mover {
    0% {
      transform: translateY(0)
    }
    100% {
      transform: translateY(-20px)
    }
  }

  .register-left p {
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%
  }

  .register .register-form {
    padding: 10%;
    margin-top: 10%
  }

  .btnRegister {
    float: right;
    margin-top: 10%;
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    background: #0062cc;
    color: #fff;
    font-weight: 600;
    width: 50%;
    cursor: pointer
  }

  .register .nav-tabs {
    margin-top: 3%;
    border: none;
    background: #0062cc;
    border-radius: 1.5rem;
    width: 28%;
    float: right
  }

  .register .nav-tabs .nav-link {
    padding: 2%;
    height: 34px;
    font-weight: 600;
    color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem
  }

  .register .nav-tabs .nav-link:hover {
    border: none
  }

  .register .nav-tabs .nav-link.active {
    width: 100px;
    color: #0062cc;
    border: 2px solid #0062cc;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem
  }

  .register-heading {
    text-align: center;
    margin-top: 8%;
    margin-bottom: -15%;
    color: #495057
  }
</style>
