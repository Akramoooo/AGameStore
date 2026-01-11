<template>
    <div class="section-header">
        <h2>{{ title }}</h2>
        <NuxtLink v-if="linkData" :href="linkData?.link" class="link">
            <p class="p__big">{{ linkData?.title }}</p>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
interface SectionHeaderProps {
    title?: string;
    linkData?: Record<string, string>
}

const props = withDefaults(defineProps<SectionHeaderProps>(), {
    title: "Распродажа"
});
</script>

<style lang="scss" scoped>
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 16px;
    margin-inline: 0;

    .link {
        text-decoration: underline;
    }
}
</style>