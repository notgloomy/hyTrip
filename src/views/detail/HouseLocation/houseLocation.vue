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
        <template #header>
            位置周边
        </template>
        <template #content>
            <div class="houseLocation"><img :src="mainPart?.dynamicModule?.positionModule?.mapUrl" /></div>
            <div class="locationIntroduction">
                {{ mainPart?.dynamicModule?.positionModule?.topScroll?.text }}
            </div>
        </template>
        <template #footer>
            <div class="allComment">查看更多周边信息<van-icon name="arrow" /></div>
        </template>
    </HouseInfo>
</template>
<style scoped lang="less">
.houseLocation {
    img {
        width: 100%;
    }
}

.allComment {
    margin-left: 170px;
    right: 5px;
    line-height: 11.7333vw;
    color: rgb(255, 150, 69);
    font-size: 18px;
    font-weight: 600;
}

.locationIntroduction {
    margin-top: 10px;
    color: #999999;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    /* 限制在一个块元素显示的文本的行数 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 当文本溢出时显示省略标记 */
    white-space: normal;
    /* 文本处理为正常 */
    word-wrap: break-word;
    /* 允许长单词或URL地址被打断换行 */
    line-clamp: 10;
}
</style>