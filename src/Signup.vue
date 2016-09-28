<template>
  <div>
    <button @click="open()">{{ button }}</button>
    <form v-show="active">
      <h1>{{ name }}</h1>
      <p><b>Ваше имя:</b><br>
        <input type="text" v-model="name" size="40">
        <button @click.prevent="onClick()"></button>
      </p>
    </form>
  </div>
</template>

<script>
module.exports= {
  data: function() {
    return {
      button: "Показать",
      name: '',
      active: false
    }
  },
  methods: {
    onClick: function() {
      console.log(this.name)
    },
    open: function() {
      this.active = !this.active;
      if (this.active) {
        this.button = "Спрятать"
      } else {
        this.button = "Показать"
      }
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
