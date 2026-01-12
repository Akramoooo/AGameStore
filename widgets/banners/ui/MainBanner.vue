<template>
    <div class="main-banner__container">
        <Slider :items="games" autoplay>
            <template #item="{ item, index }">
                <BannerCard :item="item" :key="item.id">
                    <template #actions>
                        <BaseButton variant="pink-blue">Приобрести</BaseButton>
                    </template>
                </BannerCard>
            </template>
        </Slider>
    </div>
</template>

<script setup lang="ts">
import Slider from '~/shared/ui/Slider/Slider.vue';
import BannerCard from '../../../entities/Banner/ui/BannerCard.vue';
import type { Game } from '~/entities/Game/types/Game.type';
import BaseButton from '~/shared/ui/BaseButton/BaseButton.vue';

interface Props {
    games: Game[] 
}
const props = defineProps<Props>()
</script>

<style scoped></style>