<script setup>
import { formatMonthDay } from '@/utils/format-date.js'
import { useRouter } from 'vue-router'
import { getHotSuggestAll } from '@/service/modules/city.js'
import { ref, onMounted, computed } from 'vue'
import { useCityStore } from '@/stores/modules/city.js'
import { useTimeStore } from '@/stores/modules/time.js'

const timeStore = useTimeStore()

// 选择日期
// const nowDay = new Date()
const startDate = computed(() => {
    return formatMonthDay(timeStore.startDate)
})
// const nextDay = nowDay.setDate(nowDay.getDate() + 1)
const endDate = computed(() => {
    return formatMonthDay(timeStore.endDate)
})

// 计算停留时间
const staytime = ref(1)


// 日历弹层控制
const show = ref(false)
const onConfirm = (value) => {
    // console.log(value);
    timeStore.isLoading = true
    timeStore.startDate = value[0]
    timeStore.endDate = value[1]
    show.value = false
    staytime.value = value[1].getDate() - value[0].getDate()
    timeStore.isLoading = false
}

// 获取当前城市
const cityStore = useCityStore()

const router = useRouter()
// 获取热门建议
const hotSuggestList = ref({
    "text": '江苏'
})
const getHotList = async () => {
    timeStore.isLoading = true
    const res = await getHotSuggestAll()
    hotSuggestList.value = res.data
    timeStore.isLoading = false
}


// 搜索跳转传参行为
const searchClick = () => {
    router.push({
        path: '/search',
        query: {
            startDate: formatMonthDay(timeStore.startDate),
            endDate: formatMonthDay(timeStore.endDate),
            currentCity: cityStore.currentCity.cityName
        }
    })
}

onMounted(() => {
    getHotList()
})
console.log(hotSuggestList.value);


</script>
<template>
    <div class="date">
        <div class="start">
            <span class="intext">入住</span>
            <div class="time" @click="show = true">{{ startDate }}</div>
        </div>
        <div class="stay">
            <div class="staytime">共{{ staytime }}晚</div>
        </div>
        <div class="end">
            <span class="intext">离店</span>
            <div class="time" @click="show = true">{{ endDate }}</div>
        </div>
    </div>
    <van-calendar v-model:show="show" type="range" @confirm="onConfirm" color="#ff9854" />


    <!-- 描述 热门建议 -->
    <div class="description">
        <div class="leftcrip">价格不限</div>
        <div class="rightcrip">人数不限</div>
    </div>
    <div class="hotsuggest">
        <div class="important">关键字/位置/民宿名</div>
        <div class="list">
            <template v-for="(item, index) in hotSuggestList" :key="index">
                <div class="city" :style="{ color: item.tagText?.color, background: item.tagText?.background.color }"
                    @clicik="console.log(hotSuggestList)">
                    {{ item.tagText?.text }}</div>
            </template>
        </div>
    </div>

    <!-- 搜索按钮 -->
    <div class="btn" @click="searchClick">开始搜索</div>


</template>
<style lang="less" scoped>
.date {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;

    .start {
        margin-left: 25px;
    }

    .intext {
        color: #999;
        font-size: 3vw;
    }

    .stay {
        color: #999;
        font-size: 3.5vw;
        margin-top: 10px;
    }

    .end {
        margin-right: 28px;
    }
}

.description,
.important {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 5px 25px;
    color: #999;
    font-size: 15px;
    border-bottom: 1px solid #faf8f9;

    .rightcrip {
        margin-right: 2px;
    }
}

.important {
    margin-top: 12px;
}

.list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 5.33333vw;
    color: #999;

    .city {
        padding: 1.06667vw 2.13333vw;
        margin: 1.06667vw;
        border-radius: 3.73333vw;
        font-size: 3.2vw;
    }
}

.btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    margin: 10px auto;
    margin-bottom: 0;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
}
</style>
