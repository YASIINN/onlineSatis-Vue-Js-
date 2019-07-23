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
  import PhoneService from '../../ApiService/PhoneLoginService'
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
        if (localStorage.getItem('us') != null && localStorage.getItem('us') != undefined && localStorage.getItem('us').trim() != ''
        ){
          PhoneService.verifycode({
            data:{
              kullaniciId: JSON.parse(Component.b64DecodeUnicode(localStorage.getItem("us"))).kullaniciId,
              dogrulamaKodu:this.code,
              methodName: "smsDogrula"
            }
          }).then((res)=>{
            if(res.status==200){

              localStorage.setItem('token', Component.b64EncodeUnicode(JSON.stringify({ token: res.data[0].userToken })))
              this.$store.commit('setToken',  res.data[0].userToken)
             this.$store.commit('setUs', res.data[0])
          this.$router.push('/')
            }else{
              Component.showalert(res.msg,"error","Tamam")
            }
          })

        }else{
          Component.showalert('Beklenmeyen Bir Hata Gerçekleşti Lütfen Tekrar Giriş Yapın', 'error', 'Tamam')
        }
      },
      sendcodeagain () {
        if (localStorage.getItem('us') != null && localStorage.getItem('us') != undefined && localStorage.getItem('us').trim() != ''
        )
        {
          PhoneService.sendphonecode({
            data:{
              kullaniciId: JSON.parse(Component.b64DecodeUnicode(localStorage.getItem("us"))).kullaniciId,
              methodName: "smsGonder"
            }
          }).then((res)=>{

            this.codeagain=false
            if(res.status==200){

              //bakılacak

            }else{
              Component.showalert('Sms Gönderilirken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyin', 'error', 'Tamam')
            }

          })
        }else{
          Component.showalert('Beklenmeyen Bir Hata Gerçekleşti Lütfen Tekrar Giriş Yapın', 'error', 'Tamam')
        }


        /*
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
        }*/
      }
    }
  }
</script>

<style scoped>

</style>
