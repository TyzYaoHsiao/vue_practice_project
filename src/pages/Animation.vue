<template>
 <div>
     <button @click="isShow = !isShow">顯示/隱藏</button>
     <transition name="hello" appear>
        <h1 v-show="isShow">你好啊!</h1>
     </transition>
 </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: true
        } 
    }
}
</script>

<style scoped>
    h1{
        background-color: orange;
    }

    .hello-enter-active {
        animation: Animate 1s linear;
    }

    .hello-leave-active {
        animation: Animate 1s linear reverse;
    }

    @keyframes Animate {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
</style>