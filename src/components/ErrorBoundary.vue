<template>
    <div class="bg-red-50 border border-red-200 rounded-md p-4" role="alert">
        <div class="flex">
            <div class="flex-shrink-0">
                <IconAlertTriangleFilled :size="16" class="text-red-600 mt-1"/>
            </div>

            <div class="ml-4">
                <h3 class="text-gray-800 font-semibold">
                    Something went wrong
                </h3>
                <div class="mt-2 text-sm text-gray-600">
                    We couldn't fetch data, please try again or contact IT
                </div>
                <div class="mt-4">
                    <div class="flex space-x-3">
                        <button type="button"
                                @click="handleRetry"
                                class="inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-medium text-red-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                            Retry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IconAlertTriangleFilled } from '@tabler/icons-vue';

export default defineComponent({
    name: 'ErrorBoundary',
    components: {
        IconAlertTriangleFilled
    },
    emits: {
        retry: () => true,
    },
    methods: {
        handleRetry() {
            this.$emit('retry')
        }
    }
});
</script>

<style scoped>

</style>