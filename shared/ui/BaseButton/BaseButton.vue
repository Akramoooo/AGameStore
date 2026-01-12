<template>
    <div class="base-button__container">
        <button class="btn text__bold" :class="[`btn-${variant}`, { 'block': block }]" :disabled="disabled"
            @click="$emit('click', $event)">
            <slot />
        </button>
    </div>
</template>

<script lang="ts" setup>
import type { BaseButtonProps } from './types';

defineEmits<{
    (e: 'click', event: MouseEvent): void
}>()

const props = withDefaults(defineProps<BaseButtonProps>(), {
    variant: "purple-blue",
    block: false,
    disabled: false
})


</script>

<style lang="scss" scoped>
button {
    height: 50px;
}

.block {
    width: 100%;
}

.btn {
    color: white;
    font-size: 18px;
    padding: 16px 48px;
    border-radius: 8px;

    &:disabled {
        opacity: 0.8; // Делаем бледнее
        cursor: not-allowed; // Меняем курсор на "запрещено"
        pointer-events: none; // Отключаем любые события (hover, click)
    }
}

.btn-purple-blue,
.btn-pink-blue {
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.btn-purple-blue::before,
.btn-pink-blue::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
}


// BTN PURPLE-BLUE
.btn-purple-blue {
    background: linear-gradient(90deg, #380464 0%, #68C1F9 100%);
}

.btn-purple-blue::before {
    background: linear-gradient(90deg, #57069a 0%, #74c5f7 100%);
}

.btn-purple-blue:hover::before {
    opacity: 1;
}

// BTN PINK-BLUE
.btn-pink-blue {
    background: linear-gradient(90deg, #D946EF 0%, #60A5FA 100%);
}

.btn-pink-blue::before {
    background: linear-gradient(90deg, #e05bf4 0%, #6faaf2 100%);
}

.btn-pink-blue:hover::before {
    opacity: 1;
}
</style>