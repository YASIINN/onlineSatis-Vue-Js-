<template>
		<div class="page-inner">
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<div class="card-title">E - Fatura Listesi</div>
								</div>
								<div class="card-body table-responsive">
									<table class="table table-hover">
										<thead>
											<tr>
									    <th>Fatura No</th>
                <th>Ürünler</th>
                <th>Tarih </th>
                <th>Tutar</th>
											</tr>
										</thead>
										<tbody>
									  <tr v-for="(item,i) in ebills">
                <td>{{item.faturano}}</td>
                <td>{{item.faturatarih}}</td>
                <td><span class="text-muted"><i class="fa fa-clock-o"></i> {{item.sonodeme}}</span> </td>
                <td>{{item.fiyat}}</td>
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
      ebills: [
        {
          faturano: 'Fatura 1',
          faturatarih: '27.02.2019',
          sonodeme: '27.02.2019',
          fiyat: '500 TL',
          durum: 'Aktif'
        },
        {
          faturano: 'Fatura 2',
          faturatarih: '27.02.2019',
          sonodeme: '27.02.2019',
          fiyat: '232 TL',
          durum: 'Pasif'
        }
      ]
    }
  },
  created () {
    this.$store.commit('setmainpage', 'AnaSayfa')
    this.$store.commit('setsubpage', 'E - Faturalarım')
    this.$store.commit('setbreadcrumbtitle', 'E - Faturalarım')
  },
  methods: {

  },

  name: 'EBills'
}
</script>

<style scoped>

</style>
