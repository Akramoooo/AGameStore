<template>
    <div class="gamelist__container">
        <SectionHeader v-if="title" :title="title" :link-data="linkData" />
        <div class="grid__container">
            <slot name="content" v-for="game in games" :game="game" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Game } from '~/entities/Game/types/Game.type';
import SectionHeader from '~/shared/ui/SectionHeader.vue';
import GameListSkeleton from './Skeletons/GameListSkeleton.vue';

interface GameListProps {
    games: Game[] | null
    title?: string
    linkData?: Record<string, string>
}
const props = defineProps<GameListProps>()

const linkData = {
    title: "Посмотреть все",
    link: "#"
}


</script>

<style lang="scss" scoped>
.gamelist__container {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
}
</style>