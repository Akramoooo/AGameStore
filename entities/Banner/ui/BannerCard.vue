<template>
    <div class="banner-card__container">
        <SmartImage :src="preview" class="image" />
        <div class="content">
            <h2>{{ item?.name }}</h2>
            <GameInfo />
            <h2>{{ item?.price }} $</h2>
            <slot name="actions" />
        </div>
        <div class="overlay"></div>
    </div>
</template>

<script setup lang="ts">
import type { Game } from '~/entities/Game/types/Game.type';
import GameInfo from '~/entities/Game/ui/GameInfo.vue';
import SmartImage from '~/shared/ui/SmartImage.vue';

interface Props {
    item: Game
}

const config = useRuntimeConfig()
const props = defineProps<Props>();

const preview = computed(() => config.public.baseImageUrl + 'media/games/' + props.item?.preview)
</script>

<style scoped lang="scss">
.banner-card__container {
    z-index: 1;
    position: relative;
    height: 500px;

}

.image {
    width: 100%;
    height: 100%;
}

.content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    position: absolute;
    z-index: 11;
    top: 50%;
    right: 300px;
    transform: translateY(-50%);
    max-width: 550px;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: linear-gradient(90deg,
            rgba(28, 14, 56, 0) 0%,
            rgba(28, 14, 56, 0.3) 35%,
            rgba(28, 14, 56, 0.75) 65%,
            rgba(28, 14, 56, 1) 100%);


}
</style>