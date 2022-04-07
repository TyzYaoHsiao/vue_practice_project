<template>
  <h1>Vue 3寫法 Setup、ref</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年齡：{{age}}</h2>
  <h2>職稱：{{job.type}}</h2>
  <h2>薪水：{{job.salary}}</h2>
  <button class= "button-3" @click="changeInfo">更新資訊</button>
  <button class= "button-3 resetBtn" @click="reset">還原</button>
</template>

<script>
import {ref, reactive, onBeforeMount, onMounted} from 'vue';

export default {
    name: 'Vue3',
    setup(){
        let name = ref("張三");
        let age = ref(18);
        let job = reactive({
            type: "前端工程師",
            salary: "35K"
        })
        
        function changeInfo(){
            name.value = "李四";
            age.value = 20;
            job.type = "後端工程師";
            job.salary = "38K";
        }

        function reset(){
            name.value = "張三";
            age.value = 18;
            job.type = "前端工程師";
            job.salary = "35K";
        }

        /* 生命週期 */
        onBeforeMount(()=>{
        })

        onMounted(()=>{
        })

        return {
            name, age, job, changeInfo, reset
        }
    }
}
</script>

<style scoped>
    h1 {
        color: rgb(85, 170, 213);
    }

    .resetBtn {
        background-color: #e98080;
    }

    .resetBtn:hover {
        background-color: #f15f55;
    }

    .resetBtn:active {
        background-color: #e98080;
    }
</style>