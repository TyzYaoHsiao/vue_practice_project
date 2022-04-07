<template>
  <div>
    <h2>編程式路由</h2>
    <button class="button-3" @click="goToPage('A')">A頁</button>&nbsp;
    <button class="button-3" @click="goToPage('B')">B頁</button>&nbsp;
    <button class="button-3" @click="goToCPage()">C頁</button>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  el: "VueRouterPractice",
  methods: {
    goToPage(page) {
      this.$router.push("/vueRouterPractice/" + page);
    },
    goToCPage(){
      this.$router.push({name: 'CPage'});
    }
  },
};
</script>

<style scoped>
</style>