<template>
<Header></Header>
<router-view></router-view>
<Footer></Footer>
</template>

<style lang="scss">
@import "bootstrap";
@import "./assets/all";

</style>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
