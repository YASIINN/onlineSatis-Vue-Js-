<template>
			<div class="page-inner">
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<div class="card-title">Sipariş Listesi</div>
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
                <td> İşlemler </td>
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
  created () {
    this.$store.commit('setmainpage', 'AnaSayfa')
    this.$store.commit('setsubpage', 'Siparişlerim')
    this.$store.commit('setbreadcrumbtitle', 'Siparişlerim')
  },
  data () {
    return {
      products: [
        {
          kategori: 'Kategori 1',
          urunadi: 'Ürün Adı 1',
          fiyat: '300 TL',
          sonodeme: '27.02.2019',
          durum: 'Aktif'
        },
        {
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
