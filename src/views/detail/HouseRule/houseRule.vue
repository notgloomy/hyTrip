<script setup>
import HouseInfo from '@/components/house-info.vue'
import { ref } from 'vue'
defineProps({
    mainPart: {
        type: Object,
        default: () => { }
    }
})

// 控制弹层的显示
const ruleShow = ref(false)
// 点击查看详情后
const ruleShowHandler = () => {
    ruleShow.value = true
}
// 点击×图标
const onClickCloseIcon = () => {
    ruleShow.value = false
}
</script>
<template>
    <HouseInfo>
        <template #header>
            预定须知
        </template>
        <template #content>
            <div class="ruleList">
                <div class="ruleItem" v-for="(item, index) in mainPart?.dynamicModule?.rulesModule?.orderRules"
                    :key="item">
                    <div class="rule">{{ item.title }}</div>
                    <div class="ruleIntroduction">{{ item.introduction }}</div>
                    <div class="ruleInfo" v-if="item.tips !== null" @click="ruleShowHandler">查看说明
                    </div>

                </div>
                <van-popup :show="ruleShow" position="bottom" :style="{ height: '30%', width: '380px' }" closeable
                    @click="onClickCloseIcon">
                    <div class="tipname">
                        押金说明
                    </div>
                    <div v-for="(item, index) in mainPart?.dynamicModule?.rulesModule?.orderRules" class="tipList">
                        <div class="tipItem" v-for="(tip, index) in item?.tips">{{ tip }}</div>
                    </div>
                </van-popup>
            </div>
        </template>
    </HouseInfo>
</template>
<style scoped lang="less">
.ruleList {
    .ruleItem {
        display: flex;
        margin: 20px 0;

        .rule {
            color: #666666;
        }

        .ruleIntroduction {
            margin-left: 20px;
        }

        .ruleInfo {
            margin-left: 40px;
            color: #000000;
        }
    }

    .tipname {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        font-size: 20px;
    }

    .tipList {
        margin: 15px;

        .tipItem {
            color: #999999;
            margin: 5px 0;
        }
    }

}
</style>