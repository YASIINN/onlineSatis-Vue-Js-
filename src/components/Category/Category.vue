<template>
  <div class="page-inner">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-outline-info">
          <div class="card-header">
            <h4 class="m-b-0 text-white">Kategori Tanımla</h4>
          </div>
          <div class="card-body">
            <div class="form-body">
              <h3 class="card-title">Kategori Bilgileri</h3>
              <hr>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="form-group">
                      <label>Kategori </label>
                      <input
                        @keypress="addnewcategory($event)"
                        type="text"
                        class="form-control"
                        v-model="categoryname"
                        placeholder="Kategori Adı "
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div style="float:right">
                <button type="button" class="btn btn-success" @mouseup="addnewcategory('mouse')" ><i class="fa fa-check"></i> Kaydet
                </button>
              </div>

              <div class="row" v-if="categorylist.length">
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="form-group">
                      <label style="text-decoration: underline">Kategori Listesi  </label>
                      <table class="table table-hover">
                        <thead>
                        <tr>
                          <th>#</th>
                          <th>Ödeme  Dönemi</th>
                        </tr>
                        </thead>
                        <tbody><br>
                        <tr v-for="item in categorylist">
                          <td>{{item.odemeDonemId}}</td>
                          <td>{{item.detay}}</td>
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
    </div>

  </div>
</template>

<script>
    export default {
        name: "Category",
      created() {
          this.getallcategory();
      },
      methods:{
        categoryservice(){},
        getallcategory(){},
        addnewcategory(e){
          if (e != 'mouse') {
            if (e.key == 'Enter') {
              if(this.categoryname.trim()=='' || this.categoryname.trim().length<1){
                Component.showalert("Lütfen  Kategori Adı Belirtiniz","warning","Tamam")
              }else{
                this.categoryservice()
              }
            }
          } else {
            if(this.categoryname.trim()=='' || this.categoryname.trim().length<1){
              Component.showalert("Lütfen Kategori Adı Belirtiniz","warning","Tamam")
            }else{
              this.categoryservice()
            }
          }
        },

      },
      data(){return{
        categorylist:[],
        categoryname:""
      }}
    }
</script>

<style scoped>

</style>
