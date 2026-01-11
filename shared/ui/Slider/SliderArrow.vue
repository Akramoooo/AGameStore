<template>
    <div class="slider-arrow__container">
        <IconArrow class="arrow-btn" :class="position" />
    </div>
</template>

<script lang="ts" setup>
import IconArrow from '~/icons/arrows/IconArrow.vue';

interface SliderArrowProps {
    position?: 'left' | 'right'
}

const props = withDefaults(defineProps<SliderArrowProps>(), {
    position: 'left'
});

</script>

<style lang="scss" scoped>
.arrow-btn {
    cursor: pointer;
    width: 60px;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.645);
    background-color: rgba(54, 3, 88, 0.559);
    border-radius: 50%;
    padding: 20px;
    transition: 0.3s;

    &:hover {
        background-color: rgba(185, 91, 248, 0.216);
        transform: scale(1.05);
        transition: 0.3s;
    }

    &.left {
        rotate: 90deg;
    }

    &.right {
        rotate: -90deg;
    }
}
</style>