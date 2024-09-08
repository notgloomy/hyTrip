<script setup>
import houseBanner from './HouseBanner/houseBanner.vue'
import houseInfos from './HouseInfos/houseInfos.vue'
import houseFacility from './HouseFacility/houseFacility.vue'
import houseLandlord from './HouseLandlord/houseLandlord.vue'
import houseComment from './HouseComment/houseComment.vue'
import houseRule from './HouseRule/houseRule.vue'
import houseLocation from './HouseLocation/houseLocation.vue'
import houseBottom from './HouseBottom/houseBottom.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref, computed, watch, nextTick } from 'vue'
import { getHomeDetail } from '@/service/modules/detail.js'
import useScroll from '@/hooks/useScroll'

const route = useRoute()

// 设置存储导航栏元素的数组
const titleName = ref(['描述', '设施', '房东', '评论', '须知', '周边'])
const currentIndex = ref(0)
const detailRef = ref()
const tabRef = ref()
const { scrollTop } = useScroll(detailRef)

const sectionRefList = []
const getSection = (value) => {
    if (!value) return
    //console.log(value.$el);
    sectionRefList.push(value.$el)
    //console.log(sectionRefList);
}
const tabClick = () => {
    detailRef.value.scrollTo({
        top: sectionRefList[currentIndex.value].offsetTop - 44
    })
    console.log(currentIndex.value);
}
const tabShow = computed(() => {
    return scrollTop.value > 280
})

// 设置一个对象来储存房屋详情
const houseDetail = ref({})

const getHomeDetailList = async () => {
    const res = await getHomeDetail(route.params.id)
    // console.log(res);
    houseDetail.value = res.data
}
const mainPart = computed(() => {
    return houseDetail.value.mainPart
})

onMounted(() => {
    getHomeDetailList()
})
watch(scrollTop, (newValue) => {
    // 获取所有区域的offsetTop
    const els = Object.values(sectionRefList)
    const values = els.map(el => el.offsetTop - 45)
    console.log(values);
    // 根据newValue去匹配想要的索引
    let index = values.length - 1
    for (let i = 0; i < values.length; i++) {
        if (values[i] > newValue) {
            index = i - 1
            break
        }
    }
    //  await nextTick()
    currentIndex.value = index
})

</script>
<template>
    <div class="detail" ref="detailRef">
        <div class="tab">
            <van-tabs v-model:active="currentIndex" @click-tab="tabClick" v-if="tabShow" sticky color="#ff9854">
                <template v-for="(item, index) in titleName" :key="item" ref="tabRef">
                    <van-tab :title="item"></van-tab>
                </template>
            </van-tabs>
        </div>
        <div class="body" v-if="mainPart" v-memo="[mainPart]">
            <houseBanner :main-part="mainPart"></houseBanner>
            <houseInfos :main-part="mainPart" :ref="getSection"></houseInfos>
            <!-- 房屋设施 -->
            <houseFacility :main-part="mainPart" :ref="getSection"></houseFacility>
            <!-- 房东介绍 -->
            <houseLandlord :main-part="mainPart" :ref="getSection"></houseLandlord>
            <!-- 热门评论 -->
            <houseComment :main-part="mainPart" :ref="getSection"></houseComment>
            <!-- 预定须知 -->
            <houseRule :main-part="mainPart" :ref="getSection"></houseRule>
            <!-- 位置周边 -->
            <houseLocation :main-part="mainPart" :ref="getSection"></houseLocation>
            <!-- 价格说明 -->
            <houseBottom :main-part="mainPart"></houseBottom>
        </div>
    </div>
</template>
<style lang="less" scoped>
.van-tabs {
    width: 100%;
    z-index: 999;
    position: fixed;
    top: 0;
}

.detail {
    width: 100%;
    height: 667px;
    overflow-y: scroll;
}
</style>
