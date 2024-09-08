<script setup>

defineProps({
    startDate: {
        type: String,
        default: '08.25'
    },
    endDate: {
        type: String,
        default: '08.26'
    }
})

</script>
<template>
    <div class="search">
        <div class="searchbox">
            <div class="selectTime">
                <div class="start">
                    <div class="name">住</div>
                    <div class="date">{{ startDate }}</div>
                </div>
                <div class="end">
                    <div class="name">离</div>
                    <div class="date">{{ endDate }}</div>
                </div>
            </div>
            <div class="content">
                <div class="keyword">关键字/位置/民宿</div>
            </div>
            <div class="right"><van-icon name="search" size="28" /></div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.search {
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    padding: 15px;
    border-radius: 5px;
    color: #999;
    font-size: 14px;
    background-color: #fff;

    .searchbox {
        display: flex;
        background-color: #f6f5f5;
        height: 45px;
        border-radius: 5px;
        align-items: center;
    }

    .content {
        width: 280px;
    }

    .selectTime {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        height: 30px;
    }

    .start,
    .end {
        display: flex;
        flex-direction: row;
        align-items: center;
        line-height: normal;
        font-size: 10px;

        .name {
            font-size: 10px;
        }

        .date {
            position: relative;
            color: #333;
            margin: 0 2.66667vw 0 .8vw;
            font-weight: 500;
        }
    }

    .content {
        position: relative;
        flex: 1;
        padding: 0 6px;
        text-align: left;
        border-left: 1px solid #fff;
    }

    .keyword {
        max-width: 180px;
        font-size: 15px;
        height: 30px;
        line-height: 30px;
    }
}
</style>
