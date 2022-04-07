<template>
  <h1>組件間資料傳遞 學生=>學校</h1>
  <School/>
  <Student/>
</template>

<script>
import Student from '../components/Student.vue';
import School from "../components/School.vue";

export default {
  components: {
    School, Student
  }
}
</script>

<style scoped>


</style>
