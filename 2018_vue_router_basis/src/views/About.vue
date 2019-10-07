<template>
	<div>
    	<h1>About Page</h1>
    	<router-link :to="{name: 'us'}">Us(使用具名路由)</router-link>
    <!-- <router-link to="/about/us">Us(未使用具名路由)</router-link> -->
    	<br>
    	<router-link :to="{name: 'you'}" >You</router-link>
    	<br>
    	<router-link :to="{name: 'both'}">Both</router-link>
    	<router-view/>
    	<router-view name='x'/>
    	<router-view name='y'/>
	</div>
</template>

<script type="text/javascript">
</script>
