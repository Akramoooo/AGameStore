<template>
    <Container>
        <Transition name="fade" mode="out-in">
            <GameList :games="games" title="Распродажа" v-if="games && games.length > 0">
                <template #content="{ game }">
                    <GameCard :game="game" class="col-2">
                        <template #action>
                            <BaseButton block>Купить</BaseButton>
                        </template>
                    </GameCard>
                </template>
            </GameList>
            <SalesWidgetSkeleton v-else />
        </Transition>
    </Container>
</template>

<script setup lang="ts">
import type { Game } from '~/entities/Game/types/Game.type';
import GameCard from '~/entities/Game/ui/GameCard.vue';
import GameList from '~/entities/Game/ui/GameList.vue';
import BaseButton from '~/shared/ui/BaseButton/BaseButton.vue';
import Container from '~/shared/ui/Container.vue';
import SalesWidgetSkeleton from './Skeletons/SalesWidgetSkeleton.vue';

interface Props {
    games: Game[]
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>