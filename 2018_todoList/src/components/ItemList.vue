<template>
    <table >
        <thead >
        	<tr>
                <th>內容</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody v-for="(item,index) in msg">
            <tr>
                <td>{{item}}</td>
                <td><button @click="removeItem(index)">刪除</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script type="text/javascript">

	export default {
		props: ['msg'],
		methods:{
			removeItem(index){
				console.log("List的LOG",index)
				this.$emit('removeItem',index)
			}
		}

	};

</script>

<style type="text/css">
	table {
		border: 1px solid black;
	}
	td{
		min-width: 80px;
		border: 1px solid black;
		text-align: center;
		padding: 5px 10px ;
	}
</style>