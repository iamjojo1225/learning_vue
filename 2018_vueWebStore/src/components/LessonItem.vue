<template lang="pug">
.col-md-3.col-5
  .cardBox
    .imgBox.img-fluid
      .lessonImg(:style="{backgroundImage: 'url(' + lesson.img + ')'}")                      
    a(:href="lesson.url")
      span {{lesson.title}}    
    .d-flex.justify-content-between.contextText
      span 價格: {{lesson.price}} $
      span.teacherStyle {{lesson.teacher}}
    .addBuy.d-flex.justify-content-center(@click="addToCart(lesson)" :class="btnClass")
      p.h5 {{buyText}}
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: ["lesson"],
  data() {
    return {
      //購物車文字
      buyText: ""
    };
  },
  methods: {
    ...mapMutations(["addToCart"])
  },
  computed: {
    ...mapGetters(["isLessonInCart"]),
    inCart() {
      return this.isLessonInCart(this.lesson);
    },
    btnClass() {
      // console.log("購物車文字: ",this.$data.buyText);
      if (this.inCart) {
        this.$data.buyText = "已加入購物車";
      } else {
        this.$data.buyText = "加入購物車";
      }
      return {
        addbuy: true,
        bought: this.inCart
      };
    }
  }
};
</script>

<style lang="sass" scoped>
//文字顏色 黑

//文字顏色 藍
$colorBlue : #0080c0

*
  font-family: "微軟正黑體"
  // border: 1px solid rgba(#000,0.3)
.cardBox
  margin-bottom: 20px
  background-color: #fff
  box-shadow: 2px 2px 10px 2px rgba(#000,0.5)
  border-radius: 20px
  .imgBox
    max-width: 300px
    height: 200px
    .lessonImg
      // border-radius: 20px
      border-top-left-radius: 20px
      border-top-right-radius: 20px
      width: 100%
      height: 100%
      background-size: cover
      background-position: 50% 50%
  a
    color: black
    transition: 0.5s
    span
      padding: 5px
    &:hover
      // color: white
      color: rgba($colorBlue,1)
      // background-color: rgba($colorBlue,0.3)

  .contextText
    padding: 5px
    &>span
      color: rgba($colorBlue,0.8)
    .teacherStyle
      font-size: 15px
      font-weight: 500
      // color: rgba(#000000,0.6)
  .addBuy
    transition: 0.5s
    background-color: rgba(#0080ff,.3)
    border-bottom-left-radius: 20px
    border-bottom-right-radius: 20px
    cursor: pointer
    &:hover
      background-color: rgba(#0080ff,.6)
    p
      padding: 4px
      margin: 0px
      user-select: none
  .addBuy.bought
    background-color: #c0c0c0
</style>
