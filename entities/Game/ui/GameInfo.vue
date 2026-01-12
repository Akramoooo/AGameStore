<template>
    <div class="game-info__container">
        <NuxtLink :href="company.site" class="company" target="_black">{{ company.name }}</NuxtLink>
        <span class="p__middle">{{ desc }}</span>
        <GameTags :tags="tags" />
    </div>
</template>

<script setup lang="ts">
import Badge from '~/shared/ui/Badge.vue';
import type { Company } from '../types/Game.type';
import GameTags from './GameTags.vue';

interface GameInfoProps {
    company: Company;
    desc?: string;
    tags?: Array<string>;
}

const props = defineProps<GameInfoProps>();

</script>

<style scoped>
.game-info__container {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
}


.company {
    color: rgb(9, 166, 169);
    display: inline !important;
    width: auto;
}
</style>