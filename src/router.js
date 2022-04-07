import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import Animation from "./pages/Animation";
import Animation2 from "./pages/Animation2";
import Pubsub from "./pages/Pubsub";
import AxiosPractice from "./pages/AxiosPractice"
import Slot from "./pages/Slot"
import VuexPractice from "./pages/VuexPractice"
import VueRouterPractice from "./pages/vueRouterPractice/VueRouterPractice"
import VueRouterPracticeA from "./pages/vueRouterPractice/VueRouterPracticeA"
import VueRouterPracticeB from "./pages/vueRouterPractice/VueRouterPracticeB"
import VueRouterPracticeC from "./pages/vueRouterPractice/VueRouterPracticeC"
import MessageA from "./pages/vueRouterPractice/MessageA"
import MessageB from "./pages/vueRouterPractice/MessageB"
import GuardA from "./pages/vueRouterPractice/GuardA"
import GuardB from "./pages/vueRouterPractice/GuardB"
import Vue3 from "./pages/Vue3"

const routes = [
  { path: "/", component: Home, meta: {
    title: "首頁"
  } },
  { path: "/animation", component: Animation },
  { path: "/animation2", component: Animation2 },
  { path: "/pubsub", component: Pubsub },
  { path: "/axiosPractice", component: AxiosPractice },
  { path: "/slot", component: Slot },
  { path: "/vuexPractice", component: VuexPractice },
  { path: "/vue3", component: Vue3 },
  {
    path: "/vueRouterPractice",
    component: VueRouterPractice,
    meta: {
      title: "VueRouter練習"
    },
    children: [
      {
        path: "A",
        component: VueRouterPracticeA,
        meta: {
          title: "A頁"
        },
        children: [
          {
            path: "messageA",
            component: MessageA,
            meta: {
              title: "訊息"
            }
          }
        ]
      },
      {
        name: "BPage",
        path: "B",
        component: VueRouterPracticeB,
        meta: {
          title: "B頁"
        },
        children: [
          {
            name: "messageB",
            path: "messageB",
            component: MessageB,
            meta: {
              title: "訊息"
            },
          }
        ]
      },
      {
        name: "CPage",
        path: "C",
        component: VueRouterPracticeC,
        meta: {
          title: "C頁"
        },
        children: [
          {
            name: "guardA",
            path: "guardA",
            component: GuardA,
            meta: {
              title: "訊息"
            },
          },
          {
            name: "guardB",
            path: "guardB",
            component: GuardB,
            meta: {
              title: "訊息"
            },
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/*      全局路由(前置)      */
router.beforeEach((to, from, next) => {
  if(localStorage.getItem('') === ''){
    // do Something
  }
  next()
})

/*      全局路由(後置)      */
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "Vue練習";
  }
})



export default router;