<template>
    <Loading :loading="isLoading"/>

    <ScaleTransition>
        <TotalOffers v-if="widgetData?.totalOffers" :totalOffers="widgetData.totalOffers" />
    </ScaleTransition>

    <ScaleTransition>
        <TotalRepeaters
            v-if="widgetData?.totalRepeatersExp"
            :totalRepeatersExp="widgetData.totalRepeatersExp"
            :totalRepeatersCtrl="widgetData.totalRepeatersCtrl"
        />
    </ScaleTransition>

    <ScaleTransition>
        <TotalCLV
            v-if="widgetData?.totalCLVExp"
            :totalCLVExp="widgetData.totalCLVExp"
            :totalCLVCtrl="widgetData.totalCLVCtrl"
        />
    </ScaleTransition>
</template>

<script lang="ts">
import KPICard from "@/components/KPI/KPICard.vue";
import DashboardService from '@/services/DashboardService';
import Loading from "@/components/Loading.vue";
import ScaleTransition from "@/components/transition/ScaleTransition.vue";
import TotalOffers from "@/components/KPI/TotalOffers.vue";
import TotalRepeaters from "@/components/KPI/TotalRepeaters.vue";
import TotalCLV from "@/components/KPI/TotalCLV.vue";
import ErrorBoundary from "@/components/ErrorBoundary.vue";
import type { WidgetData } from '@/types';

export default {
    name: "ImportantKeyPerformanceIndicators",
    components: { ErrorBoundary, TotalCLV, TotalRepeaters, TotalOffers, KPICard, Loading, ScaleTransition },
    data() {
        return {
            isLoading: true,
            widgetData: null as unknown as WidgetData,
        }
    },
    methods: {
        async fetchWidgetMetrics() {
            return await DashboardService.getWidgets();
        },
    },
    created() {
        this.isLoading = true;

        this.fetchWidgetMetrics().then(response => {
            this.widgetData = response.data;
        }).finally(() => {
            this.isLoading = false;
        })
    }
}
</script>
