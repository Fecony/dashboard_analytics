<script lang="ts">
import { IconGraph } from '@tabler/icons-vue';

import { defineComponent } from 'vue';
import ImportantKeyPerformanceIndicators from '@/components/ImportantKeyPerformanceIndicators.vue';
import AggregateStatistics from '@/components/AggregateStatistics.vue';
import DailyTrending from '@/components/DailyTrending.vue';

export default defineComponent({
    name: 'ClientDashboard',
    components: { DailyTrending, AggregateStatistics, ImportantKeyPerformanceIndicators, IconGraph },
});
</script>

<template>
    <div class="mx-auto max-w-4xl px-4 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'">
        <h2 class="text-3xl flex items-center font-bold sm:text-4xl space-x-2 text-gray-900">
            <IconGraph class="inline-block" :size="36"/>
            <span>Dashboard</span>
        </h2>

        <section class="mt-2 grid gap-2 grid-cols-1 md:grid-cols-3 border rounded border-gray-100 p-4">
            <ImportantKeyPerformanceIndicators/>
            <AggregateStatistics/>
            <DailyTrending/>
        </section>
    </div>
</template>
