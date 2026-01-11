<template>
    <p class="p__big p__badge " :class="borderRadius" :style="{ 'background': background }">{{
        title
        }}
    </p>
</template>

<script setup lang="ts">
interface BadgeProps {
    title: string,
    background?: string;
    borderRadius?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<BadgeProps>(), {
    background: "#7632ec",
    borderRadius: "sm",
});

</script>

<style lang="scss" scoped>
@import '~/scss/variables.scss';

.p__badge {
    z-index: 1;
    padding: 4px 10px;

    &.sm {
        border-radius: $radius-sm;
    }

    &.md {
        border-radius: $radius-md;
    }

    &.lg {
        border-radius: $radius-lg;
    }
}
</style>