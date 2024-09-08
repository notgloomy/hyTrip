<script setup>
import HouseInfo from '@/components/house-info.vue'
defineProps({
    mainPart: {
        type: Object,
        default: () => { }
    }
})
</script>
<template>
    <HouseInfo>
        <template #header>
            热门评论
        </template>
        <template #content>
            <div class="comment">
                <div class="easyComment">
                    <div class="leftComment">
                        <div class="commentScore">{{ mainPart?.dynamicModule?.commentModule?.overall }}</div>
                        <div class="scoreInfo">
                            <div class="scoreTitle">{{ mainPart?.dynamicModule?.commentModule?.scoreTitle }}</div>
                            <div class="scoreAll">{{ mainPart?.dynamicModule?.commentModule?.totalCount }}条评论</div>
                            <div class="star"><van-rate :model-value="mainPart?.dynamicModule?.commentModule?.overall"
                                    readonly allow-half size="12" color="#ff9854" /></div>
                        </div>
                    </div>
                    <div class="rightComment">
                        <div class="commentList">
                            <div class="commentItem"
                                v-for="(item, index) in mainPart?.dynamicModule?.commentModule?.subScores" :key="item">
                                {{ item
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="diffComment">
                    <div class="difflist">
                        <div class="diffitem"
                            v-for="(item, index) in mainPart?.dynamicModule?.commentModule?.commentTagVo"
                            :style="{ color: item.color, backgroundColor: item.backgroundColor }">
                            {{ item.text }}
                        </div>
                    </div>
                </div>
                <div class="userComment">
                    <div class="userInfo">
                        <div class="userAvatar"><img :src="mainPart?.dynamicModule?.commentModule?.comment?.userAvatars"
                                class='avatarInfo' />
                        </div>
                        <div class="user">
                            <div class="userName">{{ mainPart?.dynamicModule?.commentModule?.comment?.userName }}
                            </div>
                            <div class="userDate">{{ mainPart?.dynamicModule?.commentModule?.comment?.checkInDate }}
                            </div>
                        </div>
                    </div>
                    <div class="userText">{{ mainPart?.dynamicModule?.commentModule?.comment?.commentDetail }}</div>
                </div>
            </div>
        </template>
        <template #footer>
            <div class="allComment">查看全部{{ mainPart?.dynamicModule?.commentModule?.totalCountStr }}条评论<van-icon
                    name="arrow" /></div>
        </template>
    </HouseInfo>
</template>
<style scoped lang="less">
.comment {
    .easyComment {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;

        .leftComment {
            display: flex;

            .commentScore {
                width: 56px;
                height: 54px;
                font-weight: 700;
                font-size: 40px;
                border-bottom: 5px solid #fa8c1d;
                border-radius: 5px;
            }

            .scoreInfo {
                margin-top: 3px;
                margin-left: 10px;
            }

            .scoreAll {
                color: #999999;
                margin: 4px 0;
            }
        }

        .rightComment {
            width: 170px;

            .commentList {

                display: flex;
                flex-wrap: wrap;
                color: #666666;

                .commentItem {
                    margin-left: 5px;
                    margin-top: 5px;
                }
            }
        }
    }

    .diffComment {
        .difflist {
            display: flex;
            flex-wrap: wrap;

            .diffitem {
                margin-right: 10px;
                margin-top: 10px;
            }
        }
    }

    .userComment {
        margin: 20px 0;

        .userInfo {
            display: flex;
            margin: 20px 0;

            .userAvatar {
                width: 40px;
                height: 40px;

                .avatarInfo {
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                }
            }

            .userName {
                margin-top: 3px;
                font-size: 17px;
            }

            .userDate {
                color: #999999;
                margin: 3px 0;
            }
        }

        .userText {
            color: #333333;
        }
    }
}

.allComment {
    margin-left: 160px;
    right: 5px;
    line-height: 11.7333vw;
    color: rgb(255, 150, 69);
    font-size: 18px;
    font-weight: 600;
}

.more {
    margin-left: 200px;
    right: 5px;
    line-height: 11.7333vw;
    color: rgb(255, 150, 69);
    font-size: 18px;
    font-weight: 600;
}
</style>