<template>
  <h2>C PAGE</h2>
  <h2>組件內路由守衛</h2>
  <b>Guard 設定 : </b>
  <button class="button-3" @click="setGuard('A')">A</button>&nbsp;
  <button class="button-3" @click="setGuard('B')">B</button>&nbsp;
  <button class="button-3" @click="clearGuard()">清除</button>
  <br>
  <b>Guard 值為 : {{ guard }}</b>

  <div class="bPage">
    <ol class="list-numbered">
      <li><router-link to="/vueRouterPractice/C/guardA">A內頁</router-link></li>
      <li><router-link to="/vueRouterPractice/C/guardB">B內頁</router-link></li>
    </ol>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  el: "vueRouterPracticeC",
  data(){
    return {
      guard : ""
    }
  },
  methods: {
    setGuard(s) {
      localStorage.setItem("guard", s);
      this.guard = localStorage.getItem("guard");
    },
    clearGuard() {
      localStorage.removeItem("guard");
      this.guard = "";
    },
  },
};
</script>

<style scoped>
.button-3 {
  background-color: #e98080;
}

.button-3:hover {
  background-color: #f15f55;
}

.button-3:active {
  background-color: #e98080;
}
</style>