<script lang="ts" setup>
const props = defineProps(["title", "description"])
</script>

<template>
    <section class="divination">
        <h4>{{ props.title }}</h4>
        <section class="content">
            <slot></slot>
            <p>
                {{ props.description }}
            </p>
        </section>
    </section>
</template>

<style lang="less" scoped>
.divination {
    top: 0;
    right: 1rem;

    @media screen and (min-width: 768px) {
        position: absolute;
    }

    @media screen and (max-width: 767px) {
        padding: 1rem 2rem;
    }

    h4 {
        position: relative;
        padding: 1rem;
        text-align: right;

        @media screen and (max-width: 767px) {
            text-align: left;
        }

        &::after {
            position: absolute;
            content: '';
            right: -10px;
            bottom: -10px;
            width: 20px;
            height: 20px;
            background-image: url('@/assets/images/star.svg');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 120%;
        }
    }

    .content {
        display: flex;
        padding: 1rem;
        white-space: pre;
        border-top: 1px solid var(--el-color-primary-light-9);
        border-radius: 0 0 6px 6px;
        background-color: var(--opacity-bg);

        @media screen and (max-width: 767px) {
            flex-direction: column-reverse;
        }
    }
}
</style>