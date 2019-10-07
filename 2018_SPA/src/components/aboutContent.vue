<template>
	<div class="d-flex justify-content-center">
		<div class="col-md-6">

			<router-link to="/about">←Back</router-link>
				<div>
					<img class="img-fluid" :src="aboutDatas[$route.params.id-1].url">
				</div>
				<h1>{{aboutDatas[$route.params.id-1].name}}</h1>
				<p>{{aboutDatas[$route.params.id-1].text}}</p>
		</div>




	</div>
</template>




<script type="text/javascript">
export default {
  props: ["aboutDatas"]
};
</script>

<style lang="sass">
.col-md-6
	h1,p
		padding: 10px


</style>
