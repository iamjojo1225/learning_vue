<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link :to="{name: 'products'}">Products</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
</script>

<style lang="sass">
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

</style>
