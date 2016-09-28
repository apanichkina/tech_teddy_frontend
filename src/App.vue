<template>
  <div>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" v-link="{ path: '/home' }">
          <img class="emblem" alt="Brand" src="/static/img/baby.png"/>
        </a>
        <a class="navbar-brand" v-link="{ path: '/home' }">{{ productName }}</a>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li><a v-link="{ path: '/signup' }">Sign up</a></li>
        <li><a v-link="{ path: '/signin' }">Sign in</a></li>
      </ul>
    </div>
  </nav>

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
  body {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #eee;
  }
  h1 {
    font-family: 'Helvetica', 'Arial';
  }
  .emblem {
    max-height: 4rem;
    margin-top: -1rem;
  }
</style>
