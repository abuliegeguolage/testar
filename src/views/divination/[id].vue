<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Info from '@/components/divination/Info.vue';

const route = useRoute();

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const data = ref({
    labels: ['綜合', '事業', '財富', '愛情', '學業'],
    datasets: [{
        label: '今日運勢',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
    }]
});
const options = ref();

</script>

<template>
    <main>
        <div class="charactor" style="height: 80vh;; background-color: pink;"></div>
        <section class="description">
            <h4 class="light-border">冠之星靈</h4>
            <p class="light-border">
                「他是一個……令人不敢再看一眼的星靈。」——五星上將麥克阿瑟
            </p>
        </section>
        <Info :title="$t('divination')"
            :description="'幸運色：灰\n幸運數字：2.5\n今日不宜：再看一眼、靠近一點\n幸運色：灰\n幸運數字：2.5\n今日不宜：再看一眼、靠近一點\n幸運色：灰\n幸運數字：2.5\n今日不宜：再看一眼、靠近一點'">
            <div class="radar">
                <Radar :data="data" :options="options"></Radar>
            </div>
        </Info>
    </main>
</template>

<style lang="less" scoped>
main {
    --opacity-bg: color-mix(in srgb, var(--el-color-primary-light-7) 70%, transparent 0%);
    margin: 2rem auto;
    width: var(--container-max-width);

    @media screen and (min-width: 768px) {
        position: relative;
    }

    .charactor {
        display: inline-block;
        margin-bottom: 1rem;
        width: 940px;
        max-width: 90vw;

        @media screen and (max-width: 767px) {
            display: block;
            margin: auto;
        }
    }

    .description {
        left: 1rem;
        bottom: 0;

        @media screen and (min-width: 768px) {
            position: absolute;
        }

        @media screen and (max-width: 767px) {
            padding: 1rem 2rem;
        }

        h4 {
            display: inline-block;
            padding: 1rem;
            border-bottom: unset;
            border-radius: 6px 6px 0 0;
            background-color: var(--opacity-bg);
        }

        p {
            padding: 1rem;
            border-top: unset;
            border-radius: 0 6px 6px 6px;
            background-color: var(--opacity-bg);
        }
    }

    .radar {
        margin-right: 1rem;
        width: 300px;
        border-radius: 6px;
        background-color: var(--el-text-color-primary);

        @media screen and (max-width: 767px) {
            margin-right: unset;
            margin-top: 1rem;
        }
    }

}
</style>