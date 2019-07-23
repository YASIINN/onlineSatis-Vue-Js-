<template>
  <div class="container">
  <div class="page-inner">
    <div  class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="form-material m-t-200">
              <div class="form-group ">
                <label >Telefonunuza Gelen Onay Kodunu Giriniz </label>
                <input type="password"  onkeypress='return event.charCode >= 48 && event.charCode <= 57'   v-model="code"  class="form-control "> </div>
              <label style="text-decoration: underline;cursor: pointer" @mouseup="setcodeagain"> Onay Kodu Alamadınız mı ? </label>
            <br><br>

            <button class="btn btn-primary" style="float: right" @mouseup="validatecode">Doğrula</button>
              <button class="btn btn-primary" v-if="codeagain" style=" float: left" @mouseup="sendcodeagain">Onay Kodunu Tekrar Gönder</button>

          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
  </div>
</template>

<script>
import md5 from 'md5'
import Component from '../../Plugins/Component'
import RegisterService from '../../ApiService/RegisterService'
export default {
  data () {
    return {
      code: '',
      codeagain: false
    }
  },
  methods: {
    setcodeagain () {
      this.codeagain = true
    },
    validatecode () {
      if (this.code.trim() != '') {
        if (localStorage.getItem('psw') != null && localStorage.getItem('psw') != undefined && localStorage.getItem('psw').trim() != '' &&
                localStorage.getItem('registerid') != null && localStorage.getItem('registerid') != undefined && localStorage.getItem('registerid').trim() != ''
        ) {
          if (md5(this.code) == localStorage.getItem('psw')) {
            this.setactivate()
          } else {
            this.setactivate()
            // Component.showalert("Onay Kodu Geçersiz", "error", "Tamam")
          }
        } else {
          this.setactivate()
        }
      } else {
        Component.showalert('Onay Kodu Geçersiz', 'error', 'Tamam')
      }
    },
    setactivate () {
      RegisterService.activationcode(
        {
          data: {
            kullaniciId: Component.b64DecodeUnicode(localStorage.getItem('registerid')),
            methodName: 'sifreDogrula',
            dogrulamaKodu: this.code
          }
        }
      ).then((res) => {
        if (res.data.length) {
          localStorage.removeItem('registerid')
          localStorage.removeItem('psw')
          localStorage.removeItem('time')
          this.$router.push('/GirisYap')
        } else {
          Component.showalert('Onay Kodu Geçersiz', 'error', 'Tamam')
        }
      })
    },
    sendcodeagain () {
      if (localStorage.getItem('registerid') != null && localStorage.getItem('registerid') != undefined && localStorage.getItem('registerid').trim() != '') {
        RegisterService.sendcode({
          data: {
            kullaniciId: Component.b64DecodeUnicode(localStorage.getItem('registerid')),
            methodName: 'smsGonder'
          }
        }).then((res) => {
          this.codeagain = false
          if (res.status == 200) {
            Component.showalert(res.msg, 'success', 'Tamam')
          } else {
            Component.showalert('Sms Gönderilirken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyin', 'error', 'Tamam')
          }
        })
      } else {
        Component.showalert('Onay Kodu Geçersiz', 'error', 'Tamam')
      }
    }
  }
}
</script>

<style scoped>

</style>
