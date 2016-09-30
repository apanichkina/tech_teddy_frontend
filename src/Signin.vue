<template>
  <div>

    <div class="container">


      <form class="form">
        <h2 class="form-heading">Пожалуйста, авторизуйтесь</h2>

        <validator name="validation1">

          <div class="username">
            <label for="inputEmail" class="sr-only">Логин</label>
            <input
                    type="text"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Почта"
                    v-model="form.name"
                    v-validate:username="['login','required']">

              <div v-if="$validation1.username.required" class="alert alert-danger" role="alert">
                  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                  <span class="sr-only">Ошибка:</span>
                  Логин обязательное поле
              </div>

              <div v-if="$validation1.username.login" class="alert alert-danger" role="alert">
                  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                  <span class="sr-only">Ошибка:</span>
                  Неверный формат логина
              </div>
          </div>

          <div class="password">
            <label for="inputPassword" class="sr-only">Пароль</label>
            <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Пароль"
                    v-model="form.password"
                    v-validate:password="{ required: true ,
                     minlength: 8}">

              <div v-if="$validation1.password.required" class="alert alert-danger" role="alert">
                  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                  <span class="sr-only">Ошибка:</span>
                  Пароль обязанельное поле
              </div>
              <div v-if="$validation1.password.minlength" class="alert alert-danger" role="alert">
                  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                  <span class="sr-only">Ошибка:</span>
                  Пароль должен содержать минимум 8 символов
              </div>

          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit" :disabled="!$validation1.valid"  @click.prevent="submitLogin()">Sign in</button>
        </validator>
      </form>

    </div>

  </div>
</template>

<script>
module.exports= {
  data: function() {
    return {
        email: '',
      name: '',
      url_login: 'http://localhost:8081/api/user/login',
      form: {
        "name": '',
        "password": ''
      },
        username_focuseout: true
    }
  },
    validator: {
        validates: {
            emailRule: function (val) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
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
    },
      isFocusOut: function(id){
          $('"'+id+'"').focusout(function() {
                      this.username_focuseout = true;
                  })
      }

  }
}
</script>

<style>


</style>
