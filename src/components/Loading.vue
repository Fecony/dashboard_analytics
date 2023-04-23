<template>
    <div class="min-h-[8.5rem] flex flex-col border rounded-xl col-span-full p-4" v-if="loading">
        <div class="flex flex-auto flex-col justify-center items-center">
            <div class="flex justify-center">
                <IconLoader2 class="animate-spin text-gray-500"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { IconLoader2 } from '@tabler/icons-vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Loading',
    components: {
        IconLoader2
    },
    props: {
        loading: Boolean
    }
});
</script>
