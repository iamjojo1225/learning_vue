<template>
  <div id="about ">
  	<div class="d-flex justify-content-center ">
  		<div class="col-md-8">
    		<h2 class="h1">AboutList</h2>
    		<div class="row" v-for="(aboutData,key) in aboutDatas" :key="key">
				<div class="col-md-6 setImg">
    				<img class="img-fluid" :src="aboutData.url">
				</div>
				<div class="col-md-6 setFont">
					<router-link :to="`/about/${aboutData.id}`">
	    				<h3>{{aboutData.name}}</h3>
	    			</router-link>
    				<p>{{aboutData.text}}</p>
    			</div>
    		</div>
  		</div>
  	</div>

  </div>
</template>

<script type="text/javascript">
export default {
  props: ["aboutDatas"]
};
</script>

<style lang="sass">
	.row
		margin-bottom: 10px
	.setImg
		max-width: 300px

	.setFont
		h3
			color: #6cb983

</style>
