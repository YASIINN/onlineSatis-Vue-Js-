<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card card-outline-info">
        <div class="card-header">
          <h4 class="m-b-0 text-white">Yeni Ürün Oluştur</h4>
        </div>
        <div class="card-body">
            <div class="form-body">
              <h3 class="card-title">Ürün Bilgileri</h3>
              <hr>
              <div class="row p-t-20">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Ürün Başlığı </label>
                    <input type="text"
                           :class="validation.prname"
                           v-model="product.prname"
                           class="form-control invalid-feedback" placeholder="Ürün Başlığı Giriniz">
                    <div class="invalid-feedback">
                      ÜRÜN ADI BOŞ GİRİLEMEZ
                    </div>
                     </div>
                </div>
              </div>
              <div class="row p-t-20">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Ürün İçeriği </label>
                    <input type="text"
                           :class="validation.prcontent"
                           v-model="product.prcontent"
                           class="form-control" placeholder="Ürün İçeriği Giriniz">

                    <div class="invalid-feedback">
                      ÜRÜN İÇERİĞİ BOŞ GİRİLEMEZ
                    </div>

                   </div>
                </div>
              </div>
              <div class="row p-t-20">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Ürün Fiyatı  </label>
                    <input type="number"
                           onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                           :class="validation.pprice"
                           v-model="product.pprice"
                           min="0"
                           max="99999999999999999999999"
                           class="form-control" placeholder="Ürün Fiyatı Giriniz">
                    <div class="invalid-feedback">
                      ÜRÜN FİYATI SIFIR GİRİLEMEZ
                    </div>
                    </div>
                </div>
              </div>
              <div class="row p-t-20">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Para Birimi </label>

                    <div class="demo-radio-button">
                      <input name="group4" type="radio" value="₺" id="radio_12" v-model="product.ppricetype" class="radio-col-blue" />
                      <label for="radio_12">₺ (Türk Lirası)</label>
                      <input name="group4" value="$" type="radio" id="radio_13" v-model="product.ppricetype" class="radio-col-blue" />
                      <label for="radio_13">$ (ABD Doları)</label>
                      <div class="invalid-feedback">
                       PARA BİRİMİ SEÇİNİZ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row p-t-20">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Ürün Kodu </label>
                    <input type="text"

                           :class="validation.prcode"
                           id="firstName" class="form-control"

                           v-model="product.prcode"
                           placeholder="Ürün Kodu Giriniz">

                    <div class="invalid-feedback">
                      ÜRÜN KODU GİRİNİZ
                    </div>
                   </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Ödeme Dönemi</label>
                    <select class="form-control custom-select"
                            :class="validation.paytype"
                            v-model="selected">
                      <option
                        v-for="option in coptions"
                        :disabled="option.odemeDonemId==0"
                        v-bind:value="option.odemeDonemId"
                      >{{ option.detay }}
                      </option>
                    </select>
                    <div class="invalid-feedback">
                      ÖDEME DÖNEMİ SEÇİNİZ
                    </div>
                  </div>
                </div>
              </div>
              <div class="row p-t-20">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">İskonto </label>
                    <input type="text"  class="form-control"
                           onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                           :class="validation.discount"
                           placeholder="İskonto Giriniz" v-model="product.discount">
                    <div class="invalid-feedback">
                      GEÇERLİ BİR İSKONTO BELİRTİNİZ
                    </div>

                     </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Resim Seç </h4>
                      <input type="file"  @change="onChange($event)" id="input-file-now" data-show-remove="false" class="dropify" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group ">
                    <label class="control-label">Ürün Türü</label>
                    <select class="form-control custom-select"
                            :class="validation.prtpe"
                            v-model="selectedtype">
                      <option

                        v-for="item in type"
                        :disabled="item.id==0"
                        v-bind:value="item.id"
                      >{{ item.text }}
                      </option>
                    </select>
                    <div class="invalid-feedback">
                      ÜRÜN TÜRÜ SEÇİNİZ
                    </div>

                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Kategori</label>
                    <select class="form-control custom-select"
                            :class="validation.category"
                            v-model="selectedcategory">
                      <option
                        v-for="data in category"
                        :disasbled="data.id==0"
                        v-bind:value="data.id"
                      >{{data.text}} </option>

                    </select>
                    <div class="invalid-feedback">
                      ÜRÜN TÜRÜ SEÇİNİZ
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">

                <div class="col-md-12">

                  <div class="form-group ">


                    <label class="control-label">Sektör Listesi</label>



                    <multiselect
                      v-bind:style="activestyle"
                      v-model="value" :allow-empty="false" :options="optionss" :multiple="true"
                                 :close-on-select="false"
                                 :clear-on-select="false" :preserve-search="false"
                                 select-label="Seç"
                                 selected-label="Seçili"
                                 deselect-label="Seçimi Kaldır"
                                 @select="sectorchange"
                                 @remove="removesector"
                                 :searchable="false"

                                 placeholder="Sektör Seçiniz" label="sektor" track-by="sektor" :preselect-first="false">
                      <template
                        slot="selection"
                                slot-scope="{ values, search, isOpen }"><span  class="multiselect__single form" v-if="values.length &amp;&amp; !isOpen">
              {{ values.length }} Sektör Seçildi
                </span>  </template>

                    </multiselect>

                    </div>
                    <div  v-if="isshow">
                      <label style="color: red">GEÇERLİ BİR İSKONTO BELİRTİNİZ</label>
                    </div>
                  </div>
              </div>

              <div class="row p-t-20">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Özellikler </label>

                    <table class="table table-hover">
                    <thead>
                    </thead><br>
                      <tr v-for="(row,indexs) in productDesct">
                        <td>
                          <div class="row">
                          <div class="col-12">
                          <input type="text"
                                 :class="row.headclass"
                                 class="form-control" v-model="row.baslik" placeholder="Özellik Giriniz">
                          <div class="invalid-feedback">
                            ÖZELLİK BİLGİLERİ GİRİNİZ
                          </div>
                          </div>
                          </div><br>
                          <div class="row">
                            <div class="col-12">
                              <div class="card">
                                <div class="card-body">
                                  <h4 class="card-title">Ürün Detaylarını Giriniz</h4>
                                    <div class="form-group">
                                      <vue-editor
                                        :class="row.detailclass"
                                        v-model="row.detay"></vue-editor>
                                      <div class="invalid-feedback">
                                        ÖZELLİK DETAYLARI GİRİNİZ
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </td>

                      </tr>
                      <div class="button-group">
                      <button class="btn btn-danger" v-if="editedmode" @mouseup="canceledit" style="float: right">Vazgeç</button>
                      <button class="btn btn-warning" v-if="editedmode" @mouseup="addnewrow('edit')" style="float: right">Düzenle</button>
                      <button class="btn btn-primary" v-if="!editedmode" @mouseup="addnewrow('add')" style="float: right">Yeni Özellik Ekle</button>

                      </div>
                    </table>
                  </div>
                </div>
              </div>



              <div class="row p-t-20" v-if="addetproperties.length">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label">Eklenen Özellikler </label>

                    <table class="table table-hover">
                      <thead>
                      <th>Başlık</th>
                      <th>Özellik</th>
                      <th>İşlemler</th>
                      </thead><br>
                      <tr v-for="(row,indexs) in addetproperties">
                        <td>
                          <div class="row">
                            <div class="col-12">

                              {{row.baslik}}
                            </div>
                          </div><br>

                        </td>
                        <td>
                          <div class="row">
                            <div class="col-12">
                                  <div class="form-group">
                                    <div v-html="row.detay"></div>
                              </div>
                            </div>
                          </div>



                        </td>
                        <td>
                          <div class="button-group">


                            <button class="btn  btn-danger"
                                    @mouseup="removeproperties(row,indexs)" data-toggle="tooltip" data-placement="bottom" title="Özelliği Sil" >  <i class="fas fa-trash"></i>  </button>
                            <button class="btn  btn-warning"
                                    @mouseup="editproperties(row,indexs)" data-toggle="tooltip" data-placement="bottom" title="Özelliği Düzenle" >  <i class="fas fa-edit"></i>  </button>
                          </div>
                        </td>
                      </tr>

                    </table>
                  </div>
                </div>
              </div>
              <!--/row-->





            </div>
            <div class="form-actions" style="float: right">
              <button type="button" class="btn btn-success" @mouseup="checkvalidate"> <i class="fa fa-check"></i> Kaydet</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Component from '../../Plugins/Component'
  import dropify from '../../../public/assets/css/dropify.css'
  import Multiselect from 'vue-multiselect'
  import PayTermService from '../../ApiService/PayTermService'
  import ProductService from '../../ApiService/ProductService'
  import SectorService from "../../ApiService/SectorService";
  import Validation from '../../Plugins/Validation'
  import { VueEditor } from "vue2-editor";
  import swal from "sweetalert";

  export default {
    data(){
      return{
        addetproperties:[],
        successtyle:{
          border:"2px solid #28a745",
          borderRadius: "5px"
        },
        errorstyle:{
          border:"1px solid red",
          borderRadius: "5px"
        },
        isshow:false,
        activestyle:"",
        product:{
          prname:"",
          prcode:"",
          prcontent:"",
          pprice:"",
          ppricetype:"₺",
          discount:"",
        },
        validation:{
          prname:"",
          prcode:"",
          prcontent:"",
          pprice:"",
          ppricetype:"₺",
          discount:"",
          prtpe:"",
          paytype:"",
          category:""
        },
        value: [],
        color:"red",
        category:[{id:0,text:"Kategori Seçiniz"}, {id:1,text:"Kategori 1"}],
        type:[{id:0,text:"Ürün Türü Seçiniz"}, {id:1,text:"Ürün"},{id:2,text:"Hizmet"}],
        coptions: [{ odemeDonemId: '0', detay: 'Ödeme Dönemi Seçiniz' }],
        selected: '0',
        selectedtype:"0",
        paytermlist:[],
        imglist:[],
        selectedcategory:"0",
        optionss:[],
        editedindex:"",
        editedmode:false,
        sectorlist:[],
        productDesct:[
          {
            baslik:"",
            detay:"",
            headclass:"",
            detailclass:""
          },
        ]
      }
    },
        name: "NewProduct",

      methods:{
        canceledit(){
          this.productDesct=[{
            baslik:"",
            detay:"",
            headclass:"",
            detailclass:""
          }]
          this.editedindex="",
            this.editedmode=false
        },
        editproperties(item,i){
          this.editedindex=i
          this.editedmode=true
          this.productDesct[0].baslik=item.baslik
          this.productDesct[0].detay=item.detay
          this.productDesct[0].headclass=""
          this.productDesct[0].detailclass=""
        },
        removeproperties(item,i){
          swal({
            title: 'Özelliği Silmek İstediğinize Emin Misiniz ?',
            icon: 'warning',
            buttons: ['Hayır', 'Evet'],
            dangerMode: true
          })
            .then((willDelete) => {
              if (willDelete) {
                    this.addetproperties.splice(i,1)
              }
            })
        },
        checkvalidate(){
          this.validation.prname = Validation.checkvalidate(this.product.prname, "<", 3);
          this.validation.prcontent=Validation.checkvalidate(this.product.prcontent,"<",3);
          this.validation.pprice=Validation.checkvalidate(this.product.pprice,"=","",0)
          this.validation.prcode=Validation.checkvalidate(this.product.prcode,"<",1)
//resim kontrol
          this.validation.paytype=Validation.checkvalidate(this.selected,"=","",0)
          this.validation.prtpe=Validation.checkvalidate(this.selectedtype,"=","",0)
          this.validation.category=Validation.checkvalidate(this.selectedcategory,"=","",0)
            if(this.value.length<1){
              this.activestyle=this.errorstyle
              this.isshow=true
            }else{
              this.isshow=false
                this.activestyle=this.successtyle
            }

            debugger
          this.productDesct.forEach((x)=>{
            debugger
            x.headclass=Validation.checkvalidate(x.baslik,"<",3)
            x.detailclass=Validation.checkvalidate(x.detay,"<",3)
          })

              //resime bakılacak karar verilmedi

          if(this.validation.prname=="is-valid" && this.validation.prcontent=="is-valid" && this.validation.pprice=="is-valid"
          && this.validation.prcode =="is-valid" && this.validation.paytype=="is-valid" && this.validation.prtpe=="is-valid" &&
            this.validation.category=="is-valid" && this.activestyle==this.successtyle
          ){
            this.addproduct();
          }
        },
        addproduct(){
          let sectors=[]
            this.value.forEach((x)=>{
              sectors.push({
                sektorId:x.sektorId
              })
          })
          let properties=[]
          this.addetproperties.forEach((x)=>{
            properties.push({
              baslik:x.baslik,
              detay: "'"+   x.detay+ "'"
            })
          })
          debugger
          debugger

          ProductService.newproduct(
            {
              data:{
                kullaniciId: this.$store.getters.getuser.kullaniciId,
                userToken: this.$store.getters.getuser.userToken,
                iskonto: this.product.discount,
                parabirimi:this.product.ppricetype,
                fiyat:this.product.pprice,
                icerik:this.product.prcontent,
                baslik:this.product.prname,
                resim:"test.jpg",
                urunKodu:this.product.prcode,
                kategori:this.selectedcategory,
                tur:this.selectedtype,
                sektorList:sectors,
                urunAciklama:properties,
                odemeDonemi:this.selected,
                methodName: 'urunTanimlama'
              }
            }
          ).then((res)=>{
            if(res.status===200){

              Component.showalert(res.msg,"success","Tamam")
        debugger
            }else{
              Component.showalert(res.msg,"error","Tamam")
            }
          })
        },
        addnewrow(type){
        },
        sectorchange(item){
          this.sectorlist.push(item)
        },
        removesector(item){
        },
          getsector(){
            SectorService.sectorlist({
              data:{
                kullaniciId: this.$store.getters.getuser.kullaniciId,
                userToken: this.$store.getters.getuser.userToken,
                methodName: "sektorList"
              }
            }).then((res)=>{
              if(res && res.data && res.data.length){
                console.log(res.data)
                this.optionss=res.data
              }else{
                this.
                Component.showalert(res.msg,"error","Tamam")
              }
            })
          },
        onChange(e) {
          const file = e.target.files[0];
          if(file.type!=undefined && file.type.includes("image")){

            Component.readFileToBase64(file).then((res)=>{
              console.log(res)
              this.imglist.push(res);
            })
          }
        },
      getpayterm(){
        PayTermService.getpayterm({
          data:{
            kullaniciId: this.$store.getters.getuser.kullaniciId,
            userToken: this.$store.getters.getuser.userToken,
            methodName: "donemList"
          }
        }).then((res)=>{
          if(res && res.data && res.data.length){
            this.coptions=res.data
            this.coptions.unshift({ odemeDonemId: '0', detay: 'Ödeme Dönemi Seçiniz' })
            console.log(res.data)
          }else{

            Component.showalert(res.msg,"error","Tamam")
          }
        })
      }
      },

  components:{
    Multiselect,
    VueEditor
  },
      created(){
        this.$store.commit('setmainpage', 'Ürünler')
        this.$store.commit('setsubpage', 'Yeni Ürün Oluştur')
        this.$store.commit('setbreadcrumbtitle', 'Yeni Ürün Oluştur')
      this.getpayterm();
      this.getsector();
      },
      mounted() {
        $(document).ready(function() {

          $('.textarea_editor').wysihtml5();


        });
        $('.dropify').dropify({
          messages: {
            default: 'Dosyalarınız Sürükleyin yada Dosya Ekleyin',
            replace: 'Başka Dosya Seç',
            error: 'Bir Hata Gerçekleşti'
          }
        });
      }
    }
</script>

<style scoped>




  ::placeholder {
    opacity: 0.3; /* Firefox */
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    opacity: 0.3;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    opacity: 0.3;
  }
</style>
