<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const onClickLeft = () => {
    router.back()
}
defineProps({
    mainPart: {
        type: Object,
        default: () => { }
    }
})
</script>
<template>
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <template v-for="(item, index) in mainPart?.topModule?.housePicture?.housePics" :key="item">
            <van-swipe-item><img :src="item.url"></van-swipe-item>
        </template>
    </van-swipe>
</template>
<style scoped>
.van-nav-bar {
    --van-nav-bar-icon-color: #ff9854;
    --van-nav-bar-text-color: #ff9854;
    --van-nav-bar-title-text-color: #ff9854;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}

img {
    width: 100%;
    position: relative;
    display: flex;
    flex-shrink: 0;
    height: 100%;
}
</style>