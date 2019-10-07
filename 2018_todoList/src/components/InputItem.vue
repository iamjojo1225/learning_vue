<template>
	<form @submit.prevent="submit">
		<input v-model = "text">
		<button type="submit">送出</button>
	</form>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				text:'',
			};
		},
		methods:{
			submit(){
				this.$emit('submit',this.text);
				this.text='';
			}
		}
	};

</script>




