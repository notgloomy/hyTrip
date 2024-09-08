import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useTimeStore = defineStore('time', () => {
    const nowDay = new Date()
    const startDate = new Date()
    const endDate = nowDay.setDate(nowDay.getDate() + 1)

    const isLoading = ref(false)
    return { startDate, endDate, nowDay, isLoading }
})