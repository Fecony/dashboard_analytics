<template>
    <KPICard title="Total Repeaters">
        <Doughnut
                id="total-repeaters"
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
    name: "TotalRepeaters",
    components: { KPICard, Doughnut },
    data() {
        return {
            ...chartConfig({
                data: [this.totalRepeatersExp, this.totalRepeatersCtrl],
                backgroundColor: ['#B0C4DE', '#FFB6C1'],
            }),
        }
    },
    props: {
        totalRepeatersExp: Number,
        totalRepeatersCtrl: Number
    }
}
</script>
