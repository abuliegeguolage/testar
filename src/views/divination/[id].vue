<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import Info from '@/components/divination/Info.vue';

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

import {
    type IndependentDivinationData,
    type ClassifiableDivinationData,
    getIndependentDivination,
    getClassifiableDivinationData
} from '@/api/modules/divination';
import { getAionById } from '@/api/modules/aion';

const route = useRoute();

const { locale } = useI18n()

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const independentDivination = ref<IndependentDivinationData>();
const classifiableDivinationData = ref<ClassifiableDivinationData>();
const aion = ref();
const scores = ref<number[]>([]);

(async () => {
    const aionId = Number(route.params.id);
    independentDivination.value = await getIndependentDivination(aionId, locale.value)
    classifiableDivinationData.value = await getClassifiableDivinationData(aionId, locale.value)
    aion.value = await getAionById(aionId, locale.value);
    scores.value = [
        classifiableDivinationData.value.health.score,
        classifiableDivinationData.value.journey.score,
        classifiableDivinationData.value.love.score,
        classifiableDivinationData.value.money.score,
        classifiableDivinationData.value.work.score
    ]
})()

const radarData = computed(() => ({
    labels: ['健康', '旅遊', '愛情', '財富', '事業'],
    datasets: [{
        label: '今日運勢',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: scores.value
    }]
}));

const options = ref();

</script>

<template>
    <main>
        <div class="charactor" style="height: 400px; background-color: pink;"></div>
        <section class="description">
            <template v-if="aion">
                <h4 class="light-border">{{ aion.name }}</h4>
                <article class="light-border">
                    <p>
                        {{ `「${aion.evaluation?.content}」` }}
                    </p>
                    <p class="text-right">
                        {{ '——' + aion.evaluation?.author }}
                    </p>
                </article>

            </template>
        </section>
        <Info :title="$t('divination')">
            <div class="radar">
                <el-tabs type="border-card">
                    <el-tab-pane label="圖表">
                        <div class="radar-canvas">
                            <Radar :data="radarData" :options="options"></Radar>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="詳情">
                        <p>{{
                            '健康：\n' + classifiableDivinationData?.health.text
                            + '\n\n旅遊：\n' + classifiableDivinationData?.journey.text
                            + '\n\n愛情：\n' + classifiableDivinationData?.love.text
                            + '\n\n財富：\n' + classifiableDivinationData?.money.text
                            + '\n\n事業：\n' + classifiableDivinationData?.work.text

                        }}</p>
                        <!-- <p>{{
                            '今日箴言：\n「' + independentDivination?.comments + '」'
                            + '\n幸運色：\n' + independentDivination?.colors
                            + '\n幸運方向：\n' + independentDivination?.directions
                            + '\n幸運時刻：\n' + independentDivination?.['lucky-time']
                        }}</p> -->
                    </el-tab-pane>
                </el-tabs>

            </div>
        </Info>
    </main>
</template>

<style lang="less" scoped>
main {
    --opacity-bg: color-mix(in srgb, var(--el-color-primary-light-7) 70%, transparent 0%);
    margin: 2rem auto;
    max-width: var(--container-max-width);

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
        z-index: 1;

        @media screen and (min-width: 768px) {
            position: absolute;
            max-width: 50%;
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

        article {
            padding: 1rem;
            border-top: unset;
            border-radius: 0 6px 6px 6px;
            background-color: var(--opacity-bg);
        }
    }

    .radar {
        display: flex;

        @media screen and (max-width: 767px) {
            margin: auto;
            margin-top: 1rem;
        }

        .radar-canvas {
            width: 300px;
            background-color: var(--el-text-color-primary);
            border-radius: 6px;

            @media screen and (max-width: 767px) {
                width: 66vw;
                height: 66vw;
            }
        }
    }

}
</style>