<template lang="pug">
.row  
  nav.col-md-12.navbar.navbar-light
    span.navbarTextStyle 購物車內: {{lessonNum}} 套課程，共${{price}}元 
    button.btn.btn-warning(@click="resetCart") 清空

</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["cart"]),

    lessonNum() {
      return this.cart.length;
    },
    price() {
      let price = 0;
      for (let key in this.cart) {
        price += this.cart[key].price;
      }
      return price;
    },
    inCart() {
      console.log(this.cart);
      // let id = 0;
      // for(let key in this.cart){
      //   price += this.cart[key].price
      // }
    }
  },
  methods: {
    ...mapMutations(["resetCart"])
  }
};
</script>

<style lang="sass" scoped>
.btnClass
  background-color: #c0c0c0
nav.col-md-12.navbar.navbar-light
  background-color: #39a982
  .navbarTextStyle
    font-family: "微軟正黑體"
    font-size: 24px
    color: white
    padding: 10px 5px
    text-shadow: 2px 2px 5px black
</style>
