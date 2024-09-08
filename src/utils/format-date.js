import dayjs from 'dayjs'

// 格式化时间
export const formatMonthDay = (date) => {
    return dayjs(date).format("MM月DD日")
}

// 计算间隔时间
export const getDiffDays = (startDate, endDate) => {
    return dayjs(endDate).diff(startDate, 'day')
}

// 第二种格式化时间
export const formatTime = (date) => {
    return dayjs(date).format("MM.DD")
}