<template>
    <div class="main-page">

        <MainBanner :games="heroGames" />

        <SalesWidget :games="saleGames" />

        <RecommendationsWidget :games="recommendGames" />

    </div>
</template>

<script setup lang="ts">
import { fetchGames, fetchHeroGames } from '~/entities/Game/api/game.api';
import type { Game } from '~/entities/Game/types/Game.type';
import MainBanner from '~/widgets/banners/ui/MainBanner.vue';
import RecommendationsWidget from '~/widgets/game/ui/RecommendationsWidget.vue';
import SalesWidget from '~/widgets/game/ui/SalesWidget.vue';

definePageMeta({
    layout: "user"
})

const games = ref<Game[] | null>(null);
const saleGames = computed(() => games.value?.slice(0, 6) || []);
const recommendGames = computed(() => games.value?.slice(6, 9) || []);
const heroGames = ref<Game[] | null>(null);

onMounted(async () => {
    const [all, heroes] = await Promise.all([
        fetchGames(10),
        fetchHeroGames()
    ]);

    games.value = all;
    heroGames.value = heroes;
});


</script>

<style scoped>
.main-page {
    display: flex;
    flex-direction: column;
    row-gap: 80px;
}
</style>