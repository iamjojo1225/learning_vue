<template>
  <b-container fluid>
    <Header />

    <LessonList />
  </b-container>
</template>

<script>
import LessonList from "./views/LessonList.vue";
import Header from "./views/header.vue";

export default {
  components: {
    LessonList,
    Header
  }
};
</script>

<style lang="sass"></style>
