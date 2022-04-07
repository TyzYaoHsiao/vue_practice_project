<template>
    <div class="center">
        <!-- <h2>主頁區塊 總和 : {{ $store.state.sum }}</h2>
        <h2>Getters 總和*10 : {{ $store.getters.bigSum }}</h2> -->
        <h2>主頁區塊 總和 : {{ sum }}</h2>
        <h2>Getters 總和*10 : {{ bigSum }}</h2>

        <div class="container">
            <CompA/>
            <CompB/>
            <CompC/>
        </div>
        <br/>
        <button class="button-3" @click="reset">歸零</button>
    </div>
</template>

<script>
import CompA from '../components/vuexPractice/CompA.vue'
import CompB from '../components/vuexPractice/CompB.vue'
import CompC from '../components/vuexPractice/CompC.vue'
import { mapState, mapGetters, mapActions} from 'vuex'

export default {
    components:{
        CompA, CompB, CompC
    }, 
    computed: {
        ...mapState({sum:'sum'}),  
        ...mapGetters({bigSum:'bigSum'})  
    },
    methods: {
        ...mapActions({reset:'reset'})
    }
}
</script>

<style scoped>

    .center{
        text-align:center;
    }

    .container {
        display: flex;
        justify-content: space-around;
    }

    .button-3 {
        background-color: #e98080;
    }

    .button-3:hover {
        background-color: #f15f55;
    }

    .button-3:active {
        background-color: #e98080;
    }
</style>