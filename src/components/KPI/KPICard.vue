<template>
    <article class="border border-gray-200 rounded bg-white p-6 cursor-default">
        <p class="text-sm text-gray-600 mb-2">{{ title }}</p>

        <slot></slot>
    </article>
</template>

<script lang="ts">

export default {
    name: 'KPICard',
    props: {
        title: String,
    }
};
</script>