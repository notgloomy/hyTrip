<script setup>
import { useRouter } from "vue-router";
import { useCityStore } from '@/stores/modules/city.js'
const cityStore = useCityStore()
const router = useRouter();

const countryClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
        console.log('获取位置成功', res);
    }, err => {
        console.log('获取位置失败', err);
    }, {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
    })
}
</script>
<template>
    <div class="location">
        <div class="country" @click="router.push('/country')">{{ cityStore.currentCity.cityName }}</div>
        <div class="countrySelect"><span class="countrytext" @click="countryClick">我的位置</span><van-icon
                name="location-o" /></div>
    </div>
</template>
<style lang="less" scoped>
.location {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    margin-top: -10px;

    .country {
        color: #333;
        font-size: 4vw;
        padding: 25px;
    }

    .countrySelect {

        padding-top: 25px;
        padding-right: 25px;
    }

    .countrytext {
        color: #666;
        font-size: 3.2vw;
    }

    .van-icon {
        margin-left: 2px;
        color: orange;
    }
}
</style>
