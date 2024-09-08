<template>
    <div class="section">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="content">
            </slot>
        </main>
        <footer>
            <slot name="footer">
            </slot>
        </footer>
    </div>
</template>
<style lang="less" scoped>
.section {
    padding: 0 20px;
    border-top: 1.5vw solid rgb(242, 243, 244);
}

header {
    font-weight: 700;
    font-size: 24px;
    color: rgb(51, 51, 51);
    margin: 15px 0;
}

main {
    padding: 6px 0;
    border-top: 2px solid rgb(242, 243, 244);
    background-color: rgb(247, 249, 251);
}
</style>