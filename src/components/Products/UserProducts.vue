<template>
				<div class="page-inner">
          <div class="row">
            <div class="col-12">
              <h4 class="d-inline"> Satın Alınan Ürünler
        </h4>
              <div class="row" style="padding-top: 20px">
                <div class="col-lg-3 col-md-6" v-for="item in products">
                  <div class="card">
                    <img class="card-img-top img-responsive" src="https://ceotudent.com/wp-content/images/post/user-5/szt7oh.jpg" alt="Card image cap">
                    <div class="card-body">
                      <h4 class="card-title">{{item.baslik}}</h4>
                      <p class="card-text">
                       Kategori : "Kategori " <br>
                       Fiyat :   {{item.fiyat}} {{item.paraBirimi}}

                      </p>
                      <p class="card-text">
                        Ürün Kodu : {{item.urunKodu}}

                      </p>
                      <router-link
                        class="btn btn-primary"
                        :to="'/UrunDetay/'+item.urunId"> Ürün Detayları </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Row -->
            </div>
          </div>
				</div>
</template>

<script>
  import ProductService from '../../ApiService/ProductService'
  import Component from "../../Plugins/Component";
export default {
  data () {
    return {
      products: [
      ]
    }
  },
  methods: {
    routedetail (param) {
      this.$router.push('/UrunDetay/' + param)
      this.$store.commit('setmainpage', 'Ürünlerim')
      this.$store.commit('setsubpage', 'Ürün Yönetimi')
      this.$store.commit('setbreadcrumbtitle', 'Ürün Yönetimi')
    }
  },
  mounted(){

  },
  created () {
    this.$store.commit('setmainpage', 'AnaSayfa')
    this.$store.commit('setsubpage', 'Satın Alınan Ürünler')
    this.$store.commit('setbreadcrumbtitle', 'Satın Alınan Ürünler')
    this.getProduct();
  },
  methods:{
    getProduct(){
     ProductService.getproductdetails({
       ğ
     }).then((res)=>{
       if(res.status===200){
          this.products=res.data
       }else{
         Component.showalert(res.msg,"error","Tamam")
       }
     })
    },
  }
}
</script>

<style scoped>

</style>
