<template>
    <KPICard title="Total offers">
        <div class="flex space-x-2 items-center">
            <IconFileInvoice/>
            <p class="text-2xl font-medium text-gray-900">{{ totalOffers }}</p>
        </div>
    </KPICard>
</template>

<script lang="ts">
import KPICard from "@/components/KPI/KPICard.vue";
import { IconFileInvoice } from '@tabler/icons-vue'
import ErrorBoundary from "@/components/ErrorBoundary.vue";

export default {
    name: "TotalOffers",
    components: { ErrorBoundary, KPICard, IconFileInvoice },
    props: {
        totalOffers: Number,
    }
}
</script>
