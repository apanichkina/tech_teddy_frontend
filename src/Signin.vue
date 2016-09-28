<template>
  <div>
    <form>
      <h1>{{ name }}</h1>
      <p><b>Ваше имя:</b><br>
        <input type="text" v-model="name" size="40">
        <button @click.prevent="onClick()">Sign in</button>
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
  font-family: Helvetica, sans-serif;
}
</style>
