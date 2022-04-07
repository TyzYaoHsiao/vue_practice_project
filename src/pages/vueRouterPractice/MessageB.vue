<template>
  <h3>路由傳參數(param)</h3>
  <ul :style="{ color : $route.params.textcolor }">
    <li>訊息編號 {{ $route.params.id }}</li>
    <li>訊息標題 {{ $route.params.title }}</li>
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