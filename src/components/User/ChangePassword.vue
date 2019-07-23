<template>

	<div class="page-inner">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="form-material m-t-40">
            <div class="form-group ">
              <label >Mevcut Parola </label>
              <input type="password" v-model="passwords.oldpass" id="example-email2" name="example-email" class="form-control " placeholder="Mevut Parola"> </div>
            <div class="form-group">
              <label>Yeni Parola</label>
              <input type="password" class="form-control"

                     v-on:keyup="pswstranger"
                     v-model="passwords.newpass" placeholder="Parola"> </div>
            <br><br><br>
            <label v-if="passwords.newpass">Parola Güvenlik Seviyesi {{passwordmsg}}</label>
            <div class="col-12" v-if="passwords.newpass">
              <div class="progress">
                <div class="progress-bar bg-success" role="progressbar"
                     :style="{width: passwordstrong  +'%'}"
                     style=" height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
            <div class="form-group">
              <label>Yeni Parola Tekrarı</label>
              <input type="password" class="form-control" v-model="passwords.newpassconfirm" placeholder="Parola Tekrarı"> </div>
            </div>
          <br><br>
          <button class="btn btn-primary" style="float: right" @mouseup="checkvalidtepassword">Parolayı Değiştir</button>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Component from '../../Plugins/Component'
import md5 from 'md5'
import UserService from '../../ApiService/UserService'

export default {
  methods: {
    updatepassword () {
      UserService.changepassword(
        {
          data: {
            kullaniciId: this.$store.getters.getuser.kullaniciId,
            userToken: this.$store.getters.getuser.userToken,
            eskiSifre: md5(this.passwords.oldpass),
            yeniSifre: md5(this.passwords.newpass),
            methodName: 'sifreGuncelle'

          }
        }
      ).then((res) => {
        if (res.status == 200) {
          this.passwords={
            newpass: '',
            newpassconfirm: '',
            oldpass: ''
          }
          Component.showalert(res.msg, 'success', 'Tamam')
        } else {
          Component.showalert(res.msg, 'error', 'Tamam')
        }
      })
    },
    pswstranger () {
      debugger
      // buraya bakılacak
      if (Component.passwordstronger(this.passwords.newpass) != undefined) {
        if (Component.passwordstronger(this.passwords.newpass) == 'Zayıf') {
          this.passwordstrong = 33.3
          this.passwordmsg = 'Zayıf'
        } else if (Component.passwordstronger(this.passwords.newpass) == 'Orta') {
          this.passwordmsg = 'Orta'
          this.passwordstrong = 66.6
        } else if (Component.passwordstronger(this.passwords.newpass) == 'Yüksek') {
          this.passwordmsg = 'Yüksek'
          this.passwordstrong = 100
        }
      }
    },
    checkvalidtepassword () {
      if (this.passwords.oldpass.trim() == '' || this.passwords.oldpass.length < 8) {
        Component.showalert('Mevcut Parolanız Boş veya 8 Karakterden Küçük olamaz', 'error', 'Tamam')
      } else if (this.passwords.newpass.trim() == '' || this.passwords.newpass.trim().length < 8) {
        Component.showalert('Yeni Parolanız Boş veya 8 Karakterden Küçük olamaz', 'error', 'Tamam')
      } else if (this.passwords.newpassconfirm.trim() == '' || this.passwords.newpassconfirm.trim().length < 8) {
        Component.showalert('Yeni  Parolanız Boş veya 8 Karakterden Küçük olamaz', 'error', 'Tamam')
      } else if (this.passwords.newpass != this.passwords.newpassconfirm) {
        Component.showalert('Parolalar Eşleşmiyor.', 'error', 'Tamam')
      } else {
        this.updatepassword()
      }
    }
  },
  data () {
    return {
      passwordstrong: 0,
      passwordmsg: '',
      passwords: {
        newpass: '',
        newpassconfirm: '',
        oldpass: ''
      }
    }
  },
  created () {
    this.$store.commit('setmainpage', 'AnaSayfa')
    this.$store.commit('setsubpage', 'Parola Değiştir')
    this.$store.commit('setbreadcrumbtitle', 'Parola Değiştir')
  }
}
</script>

<style scoped>

</style>
