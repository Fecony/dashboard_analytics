<template>
    <Transition
            enter-active-class="duration-300 ease-out"
            enter-from-class="transform scale-100"
            enter-to-class="scale-105"
            leave-active-class="duration-200 ease-in"
            leave-from-class="scale-100"
            leave-to-class="transform scale-105"
    >
        <slot></slot>
    </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
