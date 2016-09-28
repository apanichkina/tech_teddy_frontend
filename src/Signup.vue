<template>
  <div>
    <div class="container">

      <form class="form">
        <h2 class="form-heading">Please sign up</h2>

        <label for="inputLogin" class="sr-only">Login</label>
        <input type="text" id="inputLogin" class="form-control" placeholder="Логин" required autofocus>

        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Почта" required autofocus>

        <label for="inputPassword1" class="sr-only">Password</label>
        <input type="password" id="inputPassword1" class="form-control" placeholder="Пароль" required>

        <label for="inputPassword2" class="sr-only">Confurm password</label>
        <input type="password" id="inputPassword2" class="form-control" placeholder="Пароль еще раз" required>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
      </form>

    </div>

    <form>
      <h1>{{ name }}</h1>
      <p><b>Ваше имя:</b><br>
        <input type="text" v-model="name" size="40">
        <button @click.prevent="onClick()">Sign up</button>
      </p>
    </form>
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
  body {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #eee;
  }

  .form {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form .form-heading,
  .form .checkbox {
    margin-bottom: 10px;
  }
  .form .checkbox {
    font-weight: normal;
  }
  .form .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }
  .form .form-control:focus {
    z-index: 2;
  }
  .form input[type="email"], .form input[type="text"] {
    margin-bottom: 10px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

</style>
