<template>
  <div>
      <h2>學校名稱: {{ name }}</h2>
      <h2>學校地址: {{ address }}</h2>
      <h2>接收到的學生姓名: {{ studentName }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'School',
    data(){
        return {
            name: '昕力大學',
            address: '內湖',
            studentName: ''
        }
    },
    mounted() {
        pubsub.subscribe('hello', (msgName, studentName)=> {
            this.studentName = studentName;
        });
    },
    methods:{

    }
}
</script>

<style scoped>
    div {
        background-color: rgb(110, 191, 238);
    }
</style>