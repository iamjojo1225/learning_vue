<template>
  <div class="login">
    <h1>暫停功能</h1>
    <h1>請輸入暱稱</h1>
    <input type="text" v-model="user.name">
    <button @click="login">登入</button>
  </div>
</template>

<script>

var io = require('socket.io-client')

export default {
  data(){
    return{
      user:{
        name:'',
        message:''
      }
    }
  },
  methods: {
    login(){
      // let socket = io.connect('http://localhost:5050', this.user);
    }
  },
}
</script>
