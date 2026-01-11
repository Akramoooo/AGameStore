<template>
    <div class="slider__container">
        <SliderArrow position="left" class="arrow left" @click="handlePrev" />

        <Transition name="slide" mode="out-in">
            <div :key="currentIndex" class="slider__slide">
                <slot name="item" :item="items?.[currentIndex]" :index="currentIndex" />
            </div>
        </Transition>
        <SliderArrow position="right" class="arrow right" @click="handleNext" />
    </div>
</template>

<script setup lang="ts">
import { useSlider } from '~/shared/lib/composables/useSlider';
import SliderArrow from './SliderArrow.vue';

interface SliderProps<T> {
    items: T[] | null,
    repeatable?: boolean,
    autoplay?: boolean,
    stepDistance?: number
}
const props = withDefaults(defineProps<SliderProps<any>>(), {
    autoplay: false,
    repeatable: true,
    stepDistance: 1,
})

const itemsCount = computed(() => props.items?.length || 0);

const { currentIndex, handleNext, handlePrev, startAutoplay, stopAutoplay } = useSlider(itemsCount, props.stepDistance, props.repeatable);


onMounted(() => {
    if (props.autoplay) startAutoplay();
});

watch(() => props.autoplay, (isAuto) => {
    if (!import.meta.client) return;
    isAuto ? startAutoplay() : stopAutoplay();
});

onBeforeUnmount(() => stopAutoplay())
</script>

<style lang="scss" scoped>
.slider__container {
    position: relative;
    overflow: hidden;
}

.arrow {
    position: absolute;
    z-index: 1000;
    transform: translateY(-50%);

    &.left {
        top: 50%;
        left: 50px;
    }

    &.right {
        top: 50%;
        right: 50px;
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-to {
    transform: translateX(0);
    opacity: 1;
}
</style>