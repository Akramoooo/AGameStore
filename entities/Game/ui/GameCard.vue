<template>
    <Transition name="fade" mode="out-in">
        <div class="game-card__container form-container " v-if="game">
            <Badge title="-23%" class="badge" />
            <div class="image-box">
                <SmartImage class="image" :src="game.preview" path="media/games" />
                <div class="blur-field">
                    <p class="p__big current-price">{{ game.price }} $</p>
                    <p class="p__middle old-price">{{ game.price }} $</p>
                </div>
            </div>
            <div class="description-box">
                <h5 class="p__big">{{ game.name }}</h5>
                <p class="p__middle company">{{ game.company.name }}</p>
                <div class="tags">
                    <NuxtLink href="#" v-for="tag in game.tags">
                        <p class="p__middle">{{ tag }}</p>
                    </NuxtLink>
                </div>

                <slot name="action"></slot>
            </div>
        </div>

        <GameCardSkeleton v-else />
    </Transition>

</template>

<script setup lang="ts">
import Badge from '~/shared/ui/Badge.vue';
import SmartImage from '~/shared/ui/SmartImage.vue';
import type { Game, GameCardProps } from '../types/Game.type';
import GameCardSkeleton from './Skeletons/GameCardSkeleton.vue';

const props = defineProps<GameCardProps>()


</script>

<style lang="scss" scoped>
.game-card__container {
    row-gap: 16px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 6px;
    width: 100%;
    background: rgba(22, 5, 58, 0.57);
    transition: transform 0.3s ease;
    will-change: transform;

    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }

}

.badge {
    position: absolute;
    top: -15px;
    right: 5px;
}

.image-box {
    user-select: none;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    height: 180px;

    .blur-field {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        width: 100%;
        min-height: 50px;
        position: absolute;
        bottom: 0px;
        left: 0;
        background: rgba(35, 16, 72, 0.705);
        backdrop-filter: blur(4px);
    }
}

.description-box {
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    .company {
        color: rgba(80, 183, 217, 0.692)
    }

    .tags {
        display: flex;
        gap: 6px;
        align-items: center;
        text-decoration: underline;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>