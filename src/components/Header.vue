<script lang="ts" setup>
import { ref } from 'vue';

const lang = ref('tw');
</script>

<template>
    <header>
        <div class="container">
            <div class="logo">
                <h2>星靈測驗</h2>
                <h3>TESTAR</h3>
            </div>
            <div class="items-center">
                <el-menu mode="horizontal" :ellipsis="false">
                    <el-menu-item>測驗</el-menu-item>
                    <el-menu-item>占卜</el-menu-item>
                </el-menu>
                <el-select v-model="lang" style="width: 140px;">
                    <el-option label="中文（繁體）" value="tw"></el-option>
                </el-select>
            </div>
        </div>
    </header>
</template>

<style lang="less" scoped>
header {
    display: flex;
    align-items: center;
    height: var(--header-height);
    border-bottom: 1px solid gray;
    box-shadow: 0 6px 6px var(--el-color-primary-light-9);

    .container {
        display: flex;
        justify-content: space-between;
        margin: auto;
        width: 90vw;
        max-width: var(--container-max-width);
    }
}
</style>