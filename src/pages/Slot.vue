<template>
    <div class='container'>
        <Category title="美食">
            <template #center >
                <img src="../assets/slot/food.jpg" alt="">
            </template>
            <template #footer>
                <a href="https://i1.kknews.cc/pW8U-izCAM3CqV3j-D2JuLvQd2uC2ELt0w/0.jpg">圖片來源</a>
            </template>
        </Category>
        <Category title="遊戲">
            <template #center >
                <ul>
                    <li v-for="(g, index) in games" :key="index">{{ g }}</li>
                </ul>
            </template>
        </Category>
        <Category title="電影">
            <template #center >
                <video controls src="../assets/slot/big_buck_bunny.mp4" ></video>
            </template>
            <template #footer>
                <a href="https://test-videos.co.uk/vids/bigbuckbunny/mp4/av1/360/Big_Buck_Bunny_360_10s_1MB.mp4">影片來源</a>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from '../components/Category.vue'
export default {
  components: { Category },

    data(){
        return {
            games:['Apex', 'LOL', 'Resident evil', 'Warframe']
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-around;
    }

    img {
        width: 100%;
    }

    video {
        width: 100%;
    }
</style>