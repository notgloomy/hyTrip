import hyRequest from '@/service/request/request'

// 获取房屋详情
export const getHomeDetail = (houseId) => {
    return hyRequest.get({
        url: '/detail/infos',
        params: {
            houseId
        }
    })
}