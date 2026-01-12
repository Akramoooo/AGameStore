<template>
    <div v-if="tags && tags.length" class="tags">
        <Badge v-for="tag in tags" :key="tag" :title="tag" border-radius="lg" />
    </div>
</template>

<script setup lang="ts">

interface GameTagsProps {
    tags?: string[];
}
const props = withDefaults(defineProps<GameTagsProps>(), {
    tags: () => []
});

</script>

<style lang="scss" scoped>
.tags {
    display: flex;
    gap: 12px;
}
</style>