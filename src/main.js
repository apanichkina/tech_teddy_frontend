var Vue = require('vue');
var VueResource = require('vue-resource');
var VueRouter = require('vue-router');
var App = require('./App.vue');
var Home = require('./Home.vue');
var Signup = require('./Signup.vue');
var Signin = require('./Signin.vue');

Vue.use(VueResource);
Vue.use(VueRouter);

var router = new VueRouter();

router.map({
  '/home': {
    component: Home
  },
  '/signup': {
    component: Signup
  },
  '/signin': {
    component: Signin
  }
});

router.redirect({
  '*': '/home'
});

router.start(App, '#app');

//new Vue({
//  el: 'body',
//  components: {
//    App: App,
//    Signup: Signup
//  },
//  data: {
//    message: "hello",
//    url_posts: 'https://jsonplaceholder.typicode.com/posts'
//  },
//  methods: {
//    onClick: function() {
//      console.log("что-то важное")
//    },
//    getAllPosts: function() {
//      this.$http.get(this.url_posts).then(
//          function(response) {
//            //все ок
//            console.log(response)
//          },
//          function(responce) {
//            //ошибка
//            console.log(responce);
//          }
//      )
//    }
//  },
//  created: function() {
//    this.getAllPosts();
//  }
//});
