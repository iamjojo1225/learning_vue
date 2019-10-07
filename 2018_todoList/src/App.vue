<template>
    <div id="app">
        <InputItem @submit="addLsit"/>

        <ItemList
        :msg="msgGroup"
        @removeItem="removeItem"
        />

    </div>
</template>
<script>
import ItemList from './components/ItemList.vue';
import InputItem from './components/InputItem.vue'

export default {
    name: 'app',
    components: {
        ItemList,
        InputItem
    },
    data(){
        return {
            msgGroup:["Welcome to Your Vue.js App","森77"]
        }
    },
    methods:{
        addLsit(text){
            this.msgGroup.push(text);
        },
        removeItem(index){
            console.log("這裡!!!",index)
            this.msgGroup.splice(index, 1);

        },
    }
};
</script>
<style>
</style>