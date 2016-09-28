<template>
  <div>
    <a v-link="{ path: '/home' }">
      <p>{{ productName }}</p>
    </a>
    <p>
      <a v-link="{ path: '/signup' }">Sign up</a>
      <a v-link="{ path: '/signin' }">Sign in</a>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
module.exports= {
  data: function() {
    return {
      productName: 'Умный мишка'
    }
  }

}
</script>

<style>
  @charset "UTF-8";
  /*@font-face {*/
    /*font-family: 'Lato';*/
    /*font-style: normal;*/
    /*font-weight: 100;*/
    /*src: url(../static/fonts/lato-hairline.ttf);*/
  /*}*/
  h1 {
    font-family: 'Helvetica', 'Arial';
  }
</style>
