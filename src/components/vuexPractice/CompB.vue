<template>
  <div class="comp">
    <h2>CompB : {{ $store.state.sum }}</h2>
    <div class="center">
      <button class="button-3" @click="add">+2</button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    add(){
      this.$store.dispatch('add', 2);
    }
  }
}
</script>

<style scoped>
  .comp {
      background-color: rgb(147, 209, 238);
      width: 300px;
      height: 150px;
  }

  .center{
      text-align:center;
  }

</style>