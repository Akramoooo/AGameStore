<template>
    <div class="main-page">
        <MainBanner :games="heroGames" v-if="heroGames" />

        <Container>
            <GameList :games="saleGames" title="Распродажа">
                <template #content="{ game }">
                    <GameCard :game="game" class="col-2">
                        <template #action>
                            <BaseButton block>Купить</BaseButton>
                        </template>
                    </GameCard>
                </template>
            </GameList>
        </Container>

        <Container>
            <GameList :games="recommendGames" title="Рекоммендации для вас">
                <template #content="{ game }">
                    <GameBanner :game="game" class="col-4">
                        <template #action>
                            <BaseButton>Подробнее</BaseButton>
                        </template>
                    </GameBanner>
                </template>
            </GameList>
        </Container>
    </div>
</template>

<script setup lang="ts">
import { fetchGames, fetchHeroGames } from '~/entities/Game/api/game.api';
import type { Game } from '~/entities/Game/types/Game.type';
import GameBanner from '~/entities/Game/ui/GameBanner.vue';
import GameCard from '~/entities/Game/ui/GameCard.vue';
import BaseButton from '~/shared/ui/BaseButton/BaseButton.vue';
import Container from '~/shared/ui/Container.vue';
import MainBanner from '~/widgets/banners/ui/MainBanner.vue';
import GameList from '~/widgets/game/ui/GameList.vue';


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