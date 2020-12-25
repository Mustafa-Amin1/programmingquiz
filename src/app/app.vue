<template>
  <div id="app">
    <!-- header -->
    <app-header></app-header>

    <!-- router view -->
    <router-view :questionsArr="questionsArr" />



  </div>
</template>

<script>
import AppHeader from "../app/shared/components/app-header/app-header.vue";

export default {
  name: "app",
  data() {
    return {
      questionsArr:[],
    }
  },
  components: {
    "app-header": AppHeader,
  },
};
</script>
<style lang="scss">

</style>