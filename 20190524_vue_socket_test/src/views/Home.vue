<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>歡迎使用 socket.io</h1>
    <div>
      <ul v-for="(msg,key) in allMessage" :key="key">
        <li>{{msg.name}}:　{{msg.message}}</li>
      </ul>
    </div>
    <div>
      <input type="text" placeholder="暱稱" v-model="user.name"> 
      <input type="text" placeholder="訊息..." v-model="user.message">
      <button @click="message">送出</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
var io = require('socket.io-client')
let socket
export default {
  name: "home",
  data(){
    return{
      user:{
        name:'路人Yo',
        message:''
      },
      allMessage:[]
      
    }
  },
  mounted() {
    socket = io.connect('http://localhost:5050');

    //取得歷史訊息
    socket.on('allMessage',(obj)=>{
      this.allMessage = obj
    })

    //監聽 新訊息
    socket.on('newMessage',(obj)=>{
      this.allMessage.push(obj)
    })
  },
  methods: {
    message(){
      socket.emit('message',this.user)
      this.user.message = ''
    }
  },
};
</script>



<style scoped>
* {
  font-family: '微軟正黑體';
}
</style>

