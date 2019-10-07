<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <b-button>bootstrap-vue 是可以正確使用的</b-button>
          <b-button href="#">I am a Link</b-button>
        </div>
      </div>       
    </div>
    <hr>
    <pugTest/>
  </div>
</template>

<script>
import pugTest from "@/components/pug_test.vue";
export default {
  components: {
    pugTest
  }
};
</script>
