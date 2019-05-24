<template>
    <el-row :gutter="12" type="flex" justify="center">
      <el-col class="container">
        <logo/>
        <h1 class="title">20190523_first_nuxt_test</h1>
        <h2 class="subtitle">我的第一個nuxt專案</h2>
        <div class="links">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        </div>
      </el-col>
    </el-row>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  layout: 'test_layout',
  components: {
    Logo
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* display: block; */
  font-weight: 300;
  font-size: 80px;
  color: #35495e;
  letter-spacing: 1px;
  word-break: break-all;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
