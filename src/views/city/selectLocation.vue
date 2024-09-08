<script setup>
import { ref, computed, onMounted } from 'vue'
import { getCityAll } from '@/service/index.js'
import { useRouter } from 'vue-router';
import { useCityStore } from '@/stores/modules/city.js'


const cityStore = useCityStore()
const router = useRouter();

const value = ref('')
const active = ref(0)
// 监听搜索
const onSearch = (val) => {
    showToast(val)
}
// 监听退出
const onCancel = () => {
    router.back()
}

// 打印tab索引
const activeHandler = () => {
    console.log(active.value);
}

// 网络请求: 请求城市数据
const cityList = ref()
// 获取城市列表函数
const getCityList = async () => {
    const res = await getCityAll()
    cityList.value = res.data
    console.log(res);
}
// 监听城市点击
const cityClick = (city) => {
    // 获取城市信息
    console.log(city);
    cityStore.currentCity = city
    // 返回上一级
    router.back()
}

// const currentGroup = computed(() => cityList?.value[active.value])
onMounted(() => {
    getCityList()
    // console.log(cityList.value);
    //console.log(cityStore.currentCity);
})

</script>
<template>
    <form action="/">
        <van-search v-model="value" show-action placeholder="城市/区域/位置" @search="onSearch" @cancel="onCancel"
            shape="round" />
    </form>
    <!-- 城市选项 -->
    <van-tabs v-model:active="active" @click="activeHandler">
        <template v-for="(group) in cityList">
            <van-tab :title="group.title">
                <van-index-bar :sticky="false" :index-list="group.cities.map(item => item.group)">
                    <van-index-anchor index="热门" />
                    <!-- 热门城市 -->
                    <div class="list">
                        <template v-for="(item, index) in group.hotCities">
                            <div class="city" @click="cityClick(item)">{{ item.cityName }}</div>
                        </template>
                    </div>

                    <template v-for="(item, index) in group.cities" :key="index">
                        <van-index-anchor :index="item.group" />
                        <template v-for="(city, indey) in item.cities" :key="indey">
                            <van-cell :title="city.cityName" @click="cityClick(city)" />
                        </template>
                    </template>
                </van-index-bar>
            </van-tab>
        </template>

    </van-tabs>
</template>
<style lang="less" scoped>
.van-search {
    --van-search-left-icon-color: #ff9854;
}

.van-tabs {
    --van-tabs-bottom-bar-color: #ff9854;
}

.list {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;
    flex-wrap: wrap;

    .city {
        width: 70px;
        height: 28px;
        border-radius: 14px;
        font-size: 12px;
        color: #000;
        text-align: center;
        line-height: 28px;
        background: #fff4ec;
        margin: 10px 0;
    }
}
</style>