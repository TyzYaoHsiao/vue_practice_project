<template>
  <h2>B PAGE</h2>
  <h2>嵌套路由</h2>
  <div class="bPage">
    <ol class="list-numbered">
      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            name: 'messageB',
            params: {
              id: m.id,
              title: m.title,
              textcolor: m.color,
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
  el: "vueRouterPractice",
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
.bPage {
  width: 500px;
}
.list-numbered {
  list-style: none;
  margin-left: 1em;
  counter-reset: line;
}

.list-numbered > li {
  position: relative;
  margin-bottom: 1.5em;
}

.list-numbered > li:before {
	position: absolute;
	left: -2.25em;
	display: inline-block;
  width: 22px;
	height: 22px;
	margin-right: 0.5em;
  background-color: #B53C2C;
	border-radius: 50%;
	color: #fff;
	text-align:center;
  line-height: 1.25em;
	counter-increment: line;
	content: counter(line);
}
</style>