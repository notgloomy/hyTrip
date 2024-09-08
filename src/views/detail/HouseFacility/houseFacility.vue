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
            房屋设施
        </template>
        <template #content>
            <div class="item"
                v-for="(item, index) in mainPart?.dynamicModule?.facilityModule?.houseFacility?.houseFacilitys">
                <div class="head">
                    <img :src="item.icon" class="icon" />
                    <div class="text">
                        {{ item.groupName }}
                    </div>
                </div>
                <div class="list">
                    <div class="iten" v-for="(sec, index) in item.facilitys">
                        <img src="../../../assets/img/1.png" class="i" />
                        <span>{{ sec.name }}</span>
                    </div>
                </div>
            </div>
        </template>
        <template #footer>
            <div class="more">查看全部设施<van-icon name="arrow" /></div>
        </template>
    </HouseInfo>
</template>
<style scoped lang="less">
.icon {
    width: 22px;
    height: 22px;
}

.item {
    display: flex;
    margin: 5px 0;

    .text {
        width: 80px;
        margin-top: 4px;
    }
}

.head {
    width: 142px;
    height: 110px;
    padding: 20px;
    display: flex;
}

.list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-top: 23px;

    .iten {
        width: 96px;
        display: flex;
    }

    .i {
        width: 14px;
        height: 14px;
    }

    span {
        display: block;
        width: 70px;
        height: 18px;
    }
}


.more {
    margin-left: 200px;
    right: 5px;
    line-height: 11.7333vw;
    color: rgb(255, 150, 69);
    font-size: 18px;
    font-weight: 600;
}
</style>