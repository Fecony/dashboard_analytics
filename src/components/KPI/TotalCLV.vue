<template>
    <KPICard title="Total CLV">
        <Doughnut
                id="total-clv"
                :options="chartOptions"
                :data="chartData"
        />
    </KPICard>
</template>

<script lang="ts">
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js'
import KPICard from "@/components/KPI/KPICard.vue";
import { chartConfig } from "@/components/KPI/chartConfig";

ChartJS.register(Legend, ArcElement, Tooltip)

export default {
    name: "TotalCLV",
    components: { KPICard, Doughnut },
    data() {
        return {
            ...chartConfig({
                data: [this.totalCLVExp, this.totalCLVCtrl],
                backgroundColor: ['#ADD8E6', '#98FB98'],
            }),
        }
    },
    props: {
        totalCLVExp: Number,
        totalCLVCtrl: Number
    }
}
</script>

<style scoped>

</style>