<template>

        <div class="card card-outline-info">
          <div class="card-header">
            <h4 class="m-b-0 text-white">Yeni Firma Oluştur</h4>
          </div>
          <div class="card-body">
            <div class="form-body">
              <h3 class="card-title">Firma Bilgileri</h3>
              <hr>
              <div class="row p-t-20">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Firma Adı *</label>
                    <input type="text" id="firstName"
                           :class="validation.companyname"
                           class="form-control" v-model="company.companyname" placeholder="Firma Adı Giriniz">
                    <div class="invalid-feedback">
                      LÜTFEN ŞİRKET ADI GİRİNİZ
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group ">

                    <label class="control-label">Vergi Dairesi *</label>
                    <input type="text"
                           :class="validation.tax"
                           v-model="company.tax" id="lastName" class="form-control form-control-danger"
                           placeholder="Vergi Dairesi Giriniz">
                    <div class="invalid-feedback">
                      LÜTFEN GEÇERLİ BİR VERGİ DAİRESİ GİRİNİZ
                    </div>
                  </div>
                </div>
              </div>
              <!--/row-->
              <div class="row">
                <div class="col-md-12">
                  <!--has-success-->
                  <div class="form-group ">
                    <label class="control-label">Vergi No *</label>
                    <input type="text"

                           onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                           maxlength="10"
                           minlength="10"
                           :class="validation.taxno"
                           v-model="company.taxno" class="form-control form-control-danger" placeholder="Vergi Numarası Giriniz">
                    <div class="invalid-feedback">
                      LÜTFEN GEÇERLİ BİR VERGİ NUMARASI GİRİNİZ
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
                              :class="validation.addres"
                              v-model="company.addres" rows="5" placeholder="Adres Giriniz"
                              id="comment"></textarea>
                    <div class="invalid-feedback">
                      LÜTFEN GEÇERLİ BİR ADRES GİRİNİZ
                    </div>
                  </div>
                </div>
                <!--/span-->
              </div>
              <!--/row-->
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Telefon *</label>

                    <the-mask :mask="'0(###)-###-##-##'"  class="form-control"  placeholder="0(555)-555-55-55"
                              :value="company.phone"
                              :class="validation.phone"
                              v-model="company.phone"
                    />
                    <div class="invalid-feedback">
                      LÜTFEN GEÇERLİ BİR TELEFON NUMARASI GİRİNİZ
                    </div>
                  </div>
                </div>
                <!--/span-->
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Dahili</label>
                    <input type="text"
                           onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                           maxlength="5"
                           minlength="5"
                           v-model="company.phone2" class="form-control form-control-danger" placeholder="0XXXX">
                  </div>
                </div>
                <!--/span-->
              </div>

            </div>

            <div style="float:right">
              <button type="button" class="btn btn-success" @click="checkvalidate"><i class="fa fa-check"></i> Kaydet
              </button>
              <button type="button" class="btn btn-inverse">Vazgeç</button>
            </div>
          </div>
        </div>

</template>

<script>
  import Component from '../../Plugins/Component'
  import StaticService from '../../ApiService/StaticService'
  import CompanyService from '../../ApiService/CompanyService'
  import Validation from '../../Plugins/Validation'

  export default {
    created() {
      this.getcity()
      this.$store.commit('setmainpage', 'AnaSayfa')
      this.$store.commit('setsubpage', 'Yeni Firma Oluştur')
      this.$store.commit('setbreadcrumbtitle', 'Yeni Firma Oluştur')
    },
    data() {
      return {
        selected: '0',
        selectedistrict: '0',
        district: [{ilceId: '0', baslik: 'İlçe Seçiniz'}],
        options: [],
        validation: {
          companyname: '',
          tax: '',
          taxno: '',
          addres: '',
          phone: '',
          phone2: '',
          city: '',
          district: ''
        },
        company: {
          companyname: '',
          tax: '',
          taxno: '',
          addres: '',
          phone: '',
          phone2: ''
        }
      }
    },
    methods: {
      getcity() {
        StaticService.gettallcity({
          data: {
            methodName: 'il'
          }
        }).then(res => {
          if (res.data) {
            this.options = res.data
            this.options.unshift({ilId: '0', baslik: 'Şehir Seçiniz'})
          }
        })
      },
      citychange(param) {
        this.selectedistrict = 0
        StaticService.getdistrict({
          data: {
            methodName: 'ilce',
            ilId: param
          }
        }).then(res => {
          if (res.data) {
            this.district = res.data
            this.district.unshift({ilceId: '0', baslik: 'İlçe Seçiniz'})
          }
        })
      },
      clearcompany() {
        this.company = {
          companyname: '',
          tax: '',
          taxno: '',
          addres: '',
          phone: '',
          phone2: '',
          city: '',
          district: ''
        }
        this.validation = {
          companyname: '',
          tax: '',
          taxno: '',
          addres: '',
          phone: '',
          phone2: '',
          city: '',
          district: ''
        },
        this.selected = 0
        this.selectedistrict = 0
        this.district = [{ilceId: '0', baslik: 'İlçe Seçiniz'}]
      },
      addnewcompany() {
      let phoneformat=  "("+ this.company.phone.substr(0,4)+")"+ "-"+ this.company.phone.substr(4,3)+"-"+ this.company.phone.substr(7,2)+"-"+ this.company.phone.substr(9,2)
        CompanyService.addnewcompany(
          {
            data: {
              kullaniciId: this.$store.getters.getuser.kullaniciId,
              firmaAdi: this.company.companyname.toUpperCase(),
              vergiDairesi: this.company.tax.toUpperCase(),
              vergiNo: this.company.taxno,
              adres: this.company.addres.toUpperCase(),
              il: this.selected,
              ilce: this.selectedistrict,
              telefon: this.company.phone,
              userToken: this.$store.getters.getuser.userToken,
              telefon2: this.company.phone2,
              methodName: 'firmaTanimla'
            }
          }
        ).then((res) => {
          if (res.status == 200) {
            Component.showalert(
              'Firma Başarıyla Oluşturuldu',
              'success',
              'Tamam'
            )
            this.clearcompany()
          } else {
            Component.showalert(
            res.msg,
              'error',
              'Tamam'
            )
          }
        })
      },
      checkvalidate() {
        debugger
        this.company.phone=this.company.phone;
        this.validation.companyname = Validation.checkvalidate(this.company.companyname, "<", 3);
        this.validation.tax = Validation.checkvalidate(this.company.tax)
        this.validation.taxno = Validation.checkvalidate(this.company.taxno)
        this.validation.city = Validation.checkvalidate(this.selected, "=", "", 0)
        this.validation.district = Validation.checkvalidate(this.selectedistrict, "=", "", 0)
        this.validation.addres = Validation.checkvalidate(this.company.addres)
        this.validation.phone = Validation.checkvalidate(this.company.phone, "<", 10)
        if (this.validation.companyname == "is-valid" && this.validation.tax == "is-valid" && this.validation.taxno == "is-valid"
          && this.validation.addres == "is-valid" && this.validation.phone == "is-valid" && this.validation.city == "is-valid" && this.validation.district == "is-valid"
        ) {
          this.addnewcompany()
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
  .form-control:focus{
    color: #495057;
    background-color: #fff;
    border-color: #e3eeff;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(0,123,255,.10);
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.10);
  }
</style>
