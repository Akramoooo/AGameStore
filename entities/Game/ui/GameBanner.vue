<template>
    <div class="game-banner__container">
        <SmartImage :src="game.preview" class="image" />
        <div class="content">
            <h4>{{ game?.name }}</h4>
            <GameInfo :company="game.company" :desc="game.desc" :tags="game?.tags" />
            <BaseScroll>
                <template #content>
                    <template v-if="game.images && game.images.length > 0">
                        <SmartImage v-for="(image, index) in game.images" :key="index" :src="image"
                            class="scroll-image" />
                    </template>

                    <template v-else>
                        <SmartImage v-for="i in 4" :key="i" class="scroll-image placeholder" />
                    </template>
                </template>
            </BaseScroll>
            <slot name="action" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SmartImage from '~/shared/ui/SmartImage.vue';
import type { GameCardProps } from '../types/Game.type';
import GameInfo from './GameInfo.vue';
import BaseScroll from '~/shared/ui/BaseScroll/BaseScroll.vue';

const props = defineProps<GameCardProps>()
</script>

<style lang="scss" scoped>
.game-banner__container {
    display: flex;
    gap: 12px;
    width: 100%;
}

.image {
    max-width: 270px;
    width: 100%;
    min-height: 400px;
    border-radius: 12px;
}


.scroll-image {
    width: 200px;
    height: 120px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 8px;
}

.content {
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    row-gap: 18px;
}
</style>