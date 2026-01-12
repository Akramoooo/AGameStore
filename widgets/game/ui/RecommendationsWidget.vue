<template>
    <Container>
        <GameList :games="games" title="Рекоммендации для вас">
            <template #content="{ game }">
                <GameBanner :game="game" class="col-4">
                    <template #action>
                        <BaseButton>Подробнее</BaseButton>
                    </template>
                </GameBanner>
            </template>
        </GameList>
    </Container>
</template>

<script setup lang="ts">
import type { Game } from '~/entities/Game/types/Game.type';
import GameBanner from '~/entities/Game/ui/GameBanner.vue';
import GameList from '~/entities/Game/ui/GameList.vue';
import BaseButton from '~/shared/ui/BaseButton/BaseButton.vue';
import Container from '~/shared/ui/Container.vue';

interface Props {
    games: Game[]
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss"></style>