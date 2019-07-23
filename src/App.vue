<template>
<div>
          <router-view name="login">
        </router-view>
    <div id="main-wrapper">
        <router-view name="appheader">
        </router-view>
       <router-view name="appside"></router-view>
           <div class="page-wrapper">
                   <div class="container-fluid">
             <router-view name="appbreadcrumb"></router-view>

        <router-view ></router-view>
            </div>
           <router-view name="appfooter"></router-view>
           </div>
    </div>
</div>
</template>

<script>
import bootstrap from '../public/assets/css/bootstrap.css'
import blue from '../public/assets/css/blue.css'
import style from '../public/assets/css/style.css'
import editor from '../public/assets/css/editor.css'
export default {

}
</script>
