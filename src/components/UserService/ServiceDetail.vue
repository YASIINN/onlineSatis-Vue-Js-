<template>
  <div class="page-inner">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Hizmet Detayı</div>
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
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1111111</td>
                <td>33333</td>
                <td><span class="text-muted"><i class="fa fa-clock-o"></i> 222222}</span> </td>
                <td>44444444444</td>
                <td>
                  6665555555555555
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
export default {
  created () {
    this.$store.commit('setmainpage', 'Hizmetlerim')
    this.$store.commit('setsubpage', 'Hizmet Yönetimi')
    this.$store.commit('setbreadcrumbtitle', 'Hizmet Yönetimi')
  }
}
</script>

<style scoped>

</style>
