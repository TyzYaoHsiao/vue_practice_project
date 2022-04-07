<template>
  <div>
      <h2>學生姓名: {{ name }}</h2>
      <h2>學生性別: {{ sex }}</h2>
      <button @click="sendStudentName">發送</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: "Student",
    data(){
        return{
            name: "張三",
            sex: "男"
        }
    },


    methods: {
        sendStudentName(){
            pubsub.publish('hello', this.name);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: rgb(245, 157, 240);
    }
</style>