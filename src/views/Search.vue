<template>
<div class="search">
<div class="container mt-4">
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">搜尋結果</li>
  </ol>
</nav>
      <h4 class="gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
    搜尋結果 </h4>
    <p>共99筆</p>
    <div>
      <h4 class="gray-800">站點名稱</h4>
      <div class="gray-700">站點位置: 123</div>
      <div class="gray-700">站點地址: 123</div>
      <div class="green-800">可租借車數: 3</div>
      <a @click="routeInfo()" class="yellow-600">詳細內容 >></a>
    </div>
    <hr>
</div>
</div>
</template>
<script>
export default {
  methods: {
    routeInfo () {
      this.$router.push('/routeInfo')
    }
  }
}
</script>
