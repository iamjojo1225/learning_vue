<template lang="pug">
  .container
    .row.d-flex.justify-content-between
      LessonItem(v-for='(lesson,key) in lessons', :key='key' , :lesson="lesson")
    
</template>

<script>
import { mapState, mapActions } from "vuex";
import LessonItem from "../components/LessonItem.vue";

export default {
  components: {
    LessonItem
  },
  computed: {
    ...mapState(["lessons"])
  },
  methods: {
    ...mapActions(["fetchLessons"])
  },
  mounted() {
    this.fetchLessons();
  },
  updated() {
    console.log("更新: ", this.lessons);
  }
};
</script>

<style lang="sass" scoped>
.container
  margin-top: 20px
</style>
