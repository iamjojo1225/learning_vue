<template>
  <div class="home d-flex align-items-center justify-content-center flex-column">
  	<div class="col-md-6 ">

	  	<h2>SPA Home</h2>
	  	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br><br>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br><br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  	</div>
  	<div class="col-md-6 d-flex justify-content-center">
    	<aboutMap />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import aboutMap from "@/components/aboutMap.vue";

export default {
  components: {
    aboutMap
  }
};
</script>

<style lang="sass">
.home
	// display: flex
	// justify-content: conter
	.col-md-6
		margin: 20px
		h2,p
    		font-family: Avenir



</style>
