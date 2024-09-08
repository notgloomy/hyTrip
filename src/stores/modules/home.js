import { defineStore } from 'pinia'
import { getHomeHouseList } from '@/service/modules/city.js'
export const useHomeStore = defineStore('home', {
    state: () => ({
        houseList: [],
        page: 1
    }),
    actions: {
        async HouseListData() {
            const res = await getHomeHouseList(this.page++)
            this.houseList.push(...res.data)
        }
    }
})
