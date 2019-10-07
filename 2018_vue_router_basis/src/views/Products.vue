<template>
	<div>
	    <h1>Products Page</h1>
		<h1>{{$route.params.name}}</h1>
    	<router-link :to="{name: 'products', params:{id:55}}">shoes</router-link>
	    <h2 v-if="id">{{ id }}</h2>
	    <h3 v-else>可在網址列帶入"/xx"數字! <br> 會顯示在這邊唷!!</h3>
    </div>
</template>

<script type="text/javascript">
export default {
  computed: {
    id() {
      return this.$route.params.id;
      /* $route.params -> 指路徑:/XX */
      // return this.$route.query.id
      /* $route.params -> 指路徑:?id=XX
				若使用query，router.js，須將「 /:id 」移除 */
    }
  }
};
</script>
