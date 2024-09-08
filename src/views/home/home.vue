<script>
export default {
    name: 'home'
}
</script>
<script setup>
import HomeNavbar from '@/views/home/cpns/navbar.vue'
import HomeLocation from '@/views/home/cpns/location.vue'
import HomeDate from '@/views/home/cpns/search-box.vue'
import HomeCategory from '@/views/home/cpns/home-category.vue'
import HomeContent from '@/views/home/cpns/home-content.vue'
import { useHomeStore } from '@/stores/modules/home.js'
import { useTimeStore } from '@/stores/modules/time.js'
import useScroll from '@/hooks/useScroll.js'
import TopSearch from '@/components/search-bar/top-search.vue'
import { watch, computed, ref, onActivated } from 'vue'
import { formatTime } from '@/utils/format-date.js'
const timeStore = useTimeStore()
const homeStore = useHomeStore()
// 监听window创建的滚动
// 当我们离开页面时候，要移除监听
// 如果别的页面也进行类似的监听，会编写重复代码
/*window.addEventListener('scroll', () => {
    const scrollTop = Math.floor(document.documentElement.scrollTop)
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    // console.log(scrollTop, scrollHeight, clientHeight);
    if (scrollTop + clientHeight >= scrollHeight - 1) {
        homeStore.HouseListData()
    }
})*/
/*useScroll(() => {
    homeStore.HouseListData()
})*/
const homeRef = ref(0)

const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
    if (newValue === true) {
        homeStore.HouseListData().then(() => {
            isReachBottom.value = false
        })
    }
})

const isSearchShow = computed(() => {
    return scrollTop.value > 300
})

// 设置传参的值
const startSelectTime = computed(() => {
    return formatTime(timeStore.startDate)
})
const endSelectTime = computed(() => {
    return formatTime(timeStore.endDate)
})

// 跳回到home时，保留原来的位置
onActivated(() => {
    // 调用时机为首次挂载
    // 以及每次从缓存中被重新插入时
    homeRef.value.scrollTo({
        top: scrollTop.value
    })
})

</script>
<template>
    <div class="home" ref="homeRef">
        <!-- 顶部搜索框 -->
        <top-search v-if="isSearchShow" :start-date="startSelectTime" :end-date="endSelectTime"></top-search>
        <div class="title">
            <home-navbar></home-navbar>
        </div>
        <div class="bgbox">
            <img src="http://43.136.130.138/journey/assets/banner.3d82bd25.webp" class="bg">
        </div>
        <!-- 地址选择 -->
        <home-location></home-location>
        <!-- 日期选择,热点推荐 -->
        <home-date></home-date>
        <!-- 房屋类型 -->
        <home-category></home-category>
        <!-- 房屋内容 -->
        <div class="hot">
            <home-content></home-content>
        </div>
    </div>
</template>
<style lang="less" scoped>
.bg {
    width: 100%;
    height: 134px;
}

.home {
    height: 100vh;
    overflow-y: scroll;
}
</style>
