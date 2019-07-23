<template>
  <div class="container register">
    <div class="row">
      <!--    <div class="col-md-3 register-left">
        <img src="https://www.hakanbt.com.tr/images/favicon.png" alt=""/>
        <h3>Hakan Bilişim Teknolojileri Kayıt Olma Sayfasına Hoşgeldiniz</h3>
        <p>Hakan Bilişim</p>
        <input @mouseup="routelogin" type="button" name="" value="Giriş Yap"/><br/>
      </div>
      -->

      <div class="col-md-12 register-right">

        <div class="tab-content" id="myTabContent">

          <div
            class="tab-pane fade show active"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >


            <div class="row register-form">
              <div class="col-md-12">
                <input type="button" @mouseup="sendmailagain" class="btnRegister" value="Tekrar Mail Gönder">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Component from '../../Plugins/Component'
  import RegisterService from '../../ApiService/RegisterService'

  export default {
    created() {
      Component.showalert("Lütfen Mail Adresinizi Kontrol Edin", "warning", "Tamam")
    },
    methods: {
      sendmailagain() {
        if (localStorage.getItem('registerid') != null && localStorage.getItem('registerid') != undefined && localStorage.getItem('registerid').trim() != '') {
          RegisterService.sendcode({
            data: {
              kullaniciId: Component.b64DecodeUnicode(localStorage.getItem("registerid")),
              methodName: "mailGonder"
            }
          }).then((res) => {
            if(res.status==200){
              Component.showalert("Mail Gönderildi.Lütfen Mail Adresinizi Kontrol Edin","success","Tamam")
            }else{
              Component.showalert("Mail Gönderilirken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyin","error","Tamam")
            }
          })
        }else{
          Component.showalert("Lütfen Mail Adresinizi Kontrol Edin","error","Tamam")
        }
      }
    }
  }
</script>
<style scoped>
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
