<script setup>
import useScroll from '@/hooks/useScroll';
import { ref } from 'vue'
const favorRef = ref()
useScroll(favorRef)
</script>
<template>
    <div class="favor" ref="favorRef">
        <h2>Favor</h2>
        <template v-for="(item) in 100">
            <div>列表数据{{ item }}</div>
        </template>
    </div>
</template>
<style lang="less" scoped>
.favor {
    height: 300px;
    background-color: orange;
    overflow-y: auto;
}
</style>
