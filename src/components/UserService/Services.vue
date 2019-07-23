<template>
				<div class="page-inner">
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<div class="card-title">Satın Alınan Hizmetler Listesi</div>
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
</template>

<script>
export default {
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
  },
  methods: {
    routedetail (param) {
      this.$router.push('/HizmetDetay/' + param)
      this.$store.commit('setmainpage', 'Hizmetlerim')
      this.$store.commit('setsubpage', 'Hizmet Yönetimi')
      this.$store.commit('setbreadcrumbtitle', 'Hizmet Yönetimi')
    }
  },
  created () {
    this.$store.commit('setmainpage', 'AnaSayfa')
    this.$store.commit('setsubpage', 'Hizmetler')
    this.$store.commit('setbreadcrumbtitle', 'Satın Alınan Hizmetler')
  }
}
</script>

<style scoped>

</style>
