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
            房东介绍
        </template>
        <template #content>
            <div class="intro">
                <div class="leader"><img :src="mainPart?.dynamicModule?.landlordModule?.topScroll" class="leaderimg">
                </div>
                <div class="hotel">
                    <div class="hotel-left">
                        <div class="avatar"><img :src="mainPart?.dynamicModule?.landlordModule?.hotelLogo" class="Logo">
                        </div>
                        <div class="hotel-message">
                            <div class="hotel-name">{{ mainPart?.dynamicModule?.landlordModule?.hotelName }}</div>
                            <div class="hotel-intro">
                                <div class="hotel-item"
                                    v-for="(item, index) in mainPart?.dynamicModule?.landlordModule?.hotelTags">{{
                                        item.tagText.text }}</div>
                            </div>
                        </div>

                    </div>
                    <div class="hotel-right">
                        <div class="contact">联系房东</div>
                    </div>
                </div>
            </div>
            <div class="rate">
                <div class="rate-item" v-for="(item, index) in mainPart?.dynamicModule?.landlordModule?.hotelSummary"
                    :key="item">
                    <div class="goodComment">{{ item.title }}</div>
                    <div class="goodrate">{{ item.introduction }}</div>
                    <div class="goodCount">{{ item.tip }}</div>
                </div>
            </div>
        </template>
        <template #footer>
            <div class="more">查看房东主页<van-icon name="arrow" /></div>
        </template>
    </HouseInfo>
</template>
<style scoped lang="less">
.intro {
    .leader {
        .leaderimg {
            width: 100%;
            border-radius: 5px;
        }
    }

    .hotel {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        .hotel-left {
            display: flex;
            // flex-direction: column;

            .avatar {
                width: 58px;
                height: 58px;
            }

            .Logo {
                width: 58px;
                height: 58px;
                border-radius: 50%;
            }

            .hotel-message {
                display: flex;
                flex-direction: column;

                .hotel-name {
                    font-weight: 600;
                    font-size: 18px;
                    margin-top: 10px;
                }
            }

            .hotel-intro {
                display: flex;
                color: #9b9b9b;

                .hotel-item {
                    margin-right: 5px;
                }
            }
        }

        .hotel-right {
            margin-top: 15px;
            width: 65px;
            height: 30px;
            border-radius: 10px;
            text-align: center;
            font-size: 12px;
            padding: 0 8px;
            color: #fff;
            background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);

            .contact {
                margin-top: 8px;
            }
        }
    }
}

.rate {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;

    .rate-item {
        .goodComment {
            color: #999999;
        }

        .goodrate {
            font-weight: 700;
            font-size: 23px;
            margin: 5px 0;
        }

        .goodCount {
            color: #666666;
        }
    }
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