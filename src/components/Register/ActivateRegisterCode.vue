<template>
  <div>

  </div>
</template>

<script>
  import Component from '../../Plugins/Component'
  import RegisterService from '../../ApiService/RegisterService'
export default {
  created() {
    const params=Component.b64DecodeUnicode(this.$route.params.code)
    const date=params.split(",")[1]
    const id=params.split(",")[2]
    const data={
    data:{
      kullaniciId:id,
      dogrulamaKodu: this.$route.params.code,
      methodName:"mailDogrulama"
    }
    }
    RegisterService.activationcode(data).then((res)=>{

      if(res.status===200) {
        this.$router.push('/GirisYap')
      }
     else {
          Component.showalert('Onay Kodu Geçersiz', 'error', 'Tamam')
        }
    })
  }
}
</script>

<style>

</style>
