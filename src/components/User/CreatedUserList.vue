<template>
  <div class="page-inner">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Oluşturulan Kullanıcıların  Listesi</div>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-hover">
              <thead>
              <tr>
                <th>Kullanıcı Adı Soyad</th>
                <th>TC No</th>
                <th>Adres</th>
                <th>Telefon</th>
                <th>İşlemler</th>
              </tr>
              </thead>
              <tbody><br>
              <tr v-for="(item,i) in userlist" :key="i">
                <td>{{item.adSoyad}}</td>
                <td>{{item.tcNo}}</td>
                <td>{{item.adres}}</td>
                <td>{{item.telefon}}</td>
                <td>
                  <div class="button-group">
                    <button class="btn btn-success" data-toggle="tooltip" data-placement="bottom" title="Firma Ata"  @mouseup="routeuser(item,'/Firmaata/')"> <i class="fas fa-angle-right"></i> </button>
                    <button class="btn btn-success" data-toggle="tooltip" data-placement="bottom" title="Firmaları Göster"  @mouseup="routeuser(item,'/Kullanicifirmalari/')"> <i class="fas fa-eye"></i> </button>

                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import UserService from '../../ApiService/UserService'
  import Component from '../../Plugins/Component'
    export default {
        name: "CreatedUserList",
      data(){
          return{
            userlist:[],
          }
      },
      created() {
        this.getcreateduser();
        this.$store.commit('setmainpage', 'Anasayfa')
        this.$store.commit('setsubpage', 'Oluşturduğum Kullanıcılar')
        this.$store.commit('setbreadcrumbtitle', 'Oluşturduğum Kullanıcılar')
      },
      methods:{
          routeuser(item,route){
            debugger
            this.$router.push(route+item.kullaniciId)
          },
          getcreateduser(){
              UserService.createduserlist({
                data:{
                  kullaniciId: this.$store.getters.getuser.kullaniciId,
                  userToken: this.$store.getters.getuser.userToken,
                  methodName: "olusturulanList"
                }
              }).then((res)=>{
                if(res.status===200){
                  this.userlist=res.data
                }else {
                      Component.showalert(res.msg,"error","Tamam")
                }
              })
          }
      }
    }
</script>

<style scoped>

</style>
