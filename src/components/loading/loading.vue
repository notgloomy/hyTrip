<script setup>
import { useTimeStore } from '@/stores/modules/time.js'

const timeStore = useTimeStore()
const Handler = () => {
    timeStore.isLoading = false
}
</script>
<template>
    <div class="loading" v-if="timeStore.isLoading" @click="Handler">
        <van-loading color="#ff9854" size="40" />
    </div>
</template>
<style lang="less" scoped>
.loading {
    position: fixed;
    top: 50%;
    left: 43%;
    right: 0;
    z-index: 9999;
}
</style>
