<template>
  <header class="topbar">
    <nav class="navbar top-navbar navbar-expand-md navbar-light">
      <!-- ============================================================== -->
      <!-- Logo -->
      <!-- ============================================================== -->
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">

          <!-- Logo icon --><b>

          <img src="https://www.hakanbt.com.tr/images/favicon.png" alt="homepage" class="light-logo"/>
        </b>
          <span>
</span>     </router-link>
      </div>
      <div class="navbar-collapse">

        <ul class="navbar-nav mr-auto mt-md-0">

          <li class="nav-item"><a
            @click="navbarcollapse"
            class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)">
            <i class="fas fa-list-alt"></i>
          </a>
          </li>

          <li class="nav-item">
            <a @click="siderbalcollapse"
               class="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark"
               href="javascript:void(0)">
              <i class="fas fa-list-alt"></i>
            </a>
          </li>

          <li class="nav-item dropdown mega-dropdown"><a
            class="nav-link dropdown-toggle text-muted waves-effect waves-dark" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"><i class="fas fa-pause"></i></a>
                 <mini-dashboard></mini-dashboard>
          </li>
          <!-- ============================================================== -->
          <!-- End Messages -->
          <!-- ============================================================== -->
        </ul>
        <!-- ============================================================== -->
        <!-- User profile and search -->
        <!-- ============================================================== -->
        <ul class="navbar-nav my-lg-0">
          <!-- ============================================================== -->
          <!-- Comment -->
          <!-- ============================================================== -->
       <!--   <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-muted text-muted waves-effect waves-dark" href=""
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fas fa-comment-alt"></i>
              <div class="notify"><span class="heartbit"></span> <span class="point"></span></div>
            </a>
            <div class="dropdown-menu dropdown-menu-right mailbox scale-up">
              <ul>
                <li>
                  <div class="drop-title">Notifications</div>
                </li>
                <li>
                  <div class="message-center">

                    <a href="#">
                      <div class="btn btn-danger btn-circle"><i class="fa fa-link"></i></div>
                      <div class="mail-contnet">
                        <h5>Luanch Admin</h5> <span class="mail-desc">Just see the my new admin!</span> <span
                        class="time">9:30 AM</span></div>
                    </a>

                    <a href="#">
                      <div class="btn btn-success btn-circle"><i class="ti-calendar"></i></div>
                      <div class="mail-contnet">
                        <h5>Event today</h5> <span class="mail-desc">Just a reminder that you have event</span> <span
                        class="time">9:10 AM</span></div>
                    </a>

                    <a href="#">
                      <div class="btn btn-info btn-circle"><i class="ti-settings"></i></div>
                      <div class="mail-contnet">
                        <h5>Settings</h5> <span class="mail-desc">You can customize this template as you want</span>
                        <span class="time">9:08 AM</span></div>
                    </a>

                    <a href="#">
                      <div class="btn btn-primary btn-circle"><i class="ti-user"></i></div>
                      <div class="mail-contnet">
                        <h5>Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a class="nav-link text-center" href="javascript:void(0);"> <strong>Check all notifications</strong>
                    <i class="fa fa-angle-right"></i> </a>
                </li>
              </ul>
            </div>
          </li>-->
         <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" id="2" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false"> <i class="fas fa-envelope"></i>
              <div class="notify"><span class="heartbit"></span> <span class="point"></span></div>
            </a>
            <div class="dropdown-menu mailbox dropdown-menu-right scale-up" aria-labelledby="2">
              <ul>
                <li>
                  <div class="drop-title ">You have 4 new messages</div>
                </li>
                <li>
                  <div class="message-center">

                    <a href="#">
                      <div class="user-img"><img src="" alt="user" class="img-circle"> <span
                        class="profile-status online pull-right"></span></div>
                      <div class="mail-contnet">
                        <h5>Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:30 AM</span>
                      </div>
                    </a>

                    <a href="#">
                      <div class="user-img"><img src="" alt="user" class="img-circle"> <span
                        class="profile-status busy pull-right"></span></div>
                      <div class="mail-contnet">
                        <h5>Sonu Nigam</h5> <span class="mail-desc">I've sung a song! See you at</span> <span
                        class="time">9:10 AM</span></div>
                    </a>

                    <a href="#">
                      <div class="user-img"><img src="" alt="user" class="img-circle"> <span
                        class="profile-status away pull-right"></span></div>
                      <div class="mail-contnet">
                        <h5>Arijit Sinh</h5> <span class="mail-desc">I am a singer!</span> <span
                        class="time">9:08 AM</span></div>
                    </a>

                    <a href="#">
                      <div class="user-img"><img src="" alt="user" class="img-circle"> <span
                        class="profile-status offline pull-right"></span></div>
                      <div class="mail-contnet">
                        <h5>Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a class="nav-link text-center" href="javascript:void(0);"> <strong>See all e-Mails</strong> <i
                    class="fa fa-angle-right"></i> </a>
                </li>
              </ul>
            </div>
          </li> -->
       <!--   <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false"><img src="" alt="user" class="profile-pic"/></a>
            <div class="dropdown-menu dropdown-menu-right scale-up">
              <ul class="dropdown-user">
                <li>
                  <div class="dw-user-box">
                    <div class="u-img"><img src="" alt="user"></div>
                    <div class="u-text">
                      <h4>Yasin Dalkılıç</h4>
                      <p class="text-muted">yasin@gmail.com</p>


                    </div>
                  </div>
                </li>
                <li role="separator" class="divider"></li>
                <li><a class="cursorstyle" @mouseup="routepage('/Profilim','Kullanıcı Profili')"><i
                  class="fas fa-user"></i>Profilim</a></li>
                <li><a class="cursorstyle" @mouseup="routepage('/Mesajlar','Mesajlar')"><i class="fas fa-envelope"></i>
                  Mesajlar</a></li>
                <li><a class="cursorstyle" @mouseup="routepage('/ParolaDegistir','Parola Değiştir')"><i
                  class="fas fa-key"></i> Parola Değiştir</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#"><i class="ti-settings"></i> Account Setting</a></li>
                <li role="separator" class="divider"></li>
                <li><a class="cursorstyle" href="#"><i class="fas fa-power-off"></i> Çıkış Yap</a></li>
              </ul>
            </div>
          </li>-->

        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  import miniDashboard from '../Dashboard/MiniDashboard'
export default {
  components:{
    miniDashboard
  },
  methods: {
    siderbalcollapse () {
      $('body').hasClass('mini-sidebar') ? ($('body').trigger('resize'),
      $('.scroll-sidebar, .slimScrollDiv').css('overflow', 'hidden').parent().css('overflow', 'visible'),
      $('body').removeClass('mini-sidebar'), $('.navbar-brand span').show()) : ($('body').trigger('resize'),
      $('.scroll-sidebar, .slimScrollDiv').css('overflow-x', 'visible').parent().css('overflow', 'visible'),
      $('body').addClass('mini-sidebar'), $('.navbar-brand span').hide())
    },
    navbarcollapse () {
      $('body').toggleClass('show-sidebar'),
      $('.nav-toggler i').toggleClass('ti-menu'),
      $('.nav-toggler i').addClass('ti-close')
    },

    routepage (routename, titlename) {
      this.$store.dispatch('newtitle', titlename)
      this.$router.push(routename)
    }
  }
}
</script>

<style scoped>
  .cursorstyle {
    cursor: pointer;
  }
</style>
