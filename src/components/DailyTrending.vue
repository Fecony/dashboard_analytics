<template>
    <Loading :loading="isLoading"/>
    <ErrorBoundary v-if="isError" @retry="fetchDailyTrendingMetrics" class="col-span-full"/>

    <ScaleTransition>
        <KPICard v-if="data.length" title="Daily Trending" class="col-span-full">
            <Line :data="chartData" :options="chartOptions" />
        </KPICard>
    </ScaleTransition>
</template>

<script lang="ts">
import DashboardService from "@/services/DashboardService";
import Loading from "@/components/Loading.vue";
import ScaleTransition from "@/components/transition/ScaleTransition.vue";
import KPICard from "@/components/KPI/KPICard.vue";
import { Line } from "vue-chartjs";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import ErrorBoundary from "@/components/ErrorBoundary.vue";
import type { ChartData } from '@/types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
    name: "DailyTrending.vue",
    components: { ErrorBoundary, KPICard, Line, ScaleTransition, Loading },
    data() {
        return {
            isLoading: true,
            isError: false,
            data: [] as ChartData[],
            chartOptions: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        }
    },
    computed: {
        chartData() {
            return {
                labels: this.data.map(item => item.label),
                datasets: [
                    {
                        label: 'Experimental Group',
                        backgroundColor: '#B0C4DE',
                        borderColor: '#8ca9cf',
                        data: this.data.map(item => item.expSum),
                    },
                    {
                        label: 'Control Group',
                        backgroundColor: '#FFB6C1',
                        borderColor: '#ff8396',
                        data: this.data.map(item => item.ctrlSum),
                    },
                ],
            }
        },
    },
    methods: {
        async fetchDailyTrendingMetrics() {
            this.isLoading = true;
            this.isError = false;

            await DashboardService.getChart().then(response => {
                this.data = response.data;
            }).catch(() => {
                this.isError = true;
            }).finally(() => {
                this.isLoading = false;
            });
        },
    },
    created() {
        this.fetchDailyTrendingMetrics();
    },
}
</script>
