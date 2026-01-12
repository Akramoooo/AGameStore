<template>
    <div class="game-banner__container"
        :style="{ backgroundImage: `url(${config.public.baseImageUrl}/media/games/${game.preview})` }">
        <!-- <SmartImage :src="game.preview" class="image" /> -->
        <div class="content">
            <h3>{{ game?.name }}</h3>
            <GameInfo :company="game.company" :desc="game.desc" :tags="game?.tags" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SmartImage from '~/shared/ui/SmartImage.vue';
import type { GameCardProps } from '../types/Game.type';
import GameInfo from './GameInfo.vue';

const props = defineProps<GameCardProps>()

const config = useRuntimeConfig()
</script>

<style lang="scss" scoped>
.game-banner__container {}
</style>