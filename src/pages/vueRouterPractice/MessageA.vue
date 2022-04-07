<template>
  <h3>路由傳參數(query)</h3>
  <ul :style="{ color : $route.query.textcolor }">
    <li>訊息編號 {{ $route.query.id }}</li>
    <li>訊息標題 {{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>