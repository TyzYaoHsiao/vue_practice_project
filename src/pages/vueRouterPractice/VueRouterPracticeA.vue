<template>
  <h2>A PAGE</h2>
  <h2>嵌套路由</h2>
  <div class="aPage">
    <ol>
      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            path: '/vueRouterPractice/A/messageA',
            query: {
              id: m.id,
              title: m.title,
              textcolor: m.color
            },
          }"
        >
          {{ m.title }}
        </router-link>
      </li>
    </ol>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  el: "vueRouterPracticeA",
  data() {
    return {
      messageList: [
        {
          id: "001",
          title: "消息001",
          color: "red",
        },
        {
          id: "002",
          title: "消息002",
          color: "green",
        },
        {
          id: "003",
          title: "消息003",
          color: "blue",
        },
      ],
    };
  },
};
</script>

<style scoped>

.aPage {
  width: 500px;
}

ol {
  counter-reset: li;
  list-style: none;
  padding: 0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}

ol a {
  position: relative;
  display: block;
  padding: 0.4em 0.4em 0.4em 0.8em;
  margin: 0.5em 0 0.5em 2.5em;
  background: #d3d4da;
  color: #444;
  text-decoration: none;
  transition: all 0.3s ease-out;
}

ol a:hover {
  background: #dcdde1;
}
ol a:before {
  content: counter(li);
  counter-increment: li;
  position: absolute;
  left: -2.5em;
  top: 50%;
  margin-top: -1em;
  background: #f9dd94;
  height: 2em;
  width: 2em;
  line-height: 2em;
  text-align: center;
  font-weight: bold;
}

ol a:after {
  position: absolute;
  content: "";
  border: 0.5em solid transparent;
  left: -1em;
  top: 50%;
  margin-top: -0.5em;
  transition: all 0.3s ease-out;
}

ol a:hover:after {
  left: -0.5em;
  border-left-color: #f9dd94;
}
</style>