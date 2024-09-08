<script setup>
import { ref, onMounted } from 'vue'
import { getHomeCategory } from '@/service/modules/city.js'
// 获取房屋列表
const homeCategories = ref([])
const getHomeCategories = async () => {
    const res = await getHomeCategory()
    console.log(res)
    homeCategories.value = res.data
}
onMounted(() => {
    getHomeCategories()
})

</script>

<template>
    <!-- 房屋列表 -->
    <div class="category">
        <div class="item" v-for="(item, index) in homeCategories" :key="item.id">
            <img :src="item.pictureUrl">
            <div class="text">{{ item.title }}</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.category {
    display: flex;
    overflow-x: auto;
    height: 80px;
    margin-left: 15px;

    &:state(--webkit-scroll-bar) {
        display: none;
    }

    .item {
        width: 70px;
        flex-shrink: 0;
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        img {
            width: 32px;
            height: 32px;
        }

        .text {
            font-size: 12px;
            margin-top: 10px;
        }
    }

}
</style>