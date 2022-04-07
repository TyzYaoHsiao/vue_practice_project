<template>
  <h4>A內頁</h4>
</template>

<script>
export default {
    el: 'GuardA',
    beforeRouteEnter(to, from, next){
        if(localStorage.getItem('guard') === 'A'){
            next()
        } else {
            alert('Guard錯誤');
        }
    },
    beforeRouteLeave(to, from, next){
        next()
    }
}
</script>

<style scoped>

</style>