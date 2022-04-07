<template>
  <div class="comp">
    <h2>CompA : {{ $store.state.sum }}</h2>
    <div class="center">
      <button class="button-3" @click="add">+1</button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    add(){
      this.$store.dispatch('add', 1);
    }
  }
}
</script>

<style scoped>
  .comp {
      background-color: rgb(241, 169, 255);
      width: 300px;
      height: 150px;
  }

  .center{
      text-align:center;
  }
</style>