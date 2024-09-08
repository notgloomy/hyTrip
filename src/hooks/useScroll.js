import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'

/*export default function useScroll(fn) {
    const scrollHandler = () => {
        const scrollTop = Math.floor(document.documentElement.scrollTop)
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
        // console.log(scrollTop, scrollHeight, clientHeight);
        if (scrollTop + clientHeight >= scrollHeight - 1) {
            fn()
        }
    }
    onMounted(() => window.addEventListener('scroll', scrollHandler))
    onUnmounted(() => window.removeEventListener('scroll', scrollHandler))
}*/
export default function useScroll(elRef) {
    let el = window
    const isReachBottom = ref(false)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    const clientHeight = ref(0)

    // 防抖,节流
    const scrollHandler = throttle(() => {
        if (el === window) {
            scrollTop.value = Math.floor(document.documentElement.scrollTop)
            scrollHeight.value = document.documentElement.scrollHeight
            clientHeight.value = document.documentElement.clientHeight
            console.log(clientHeight.value, scrollHeight.value, scrollTop.value);

        } else {
            clientHeight.value = el.clientHeight
            scrollTop.value = Math.floor(el.scrollTop)
            scrollHeight.value = el.scrollHeight
            console.log(clientHeight.value, scrollHeight.value, scrollTop.value);
        }
        console.log('监听滚动');
        // console.log(scrollTop, scrollHeight, clientHeight);
        if (scrollTop.value + clientHeight.value >= scrollHeight.value - 1) {
            isReachBottom.value = true
            console.log('滚动到了底部');
        }
    }, 100)
    onMounted(() => {
        if (elRef) {
            el = elRef.value
        }
        el.addEventListener('scroll', scrollHandler)
    })
    onUnmounted(() => {
        el.removeEventListener('scroll', scrollHandler)
    })
    return { isReachBottom, scrollTop, scrollHeight, clientHeight }
}
