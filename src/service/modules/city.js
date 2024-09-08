import hyRequest from '@/service/request/request'

// 获取城市列表
export const getCityAll = () => {
    return hyRequest.get({
        url: '/city/all'
    })
}

// 获取热门建议
export const getHotSuggestAll = () => {
    return hyRequest.get({
        url: '/home/hotSuggests'
    })
}

// 获取推荐类别
export const getHomeCategory = () => {
    return hyRequest.get({
        url: '/home/categories'
    })
}

// 获取房间列表
export const getHomeHouseList = (page) => {
    return hyRequest.get({
        url: '/home/houselist',
        params: {
            page
        }
    })
}