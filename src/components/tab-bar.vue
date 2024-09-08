<script setup>
import { tabbarData } from '@/assets/data/tabbar';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const currentIndex = ref(0)

const itemClick = (item, index) => {
    currentIndex.value = index
}

</script>
<template>
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
        <template v-for="(item, index) in tabbarData">
            <van-tabbar-item :icon="item.icon" @click="itemClick(item, index)" :to="item.path">{{ item.text
                }}</van-tabbar-item>
        </template>
    </van-tabbar>
    <!-- <div class="tabbar">
        <template  v-for="(item,index) in tabbarData">
            <div class="tabbar-item" :class="{ active: currentIndex === index }"  @click="itemClick(item,index)">
            {{ item.text }}
        </div>
        </template>
    </div> -->
</template>
<style lang="less" scoped>
.tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;

    .tabbar-item {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }
}
</style>