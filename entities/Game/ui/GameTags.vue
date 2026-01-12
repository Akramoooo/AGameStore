<template>
    <div v-if="tags && tags.length" class="tags">
        <Badge v-for="tag in tags" :key="tag" :title="tag" border-radius="lg" />
    </div>
</template>

<script setup lang="ts">
import Badge from '~/shared/ui/Badge.vue';


interface GameTagsProps {
    tags?: string[] | null;
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