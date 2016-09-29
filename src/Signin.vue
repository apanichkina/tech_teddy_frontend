<template>
  <div>

    <div class="container">

      <form class="form">
        <h2 class="form-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Почта"  v-model="form.name" required autofocus>

        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" v-model="form.password" required>

        <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="submitLogin()">Sign in</button>
      </form>

    </div>

  </div>
</template>

<script>
module.exports= {
  data: function() {
    return {
      name: '',
      url_login: 'http://localhost:8081/api/user/login',
      form: {
        "name": '',
        "password": ''
      }
    }
  },
  methods: {
    submitLogin: function() {
      let data = {
        "name": this.form.name,
        "password": this.form.password
      };
      this.$http.post(this.url_login, data, {
        emulateJSON: true
      }).then(
              function(response){
                console.log(response)
              },
              function(error) {
                console.log("Error:");
                console.log(error)
              });
    }

  }
}
</script>

<style>


</style>
