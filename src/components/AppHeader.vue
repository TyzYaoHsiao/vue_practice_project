<template>
  <nav
    class="header"
  >
  <ul>
    <router-link
      v-for="item in list"
      :key="item.to"
      class="mx-2 hidden md:inline-block"
      :to="item.to"
      ><li>{{ item.title }}</li></router-link
    >
  </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "首頁", to: "/" },
        { title: "動畫", to: "/animation" },
        { title: "動畫2", to: "/animation2" },
        { title: "消息與訂閱", to: "/pubsub" },
        { title: "Axios串API", to: "/axiosPractice" },
        { title: "slot插槽", to: "/slot" },
        { title: "Vuex", to: "/vuexPractice" },
        { title: "Vue Router", to: "/vueRouterPractice" }
      ],
    };
  },
}
</script>

<style></style>