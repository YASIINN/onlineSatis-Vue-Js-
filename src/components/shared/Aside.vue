<template>
  <aside class="left-sidebar">
    <div class="scroll-sidebar">

      <div class="user-profile"
           style="background: url(https://wrappixel.com/demos/admin-templates/material-pro/assets/images/background/user-info.jpg) no-repeat;">
        <!-- User profile image -->
        <div class="profile-img"><img src="../../assets/img/2.jpg" alt="user"/></div>
        <!-- User profile text-->
        <div class="profile-text"><a href="#" class="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button"
                                     aria-haspopup="true" aria-expanded="true">{{$store.getters.getuser.adSoyad}} </a>
          <div class="dropdown-menu animated flipInY">
            <a  @mouseup="routeprofile('/Profilim','Kullanıcı Profili')"    class="dropdown-item cursorstyle">
            <i class="fas fa-user" style="padding-right: 20px"></i>               Profilim
           </a>
            <a  class="dropdown-item cursorstyle" @mouseup="routeprofile('/Mesajlar','Mesajlar')">
              <i class="fas fa-envelope" style="padding-right: 20px"></i> Mesajlar</a>
            <a
               @mouseup="routeprofile('/ParolaDegistir','Parola Değiştir')"
            class="dropdown-item cursorstyle" style="padding-right: 20px"><i
            class="fas fa-key" style="padding-right: 20px"></i> Parola Değiştir</a>
            <div class="dropdown-divider"></div>
            <a  class="dropdown-item cursorstyle" ><i class="fas fa-phone" style="padding-right: 20px"></i> SMS İle Giriş




            </a>
            <div class="dropdown-divider"></div>
            <a  class="dropdown-item cursorstyle" @mouseup="exitsystem"><i class="fas fa-power-off" style="padding-right: 20px"></i> Çıkış Yap</a></div>
        </div>
      </div>

      <nav class="sidebar-nav">
        <ul id="sidebarnav">
         <!-- <li :key="i" v-for="(item,i) in routerlist" :class="{'active':item.active}">
            <a class="waves-effect waves-dark"
               @mouseup="routepage(item.to,item.router,item.subitem.length,item)">
              <i :class="item.icon"></i>
              <span> {{item.router}}</span>
              <span :class="item.subicon" v-if="item.subitem.length>0"></span>
            </a>

            <div v-if="item.subitem.length>0">
              <ul v-if="item.subitem.length>0" v-show="item.active">
                <li :key="subitem.subrouter" v-for="subitem in item.subitem">
                  <a>
                    <span class="sub-item cursorstyle" @mouseup="setsubrouter(subitem.to,subitem.subrouter,true)">{{subitem.subrouter}}</span>
                  </a></li>
              </ul>
            </div>
          </li> -->
          <li>
            <router-link to="/Urunlerim" class="waves-effect waves-dark">
              <i class="fa fa-cog"></i><span class="hide-menu">Ürünlerim </span>
            </router-link>
          </li>

          <li>
            <router-link to="/Urunolustur" class="waves-effect waves-dark">
              <i class="fa fa-cog"></i><span class="hide-menu">Ürün Oluştur </span>
            </router-link>
          </li>
          <li>
            <router-link to="/Olusturulankisiler" class="waves-effect waves-dark">
              <i class="fa fa-cog"></i><span class="hide-menu">Oluşturduğum Kişiler </span>
            </router-link>
          </li>
          <li>
            <router-link to="/Odemedonemleri" class="waves-effect waves-dark">
              <i class="fa fa-cog"></i><span class="hide-menu">Mevcut Ödeme Dönemleri</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Odemedonemitanimla" class="waves-effect waves-dark">
            <i class="fa fa-cog"></i><span class="hide-menu">Ödeme Dönemi Tanımla</span>
          </router-link>
          </li>
          <li>
            <router-link to="/Sektorler" class="waves-effect waves-dark">
              <i class="fa fa-cog"></i><span class="hide-menu">Mevcut Sektörler</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Sektortanimla" class="waves-effect waves-dark">
              <i class="fa fa-cog"></i><span class="hide-menu">Sektör Tanımla</span>
            </router-link>
          </li>

          <li>
            <router-link to="/Firmaekle" class="waves-effect waves-dark">
              <i class="fa fa-cog"></i><span class="hide-menu">Firma Tanımla</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Firmalarim" class="waves-effect waves-dark">
              <i class="fa fa-cog"></i><span class="hide-menu">Firmalarım </span>
            </router-link>
          </li>
          <li>
            <router-link to="/Yenikullanici" class="waves-effect waves-dark">
              <i class="fa fa-cog"></i><span class="hide-menu">Kişi Oluştur </span>
            </router-link>
          </li>

          <li class="nav-devider"></li>
          <li class="nav-small-cap">AYARLAR</li>
          <li>
            <router-link to="/Resmitatil" class="waves-effect waves-dark">
              <i class="fa fa-cog"></i><span class="hide-menu">Resmi Tatil</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Mesai" class="waves-effect waves-dark">
              <i class="fa fa-cog"></i><span class="hide-menu">Mesai</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Unvan" class="waves-effect waves-dark">
              <i class="fa fa-cog"></i><span class="hide-menu">Unvan</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="sidebar-footer">
      <!-- item--><a href="" class="link" data-toggle="tooltip" title="Settings"><i class="ti-settings"></i></a>
      <!-- item--><a href="" class="link" data-toggle="tooltip" title="Email"><i class="mdi mdi-gmail"></i></a>
      <!-- item--><a href="" class="link" data-toggle="tooltip" title="Logout"><i class="mdi mdi-power"></i></a></div>
  </aside>
</template>
<script>
export default {
  data () {
    return {
      routerlist: [
        {
          router: 'Müşteri Paneli',
          to: '/',
          active: true,
          subitem: [],
          icon: 'fas fa-home',
          routename: 'Dash'
        },
        {
          router: 'Destek Sistemi',
          active: false,
          routename: 'MySupports NewSupport',
          subitem: [
            {
              to: '/Taleplerim',
              subrouter: 'Taleplerim',
              active: false
            },
            {
              to: '/YeniTalep',
              subrouter: 'Talep Oluştur',
              active: false
            }
          ],
          icon: 'fas fa-comments',
          subicon: 'fas fa-angle-down'
        },
        {
          router: 'Sipariş Ve Ödemeler',
          active: false,
          icon: 'fab fa-cc-apple-pay',
          subicon: 'fas fa-angle-down',
          routename: 'MyOrders PaymentPending',
          subitem: [
            {
              to: '/Siparislerim',
              subrouter: 'Siparişlerim',
              active: false
            },
            {
              to: '/OdemeBekleyenSiparisler',
              subrouter: 'Ödeme Bekleyen Siparişler',
              active: false
            }
          ]
        },
        {
          router: 'Ürünlerim',
          active: false,
          subitem: [],
          to: '/Urunlerim',
          routename: 'MyProduct',
          icon:
              'fas fa-list-alt'
        },
        {
          router: 'Dosyalar',
          active: false,
          subitem: [],
          to: '/Dosyalar',
          routename: 'Files',
          icon:
              'fas fa-folder'
        },
        {
          router: 'Yardım',
          active: false,
          subitem: [],
          routename: 'Help',
          to: '/Yardim',
          icon:
              'fas fa-hands-helping'
        },
        {
          router: 'Faturalar',
          active: false,
          subitem: [],
          routename: 'MyBills',
          to: '/Faturalarim',
          icon:
              'fas fa-money-bill-alt'
        },
        {
          router: 'E - Faturalar',
          active: false,
          subitem: [],
          routename: 'Ebills',
          to: '/E-Faturalarim',
          icon:
              'fas fa-money-bill-alt'
        },

        {
          router: 'Hizmetlerim',
          active: false,
          icon: 'fas fa-cloud',
          subitem: [],
          routename: 'Service',
          to: '/Hizmetler'
        }
      ]
    }
  },
  created () {
    this.setactive()
  },
  methods: {
    setsubarrow (item, i) {
      this.routerlist.forEach((x) => {
        if (x != item) {
          x.active = false
          x.subicon ? x.subicon = 'fas fa-angle-down' : ''
        }
      })
      if (item.subitem.length > 0 && item.active == false) {
        item.subicon = 'fas fa-angle-up'
      } else {
        item.subicon = 'fas fa-angle-down'
      }
      item.active = !item.active
    },
    routesetting (param) {
      this.$router.push(param)
    },
    setactive () {
      this.routerlist.forEach((x) => {
        if (x.routename == this.$route.name || x.routename.includes(this.$route.name)) {
          x.subicon ? x.subicon = 'fas fa-angle-up' : ''
          x.active = true
        } else {
          x.active = false
        }
      })
    },
    exitsystem(){
      localStorage.clear()
      this.$router.push("/Girisyap")
    },
    setsubrouter (routename, titlename) {
      this.$store.dispatch('newtitle', titlename)
      this.$router.push(routename)
    },
    routeprofile (routename, titlename) {
      this.$store.dispatch('newtitle', titlename)
      this.$router.push(routename)
    },
    routepage (routename, titlename, subroute, item) {
      if (subroute) {
        this.routerlist.forEach((x) => {
          if (x != item) {
            x.active = false
            x.subicon ? x.subicon = 'fas fa-angle-down' : ''
          }
        })
        if (item.subitem.length > 0 && item.active == false) {
          item.subicon = 'fas fa-angle-up'
        } else {
          item.subicon = 'fas fa-angle-down'
        }
        item.active = !item.active
      } else {
        this.routerlist.forEach((x) => {
          if (x != item) {
            x.active = false
            x.subicon ? x.subicon = 'fas fa-angle-down' : ''
          }
        })
        item.active = !item.active
        this.$store.dispatch('newtitle', titlename)
        this.$router.push(routename)
      }
    }
  }
}
</script>
<style scoped>
  .cursorstyle {
    cursor: pointer;
  }
</style>
