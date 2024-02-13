<script lang="ts" setup>
import { ref } from 'vue';
import { Menu } from '@element-plus/icons-vue'
import Navigation from './Navigation.vue';

const isDrawerOpen = ref(false);



</script>

<template>
    <header>
        <div class="container">
            <div class="logo">
                <h2><router-link to="/">星靈測驗</router-link></h2>
                <h3><router-link to="/">T E S T A R</router-link></h3>
            </div>
            <Navigation class="hidden md-flex items-center" menu-mode="horizontal"></Navigation>
            <el-icon :size="40" class="md-hidden cursor-pointer" @click="isDrawerOpen = true">
                <Menu />
            </el-icon>
        </div>
    </header>
    <el-drawer v-model="isDrawerOpen" :with-header="false" size="75%">
        <Navigation @on-navigate="isDrawerOpen = false"></Navigation>
    </el-drawer>
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
        align-items: center;
        justify-content: space-between;
        margin: auto;
        width: 90vw;
        max-width: var(--container-max-width);
    }
}
</style>