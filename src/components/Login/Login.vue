<template>
  <section id="wrapper" class="login-register login-sidebar" style="background-image:url(https://www.hakanbt.com.tr/images/2.jpg);">
        <div class="login-box card">
            <div class="card-body">
                <div class="form-horizontal form-material" id="loginform" >
                    <a href="javascript:void(0)" class="text-center db"><img src="../../assets/img/2.jpg" alt="Home" /><br/><img src="../../assets/img/1.jpg" alt="Home" /></a>
                    <div class="form-group m-t-40">
                        <div class="col-xs-12">
                            <input class="form-control"  @keypress="checkuser($event)" v-model="user.username" type="text" required="" placeholder="Kullanıcı Adı..">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <input class="form-control" @keypress="checkuser($event)"  v-model="user.password" type="password" required="" placeholder="Parolanız..">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="d-flex no-block align-items-center">

                            <div class="ml-auto">
                                <a style="cursor:pointer" @mouseup="routepage('ParolamiUnuttum')" id="to-recover" class="text-muted"><i class="fa fa-lock m-r-5"></i> Parolamı Unuttum </a>
                            </div>
                        </div>
                    </div>
                    <div class="form-group text-center m-t-20">
                        <div class="col-xs-12">
                            <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="button" @mouseup="checkuser('mouse')">Giriş Yap</button>
                        </div>
                    </div>

                    <div class="form-group m-b-0">
                        <div class="col-sm-12 text-center">
                     Hala Bize Katılmadın mı ? <a style="cursor:pointer"  class="text-primary m-l-5" @mouseup="routepage('Kayitol')" ><b>Kayıt Ol</b></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import Component from '../../Plugins/Component'
import md5 from 'md5'
export default {

  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    routepage (router) {
      this.$router.push('/' + router)
    },
    checkuser (e) {
      if (e != 'mouse') {
        if (e.key == 'Enter') {
          this.check()
        }
      } else {
        this.check()
      }
    },
    check () {
      if (Component.validateemail(this.user.username) == false) {
        Component.showalert('Lütfen Geçerli Kullanıcı Adı Giriniz', 'error', 'Tamam')
      } else if (this.user.password.trim() == '' || this.user.password.trim().length < 8) {
        Component.showalert('Parolanız 8 Karakterden Küçük Olamaz ', 'error', 'Tamam')
      } else {
        this.login()
      }
    },
    login () {
      const user = {
        kullaniciAdi: this.user.username,
        sifre: md5(this.user.password),
        methodName: 'login'
      }
      this.$store.dispatch('login', { data: user })
        .then((response) => {
          if (typeof (response) !== 'boolean') {
            Component.showalert(response, 'error', 'Tamam')
          } else {
            this.$router.push('/')
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
  body,html{margin:0;padding:0;height:100%}.user_card{height:400px;width:350px;margin-top:auto;margin-bottom:auto;background:#fefefe;position:relative;display:flex;justify-content:center;flex-direction:column;padding:10px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);-webkit-box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);-moz-box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);border-radius:5px}.brand_logo_container{position:absolute;height:170px;width:170px;top:-75px;border-radius:50%;background:#1e88e5;padding:10px;text-align:center}.brand_logo{height:150px;width:150px;border-radius:50%;border:2px solid #fff}.form_container{margin-top:100px}.login_btn{width:100%;background:#1e88e5!important;color:#fff!important}.login_btn:focus{box-shadow:none!important;outline:0!important}.login_container{padding:0 2rem}.input-group-text{background:#1e88e5!important;color:#fff!important;border:0!important;border-radius:.25rem 0 0 .25rem!important}.input_pass:focus,.input_user{box-shadow:none!important;outline:0!important}.custom-checkbox .custom-control-input:checked~.custom-control-label::before{background-color:#1e88e5!important}
</style>
