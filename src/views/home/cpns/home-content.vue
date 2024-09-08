<script setup>
import { getHomeHouseList } from '@/service/modules/city.js'
import { ref, onMounted } from 'vue'
import HouseV9 from '@/components/house-item-v9/house-item-v9.vue'
import HouseV3 from '@/components/house-item-v3/house-item-v3.vue'
import { useRouter } from 'vue-router'
// 定义房间列表
/*const houseList = ref([])
const page = ref(1)
// 定义获取房间列表函数
const getHomeList = async () => {
    const res = await getHomeHouseList(page.value)
    houseList.value.push(...res.data)
    // console.log(houseList);
    // console.log(res.data);
}
const onceClick = () => {
    page.value++
    getHomeList()
    console.log(houseList);
}
getHomeList()*/
import { useHomeStore } from '@/stores/modules/home.js'

const homeStore = useHomeStore()
homeStore.HouseListData()
const router = useRouter()

const itemClick = (item) => {
    router.push(`/detail/${item.houseId}`)
}

</script>
<template>
    <div class="content">
        <h2 class="title">热门精选</h2>
        <div class="list">
            <template v-for="(item, index) in homeStore.houseList" :key="item.data.houseId">
                <HouseV9 v-if="item.discoveryContentType === 9" :item-data="item.data" @click="itemClick(item.data)" />
                <HouseV3 v-else-if="item.discoveryContentType === 3" :item-data="item.data"
                    @click="itemClick(item.data)" />
            </template>
        </div>
        <!-- 加载更多 -->
    </div>
</template>
<style lang="less" scoped>
.content {
    padding: 8px 10px;
    padding-bottom: 80px;

    .title {
        font-size: 22px;
        padding: 10px;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
