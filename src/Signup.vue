<template>
  <div>
    <div class="container">

      <form class="form">
        <h2 class="form-heading">Please sign up</h2>

        <label for="inputLogin" class="sr-only">Login</label>
        <input type="text" id="inputLogin" class="form-control" placeholder="Логин" v-model="form.name" required autofocus>

        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Почта" v-model="form.email" required autofocus>

        <label for="inputPassword1" class="sr-only">Password</label>
        <input type="password" id="inputPassword1" class="form-control" placeholder="Пароль" v-model="form.password1" required>

        <label for="inputPassword2" class="sr-only">Confurm password</label>
        <input type="password" id="inputPassword2" class="form-control" placeholder="Пароль еще раз" v-model="form.password2" required>

        <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="submitSignup()">Sign up</button>
      </form>

    </div>

  </div>
</template>

<script>
module.exports= {
  data: function() {
    return {
      name: '',
      url_login: 'http://localhost:8081/api/user/register',
      form: {
        "name": '',
        "email": '',
        "password1": '',
        "password2": ''
      }
    }
  },
  methods: {
    submitSignup: function() {

      let data = {
        "name": this.form.name,
        "email": this.form.email,
        "password1": this.form.password1,
        "password2": this.form.password1
      };
      console.log(data)
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
