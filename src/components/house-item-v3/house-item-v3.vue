<script setup>
const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})
</script>
<template>
    <div class="house-item">
        <div class="item-inner">
            <img :src="itemData.image.url" />
            <div class="infos">
                <div class="location">
                    <van-icon name="location-o" />
                    {{ itemData.location }}
                </div>
                <div class="name">{{ itemData.houseName }}</div>
                <div class="summary">{{ itemData.summaryText }}</div>
                <div class="price">
                    <div class="newPrice">¥<span class="book">{{ itemData.finalPrice }}</span></div>
                    <div class="oldPrice">¥<span class="book">{{ itemData.productPrice }}</span></div>
                    <div class="less">{{ itemData.priceTipBadge?.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.house-item {
    width: 50%;

    .item-inner {
        margin: 5px;
        background: #fff;
        border-radius: 6px;
        overflow: hidden;

        img {
            width: 100%;
        }

        .infos {
            padding: 8px 10px;
            color: #666;
        }

        .summary {
            font-size: 12px;
        }

        .name {
            overflow: hidden;
            color: #333333;
            font-size: 15px;
            margin: 5px auto;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .price {
            display: flex;

            .book {
                margin-left: 5px;
            }

            .newPrice {
                color: #ff9645;
                font-size: 18px;
                margin-top: 5px;
            }

            .oldPrice {
                color: #999;
                text-decoration: line-through;
                margin-top: 5px;
            }

            .less {
                margin-left: 5px;
                background-image: linear-gradient(270deg, #f66, #ff9f9f);
                color: #fff;
                padding: 0 5px;
                border-radius: 12px;
                line-height: 25px;
            }
        }
    }
}
</style>
