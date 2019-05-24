<template lang="pug">
    el-container(direction="vertical")
      appHeader
      el-container(direction="vertical")
        //- 側邊攔
        //- el-aside(width="200px") Aside
        //- el-container(direction="vertical")
        appMain
        appFooter
</template>


<script>
import appHeader from "@/layouts/components/appHeader.vue";
import appMain from "@/layouts/components/appMain.vue";
import appFooter from "@/layouts/components/appFooter.vue";

export default {
  // <template>
  //   <el-container direction="vertical">
  //     <appHeader/>
  //     <el-container>
  //       <el-aside width="200px">Aside</el-aside>
  //       <el-container direction="vertical">
  //         <appMain/>
  //         <appFooter/>
  //       </el-container>
  //     </el-container>
  //   </el-container>
  // </template>
  components: {
    appHeader,
    appMain,
    appFooter
  }
};
</script>

<style lang="sass" scoped>
* 
  border: 1px solid #000
.el-aside
  font-size: 26px
  background-color: red
</style>

