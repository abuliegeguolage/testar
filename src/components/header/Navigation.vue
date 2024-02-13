<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

interface Props {
    menuMode?: 'horizontal' | 'vertical'
}
const props = defineProps<Props>();

interface Emit {
    (event: 'on-navigate'): void
}
const emit = defineEmits<Emit>();

const { locale } = useI18n()

</script>

<template>
    <nav>
        <el-menu :mode="menuMode" :ellipsis="false">
            <el-menu-item><router-link to="/psy-test" @click="emit('on-navigate')">{{ $t("psychological-test")
            }}</router-link></el-menu-item>
            <el-menu-item><router-link to="/divination" @click="emit('on-navigate')">{{ $t("divination")
            }}</router-link></el-menu-item>
        </el-menu>
        <el-select v-model="locale" style="width: 140px;">
            <el-option label="中文（繁體）" value="tw"></el-option>
            <el-option label="English" value="en"></el-option>
        </el-select>
    </nav>
</template>

<style lang="less" scoped>
:deep(.el-menu) {
    @media screen and (max-width: 767px) {
        border-right: unset;
    }
}
</style>