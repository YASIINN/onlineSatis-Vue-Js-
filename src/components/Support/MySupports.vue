<template>

<div class="page-inner">
<br><br>
     <div class="row">
                    <div class="col-12">
                        <!-- Column -->
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title">Filtrele</h4>
                          <div class="button-group">
                            <button type="button" class="btn waves-effect waves-light btn-rounded btn-primary">Açık</button>
                            <button type="button" class="btn waves-effect waves-light btn-rounded btn-secondary">Kapalı</button>
                            <button type="button" class="btn waves-effect waves-light btn-rounded btn-success">Müşteri Yanıtladı</button>
                            <button type="button" class="btn waves-effect waves-light btn-rounded btn-info">Yanıtladı</button>
                            <button type="button" class="btn waves-effect waves-light btn-rounded btn-warning">İşlemde</button>
                            <button type="button" class="btn waves-effect waves-light btn-rounded btn-danger">Danger</button>
                          </div>
                        </div>
                      </div>
                      <div class="page-inner">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="card">
                              <div class="card-header">
                                <div class="card-title">Destek Taleplerim</div>
                              </div>
                              <div class="card-body table-responsive">
                                <table class="table table-hover">
                                  <thead>
                                  <tr>
                                    <th>Kategori</th>
                                    <th>Ürün Adı</th>
                                    <th>Fiyat</th>
                                    <th>Son Ödeme Tarihi</th>
                                    <th>Durum</th>
                                    <th>Yönet</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr v-for="item in products">
                                    <td>{{item.kategori}}</td>
                                    <td>{{item.urunadi}}</td>
                                    <td><span class="text-muted"><i class="fa fa-clock-o"></i> {{item.fiyat}}</span> </td>
                                    <td>{{item.sonodeme}}</td>
                                    <td>
                                      <div class="badge" :class="{'badge-success':item.durum=='Aktif'?true:false,'badge-warning':item.durum!=='Aktif'?true:false}">{{item.durum}}</div>
                                    </td>
                                    <td> <i class="fas fa-angle-double-right" @mouseup="routedetail(item.id)"></i> </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </div>
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
  methods: {
    routedetail (param) {
      this.$router.push('/UrunDetay/' + param)
      this.$store.commit('setmainpage', 'Ürünlerim')
      this.$store.commit('setsubpage', 'Ürün Yönetimi')
      this.$store.commit('setbreadcrumbtitle', 'Ürün Yönetimi')
    }

  },
  created () {
    this.$store.commit('setmainpage', 'AnaSayfa')
    this.$store.commit('setsubpage', 'Taleplerim')
    this.$store.commit('setbreadcrumbtitle', 'Taleplerim')
  },
  data () {
    return {
      products: [
        {
          id: '1',
          kategori: 'Kategori 1',
          urunadi: 'Ürün Adı 1',
          fiyat: '300 TL',
          sonodeme: '27.02.2019',
          durum: 'Aktif'
        },
        {
          id: '2',
          kategori: 'Kategori 2',
          urunadi: 'Ürün Adı 2',
          fiyat: '500 TL',
          sonodeme: '27.05.2019',
          durum: 'Pasif'
        }
      ]
    }
  }
}
</script>

<style>
</style>
