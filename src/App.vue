<script setup>
import tabbar from '@/components/tab-bar.vue'
import loading from '@/components/loading/loading.vue'
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
    <router-view v-slot="props">
        <keep-alive includes="home">
            <component :is="props.Component"></component>
        </keep-alive>
    </router-view>
    <tabbar v-if="!route.meta.hide"></tabbar>
    <loading></loading>
</template>

<style scoped></style>
