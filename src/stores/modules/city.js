import { defineStore } from 'pinia'

export const useCityStore = defineStore('city', () => {
    const currentCity = {
        "cityName": '广州'
    }
    return { currentCity }
})

