'use strict';
var Vue = require('vue');
var VueResource = require('vue-resource');
var VueRouter = require('vue-router');
var App = require('./App.vue');
var Home = require('./Home.vue');
var Signup = require('./Signup.vue');
var Signin = require('./Signin.vue');
var VueValidator = require('vue-validator');

Vue.use(VueValidator);

require("bootstrap-webpack");
var $ = require("jquery");

Vue.use(VueResource);
Vue.use(VueRouter);

var router = new VueRouter();

Vue.validator('email', function (val) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
});

Vue.validator('login', function (val) {
  return /^[a-z0-9_-]{3,16}$/.test(val)
});

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
