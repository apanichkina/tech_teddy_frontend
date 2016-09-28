<template>
  <div>
    <div class="container marketing">
      <div class="row" >
        <div class="col-lg-4" v-for="bear in bears">
          <img class="img-circle" :src="bear.src" alt="Generic placeholder image" width="140" height="140">
          <h2>{{bear.name}}</h2>
          <p>{{bear.description}}</p>
          <p><a class="btn btn-default" role="button">Подробнее &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
    </div>
  </div>
</template>

<script>
module.exports= {
  data: function() {
    return {
      posts: [],
      url_posts: 'https://jsonplaceholder.typicode.com/posts',
      bears: [
        {
          name: 'Гризли',
          src: '/static/img/bear1.jpg',
          description:"Мягкий плюшевый медведь — неизменный спутник малышей" +
        " всех поколений. Сравниться с ним по популярности может, разве только красивая мягкая игрушка со сказками... " +
        "Мишка шоколадный, например. Тот самый, песенкой про которого убаюкивают своих малышей все русскоговорящие мамы. " +
        "Интерактивная игрушка относится к разряду говорящих игрушек, объем памяти которых вмещает целых 4 интересных " +
        "сказки! "
        },
        {
          name: 'Белый',
          src: '/static/img/bear2.png',
          description:"Мишка умеет «рассказывать» сказки про репку, курочку Рябу, храброго барана и теремок. Все сказки " +
        "записаны на диск, а читают их профессиональные дикторы, четко, с выражением, хорошо поставленными голосами. " +
        "Ребенку обязательно понравится! Чтобы активировать мягкую игрушку достаточно воспользоваться специальным " +
        "функционалом — кнопками, которые вмонтированы в ее тело и лапки. "
        },
        {
          name: 'Панда',
          src: '/static/img/bear3.jpg',
          description:"Кроме обычного чтения предусмотрена остановка " +
        "и повторное воспроизведение рассказа. Помогает развитию внимания, восприятия."
        }
      ]

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
  /* Center align the text within the three columns below the carousel */
  .marketing {
    margin-top: 30px;
  }
  .marketing .col-lg-4 {
    margin-bottom: 20px;
    text-align: center;
  }
  .marketing h2 {
    font-weight: normal;
  }
  .marketing .col-lg-4 p {
    margin-right: 10px;
    margin-left: 10px;
  }

</style>
