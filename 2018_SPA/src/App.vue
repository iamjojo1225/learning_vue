<template>
<div id="app" class="container-fluid">
    <div id="nav" class="d-flex justify-content-center">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/Products">Products</router-link>
    </div>
    <div class="banner">

    </div>


    <div class="content">

        <router-view />
    </div>

    <myFooter />
</div>
</template>

<script type="text/javascript">
import myFooter from "@/components/myFooter.vue";

export default {
  name: "app",
  components: {
    myFooter
  }
};
</script>

<style lang="sass">
*
  // border: 1px solid black
html,body
  margin: 0px
h1,h2,h3,h4,h5
    font-weight: bold
#app
    font-family: 微軟正黑體
    color: #2c3e50
    padding: 0px
    .content
        min-height: 40vh
    .banner
        background-image: url(http://www.hotelroyal.com.tw/upload/cms/201810/2018100914571401000000.png)
        width: 100%
        height: 300px
        background-size: cover
        background-position: 50% 52%


#nav
  padding: 30px
  text-align: center
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
  > *
    padding: 0px 10px




</style>
