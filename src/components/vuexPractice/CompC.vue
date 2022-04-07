<template>
  <div class="comp">
    <h2>CompC : {{ $store.state.sum }}</h2>
    <div class="center">
      <button class="button-3" @click="add">+3</button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    add(){
      this.$store.dispatch('add', 3);
    }
  }
}
</script>

<style scoped>
  .comp {
      background-color: rgb(240, 239, 197);
      width: 300px;
      height: 150px;
  }

  .center{
      text-align:center;
  }
</style>