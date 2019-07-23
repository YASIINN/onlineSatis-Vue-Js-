<template>
  <div class="page-inner">
    <div class="row"  v-for="item in prlist">
      <div class="col-8">
                    	<span class='zoom' id='ex1'  >
                               <img :src="zoomimg"  style="width: 500px; height: 500px; border: 1px"  >
                    	</span>
      </div>
      <div class="col-4 ">
        <img   @click="imgover(data)" style="width:33%; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; cursor: pointer; max-width: 250px; max-height: 150px"
              :src="data"
              alt="Card image cap"
              v-for="data in item.img">
      </div>
    </div>
    <hr >
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Ürüne Ait Özellikler</h4>
            <!-- Nav tabs -->
            <div class="vtabs ">
              <ul class="nav nav-tabs tabs-vertical" role="tablist">
                <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#home9" role="tab"><span><i class="ti-home"></i>
                Genel Özellikler
                </span></a> </li>
                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#profile9" role="tab"><span><i class="ti-user"></i>
                Detaylar
                </span></a> </li>
                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#messages9" role="tab"><span><i class="ti-email"></i>
                Açıklamalar Yorumlar
                </span></a> </li>
              </ul>
              <!-- Tab panes -->
              <div class="tab-content">
                <div class="tab-pane active" id="home9" role="tabpanel">
                  <div class="p-20">
                    <h3>Best Clean Tab ever</h3>
                    <h4>you can use it with the small code</h4>
                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                  </div>
                </div>
                <div class="tab-pane  p-20" id="profile9" role="tabpanel">2</div>
                <div class="tab-pane p-20" id="messages9" role="tabpanel">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('setmainpage', 'Ürünlerim')
    this.$store.commit('setsubpage', 'Ürün Yönetimi')
    this.$store.commit('setbreadcrumbtitle', 'Ürün Yönetimi')
  },
  methods:{
    imgover(data){
        this.zoomimg=data
    },
  },
  data () {
    return {
      prlist: [
        {
          img:[
            "http://ceotudent.com/wp-content/images/post/user-5/szt7oh.jpg",
            "https://kemalseckin.com/images/gallery/Yemek-ve-Urun-Fotograflar/3180-kemal-seckin-yemek-ve-urun-fotograflari-degirmen.jpg",
            "http://ceotudent.com/wp-content/images/post/user-5/szt7oh.jpg",
          ]
        }
      ],
      zoomimg:""
    }
  }
}
</script>

<style scoped>

</style>
