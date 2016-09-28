'use strict';
var Vue = require('vue');
var VueResource = require('vue-resource');
var VueRouter = require('vue-router');
var App = require('./App.vue');
var Home = require('./Home.vue');
var Signup = require('./Signup.vue');
var Signin = require('./Signin.vue');


require("bootstrap-webpack");
var $ = require("jquery");

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
