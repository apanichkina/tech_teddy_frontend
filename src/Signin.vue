<template>
  <div>

    <div class="container">

      <form class="form">
        <h2 class="form-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Почта" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>

    </div>
    <!--<form>-->
      <!--<h1>{{ name }}</h1>-->
      <!--<p><b>Ваше имя:</b><br>-->
        <!--<input type="text" v-model="name" size="40">-->
        <!--<button @click.prevent="onClick()">Sign in</button>-->
      <!--</p>-->
    <!--</form>-->
  </div>
</template>

<script>
module.exports= {
  data: function() {
    return {
      name: ''
    }
  },
  methods: {
    onClick: function() {
      console.log(this.name)
    }
  }
}
</script>

<style>


</style>
