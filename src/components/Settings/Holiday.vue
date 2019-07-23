<template>
  	<div class="page-inner">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="form-material m-t-40">
            <div class="form-group ">
              <label >Mevcut Parola</label>
              <input type="password"  id="example-email2" name="example-email" class="form-control " placeholder="Mevut Parola"> </div>
            <div class="form-group">
              <label>Yeni Parola</label>
              <input type="password" class="form-control" placeholder="Parola"> </div>
            <div class="form-group">
              <label>Yeni Parola Tekrarı</label>
              <input type="password" class="form-control"  placeholder="Parola Tekrarı"> </div>
            </div>
          <br><br>
          <button class="btn btn-primary" style="float: right" @mouseup="checkvalidtepassword">Parolayı Değiştir</button>

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
    this.$store.commit('setsubpage', 'Resmi Tatil')
    this.$store.commit('setbreadcrumbtitle', 'Resmi Tatil')
  }
}
</script>

<style>

</style>
