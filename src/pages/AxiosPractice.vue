<template>
  <h2>API URL : https://jsonplaceholder.typicode.com/users</h2>
  <table>
    <tr>
        <th>姓名</th>
        <th>email</th>
        <th>電話號碼</th>
        <th>地址-城市</th>
        <th>地址-街道</th>
    </tr>
    <tr v-for= "user in userList" :key="user">
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.address.city}}</td>
        <td>{{user.address.street}}</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            userList:[

            ]
        }
  },
  mounted() {
    this.getData()
  },
  
  methods:{
    getData(){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        this.userList = res.data;
      })
      .catch((err) => {
        alert("error");
        console.log(err);
      })
    }
  },
}
</script>

<style scoped>
    td {
        padding: .25rem 1rem;
    }

    th {
        background: #FF9999;
        color: #fff;
        padding: .5rem 1rem;
        letter-spacing: 3px
    }

    tr:nth-child(odd) {
        background: #fbe8e8;
    }
    #app{min-width: 900px;overflow: auto;}
</style>