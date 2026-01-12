<template>
    <div class="base-skeleton__container" :style="style" :class="{ 'is-animated': animated }">
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { BaseSkeletonProps } from './types';


const props = withDefaults(defineProps<BaseSkeletonProps>(), {
    width: "100%",
    height: "20px",
    borderRadius: "4px",
    animated: true
});

const style = computed(() => ({
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius
}))
</script>

<style scoped>
.base-skeleton__container {
    background-color: rgb(45, 28, 78);
    position: relative;
    overflow: hidden;
}

.is-animated::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0) 100%);
    animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(100%);
    }
}
</style>