<template>
<nav class="header navbar-light bg-light">
  <div class="row container d-flex">
    <div class="col-lg-2 col-sm-12">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.svg" alt="">
    </a>
    </div>
    <form class="col-lg-10 col-sm-12 d-flex mt-2 mb-2" style="height: 36px;font-size: 16px;">
      <div class="col-md-2 me-2">
        <select class="form-select" aria-label="Default select example">
          <option selected>選擇縣市</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          </select>
      </div>
      <div class="col-md-4">
      <input class="form-control" type="search" placeholder="輸入路線名稱" aria-label="Search">
      </div>
      <button @click="doSearch()" class="btn" type="submit">搜尋</button>
    </form>
  </div>
</nav>
</template>
<style>
  .header{
    min-height: 60px;
  }
</style>
<script>
export default {
  methods: {
    doSearch () {
      this.$router.push('/search')
    }
  }
}
</script>
