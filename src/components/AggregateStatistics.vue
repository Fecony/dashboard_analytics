<template>
    <Loading :loading="isLoading"/>
    <ErrorBoundary v-if="isError" @retry="fetchAggregateMetrics" class="col-span-full"/>

    <ScaleTransition>
        <KPICard v-if="data.length" title="Aggregate Statistics" class="col-span-full">
            <VueDatePicker
                    class="max-w-fit	float-right"
                    v-model="selectedDate"
                    :min-date="minMaxDate.minDate"
                    :max-date="minMaxDate.maxDate"
                    :start-date="minMaxDate.minDate"
                    :enableTimePicker="false"
                    clearable
            />

            <Bar :data="chartData" :options="chartOptions"/>
        </KPICard>
    </ScaleTransition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
// @ts-ignore
import VueDatePicker from '@vuepic/vue-datepicker';
import DashboardService from '@/services/DashboardService';
import Loading from '@/components/Loading.vue';
import ScaleTransition from '@/components/transition/ScaleTransition.vue';
import KPICard from '@/components/KPI/KPICard.vue';
import ErrorBoundary from '@/components/ErrorBoundary.vue';
import '@vuepic/vue-datepicker/dist/main.css';
import { ChartData } from '@/types';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default defineComponent({
    components: { KPICard, ScaleTransition, Loading, Bar, VueDatePicker, ErrorBoundary },
    data() {
        return {
            selectedDate: null as unknown as Date,
            isLoading: true,
            isError: false,
            data: [] as ChartData[],
            chartOptions: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        beginAtZero: true,
                        stacked: true
                    },
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            },
        };
    },
    computed: {
        minMaxDate() {
            const dates: string[] = this.data?.map(item => item.label);
            const minDate: string = dates.reduce((min, date) => date < min ? date : min, dates[0]);
            const maxDate: string = dates.reduce((max, date) => date > max ? date : max, dates[0]);

            return {
                minDate,
                maxDate
            };
        },
        chartData() {
            let data = this.data;

            if (this.selectedDate) {
                data = this.data.filter(item => item.label <= this.selectedDate.toISOString().split('T')[0]);
            }

            return {
                labels: data.map(item => item.label),
                datasets: [
                    {
                        label: 'Expected Sum',
                        backgroundColor: '#ADD8E6',
                        borderColor: '#86c5da',
                        data: data.map(item => item.expSum),
                        tension: 0.2
                    },
                    {
                        label: 'Control Sum',
                        backgroundColor: '#98FB98',
                        borderColor: '#67f967',
                        data: data.map(item => item.ctrlSum),
                        tension: 0.2
                    },
                ],
            };
        },
    },
    methods: {
        async fetchAggregateMetrics() {
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
        this.fetchAggregateMetrics();
    },
});
</script>
