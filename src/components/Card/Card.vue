<template>
  <div class="col-lg-3 col-md-6">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-row">
          <div class="round align-self-center" :class="color"><i :class="icon" ></i></div>
          <div class="m-l-10 align-self-center">
            <h3 class="m-b-0">{{msg}}</h3>
            <h5 class="text-muted m-b-0">{{submsg}}</h5></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Card",
      props:['icon','msg','submsg','color']
    }
</script>

<style scoped>

</style>
