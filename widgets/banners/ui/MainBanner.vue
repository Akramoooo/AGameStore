<template>
    <div class="main-banner__container">
        <Transition name="fade" mode="out-in">
            <Slider v-if="games && games.length > 0" :items="games" autoplay>
                <template #item="{ item, index }">
                    <BannerCard :item="item" :key="item.id">
                        <template #actions>
                            <BaseButton variant="pink-blue">Приобрести</BaseButton>
                        </template>
                    </BannerCard>
                </template>
            </Slider>
            <BannerSkeleton v-else />
        </Transition>

    </div>
</template>

<script setup lang="ts">
import Slider from '~/shared/ui/Slider/Slider.vue';
import BannerCard from '../../../entities/Banner/ui/BannerCard.vue';
import type { Game } from '~/entities/Game/types/Game.type';
import BaseButton from '~/shared/ui/BaseButton/BaseButton.vue';
import BannerSkeleton from './BannerSkeleton.vue';

interface Props {
    games: Game[] | null
}
const props = defineProps<Props>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>