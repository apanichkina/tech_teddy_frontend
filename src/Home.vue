<template>
  <div id="post">
    <ul>
      <li v-for="item in posts">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
module.exports= {
  data: function() {
    return {
      posts: [],
      url_posts: 'https://jsonplaceholder.typicode.com/posts'
    }
  },
  methods: {
    getAllPosts: function () {
      this.$http.get(this.url_posts).then(
              function (response) {
                this.posts = response.data;
              },
              function (response) {
                //ошибка
                console.log(response);
              }
      )
    }
  },
  created: function() {
    this.getAllPosts();
  }
}
</script>

<style>

</style>
