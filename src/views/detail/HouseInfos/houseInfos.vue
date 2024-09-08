<script setup>
defineProps({
    mainPart: {
        type: Object,
        default: () => { }
    }
})
</script>
<template>
    <div class="infos">
        <div class="name">{{ mainPart?.topModule?.houseName }}</div>
        <div class="tags">
            <div class="item" v-for="(item, index) in mainPart?.topModule?.houseTags" :key="item">
                <span :style="{ color: item.tagText?.color, background: item.tagText?.background?.color }">{{
                    item.tagText?.text }}</span>
            </div>
        </div>
        <div class="comment-extra">
            <div class="left">
                <div class="score">{{ mainPart?.topModule?.commentBrief?.overall }}</div>
                <div class="title">{{ mainPart?.topModule?.commentBrief?.scoreTitle }}</div>
                <div class="brief">{{ mainPart?.topModule?.commentBrief?.commentBrief }}</div>
            </div>
            <div class="right">
                <div class="count">{{ mainPart?.topModule?.commentBrief?.totalCount }}条评价<van-icon name="arrow" />
                </div>
            </div>
        </div>
        <div class="position-extra">
            <div class="left-position">{{ mainPart?.topModule?.nearByPosition?.address }}</div>
            <div class="right-map">地图周边<van-icon name="arrow" /></div>
        </div>
    </div>
</template>
<style scoped lang="less">
.infos {
    padding: 17px;

    .name {
        font-weight: 700;
        font-size: 21px;
        color: #333;
        text-align: justify;
        line-height: 6.4vw;
        overflow: hidden;
        margin-bottom: 1.6vw;
    }

    .tags {
        display: flex;
        margin: 10px 0;
        flex-wrap: wrap;

        .item {
            margin: 2px 2px;
        }
    }

    .comment-extra {
        padding: 18px 0;
        display: flex;
        justify-content: space-between;
        background-color: #f5f7fa;

        .left {
            display: flex;

            .score {
                font-weight: 700;
                font-size: 20px;
                color: #333;
            }

            .title {
                color: #333;
                margin-top: 4px;
                margin-left: 3px;
                font-weight: 700;
            }

            .brief {
                margin-top: 4px;
                margin-left: 3px;
                color: #666;
            }
        }

        .right {
            color: #ff9854;
            margin: auto 0
        }
    }

    .position-extra {
        padding: 18px 0;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        background-color: #f5f7fa;

        .left-position {
            font-weight: 700;
            font-size: 16px;
            color: #333;
        }

        .right-map {
            color: #ff9854;
        }
    }
}
</style>