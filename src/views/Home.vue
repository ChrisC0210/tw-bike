<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <img src="../assets/img/img-banner-1.png" alt="img-banner">
    <section class="container mt-4">
    <h3 style="font-size:26px;">推薦路線</h3>
    <div class="row">
      <a href="#" class="col-sm-12 col-lg-6 mb-4 card-style">
        <img src="../assets/img/img-card-1.png" alt="img-card-1">
        <p class="mt-2">路線名稱</p>
      </a>
      <a href="#" class="col-sm-12 col-lg-6 mb-4 card-style">
        <img src="../assets/img/img-card-2.png" alt="img-card-2">
        <p class="mt-2">路線名稱</p>
      </a>
      <a href="#" class="col-sm-12 col-lg-6 mb-4 card-style">
        <img src="../assets/img/img-card-3.png" alt="img-card-3">
        <p class="mt-2">路線名稱</p>
      </a>
      <a href="#" class="col-sm-12 col-lg-6 mb-4 card-style">
        <img src="../assets/img/img-card-4.png" alt="img-card-4">
        <p class="mt-2">路線名稱</p>
      </a>
    </div>
    </section>
<router-view></router-view>
  </div>
</template>
<style>
a {
  text-decoration: none;
  color: #707070;
}
  .card-style img{
    border-radius: 10px;
  }
  .card-style p{
    font-size: 20px;
  }
  .card-style{
  min-height: 190px;
  /* max-width: 250px; */
  border-radius: 10px;
  border: solid 0px;
}
.card-style img{
  width: 100%;
  /* height: 190px; */
  object-fit: cover;
}
.card-style img:hover{
  transform: scale(1.02);
}
.card-2{
  min-height: 350px;
  /* max-width: 350px; */
  border-radius: 10px;
  border: solid 0px;
}
.card-2 img{
  width: 100%;
  /* height: 190px; */
  object-fit: cover;
}
.card-2 img:hover{
  transform: scale(1.02);
}
</style>
<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
</script>
