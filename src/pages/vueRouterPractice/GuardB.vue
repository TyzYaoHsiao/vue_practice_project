<template>
  <h4>B內頁</h4>
</template>

<script>
export default {
    el: 'GuardB',
    beforeRouteEnter(to, from, next){
        if(localStorage.getItem('guard') === 'B'){
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