<template>
  <div class="category">
      <h3>{{title}}分類</h3>
      <slot name="center"></slot>
      <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
    name: 'Category',
    props:['title']
}
</script>

<style scoped>

    .category {
        background-color: rgb(241, 169, 255);
        width: 300px;
        height: 400px;
    }

    h3 {
        text-align: center;
        background-color: rgb(202, 247, 176);
    }

</style>