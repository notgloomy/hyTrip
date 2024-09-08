<script setup>
import HouseInfo from '@/components/house-info.vue'
defineProps({
    mainPart: {
        type: Object,
        default: () => { }
    }
})
</script>
<template>
    <HouseInfo>
        <template #content>
            <div class="priceTitle">
                {{ mainPart?.introductionModule?.title }}
            </div>
            <div class="priceInfo">
                {{ mainPart?.introductionModule?.introduction }}
            </div>
        </template>
        <template #footer>
            <div class="footer">
                <div class="top"><img src="../../../assets/img/bottom.png" class="topimg"></div>
                <div class="text">弘源旅途,永无止境</div>
            </div>
        </template>
    </HouseInfo>
</template>
<style scoped lang="less">
.priceTitle {
    font-weight: 700;
    font-size: 18px;
    margin: 12px 0;
}

.priceInfo {
    color: #666666;
    line-height: 1.5;
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 32vw;

    .topimg {
        width: 140px;
        height: 20px;
    }

    .text {
        color: #7688a7;
        margin-top: 10px;
    }
}
</style>