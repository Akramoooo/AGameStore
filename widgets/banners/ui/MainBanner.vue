<template>
    <div class="main-banner__container">

        <Slider :items="items" autoplay v-if="items">
            <template #item="{ item, index }">
                <BannerCard :item="item" :key="item?.id">
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
import { fetchGames } from '~/entities/Game/api/game.api';
import type { Game } from '~/entities/Game/types/Game.type';
import BaseButton from '~/shared/ui/BaseButton/BaseButton.vue';

const items = ref<Game[] | null>(null);

onMounted(async () => {
    try {
        items.value = await fetchGames();
    } catch (e) {
        console.error("Ошибка при загрузке игр:", e);
    }
});
</script>

<style scoped></style>