<template>
       <div class="page-inner">
          <div class="row">
            <div class="input-group">
               <input type="text" class="form-control" placeholder="Yardım Ara...">
                  <div class="input-group-append">
                    <button class="btn btn-secondary" type="button">
                      <i class="fa fa-search"></i> Ara
                      </button>
                        </div>
                         </div>
                </div><br><br>
            <div class="row">
                <div class="col-6 col-sm-4 col-lg-2" v-for="item in helpcategories" @mouseup="routedetailt(item.kategoriadi)">
                            <div class="card">
                                <div class="card-body p-3 text-center">
                                    <div class="h1 m-0">{{item.kategoriadi}}</div>
                                       <div class="text-muted mb-3"><img src="https://cdn4.iconfinder.com/data/icons/common-toolbar/36/Open-64.png"></div>
                                </div>
                            </div>
                        </div>

            </div>

                </div>

</template>

<script>
export default {
  data () {
    return {
      helpcategories: [
        {
          kategoriadi: 'Hizmetler'
        },
        {
          kategoriadi: 'Ürünler'
        }
      ]
    }
  },
  created () {
    this.$store.commit('setmainpage', 'AnaSayfa')
    this.$store.commit('setsubpage', 'Yardım')
    this.$store.commit('setbreadcrumbtitle', 'Yardım')
  },
  methods: {
    routedetailt (param) {
      this.$router.push('/Yardim/' + param)
      this.$store.commit('setmainpage', 'Yardım')
      this.$store.commit('setsubpage', param)
      this.$store.commit('setbreadcrumbtitle', param)
    }
  }
}
</script>

<style scoped>
  /* Styles for wrapping the search box */

  /* Bootstrap 4 text input with search icon */

  .has-search .form-control {
      padding-left: 2.375rem;
  }

  .has-search .form-control-feedback {
      position: absolute;
      z-index: 2;
      display: block;
      width: 2.375rem;
      height: 2.375rem;
      line-height: 2.375rem;
      text-align: center;
      pointer-events: none;
      color: #aaa;
  }
</style>
