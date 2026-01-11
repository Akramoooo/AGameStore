<template>
    <div class="base-input__container" :class="{ 'is-disabled': disabled }">
        <label v-if="label">
            <p class="p__big">{{ label }}</p>
        </label>
        <div class="input__container" :class="size">
            <component :is="icon" v-if="icon && iconPosition === 'left'" class="icon left" />
            <input :type="type && type === 'password' ? inputType : type" :value="modelValue" :disabled="disabled"
                :placeholder="placeholder" @input="onInput" :style="{ 'background-color': color }">

            <component v-if="type === 'password'" :is="passIcon" class="icon right" @click="togglePass" />
            <component :is="icon" v-if="icon && iconPosition === 'right' && type !== 'password'" class="icon right" />
        </div>
        <p class="p__middle error-text" v-if="error">{{ error }}</p>

    </div>
</template>

<script lang="ts" setup>
import { usePasswordToggle } from './model/usePasswordToggle';
import type { BaseInputEmits, BaseInputProps } from './types';

const emit = defineEmits<BaseInputEmits>();

const props = withDefaults(defineProps<BaseInputProps>(), {
    type: "text",
    iconPosition: "right",
    color: "unset",
    disabled: false,
    label: "",
    size: "md",
    error: ""
})
const { passIcon, inputType, togglePass } = usePasswordToggle();

const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};

</script>

<style lang="scss" scoped>
.base-input__container {
    display: flex;
    flex-direction: column;
    row-gap: 6px;

    .input__container {
        width: 100%;
        display: flex;
        align-items: center;
        border: 2px solid transparent;
        border-radius: 18px;
        background:
            linear-gradient(rgb(28, 14, 56), rgb(28, 14, 56)) padding-box,
            linear-gradient(90deg, #d000ff25, #c408ee4f, #47a9ffcc) border-box;

    }

    input {
        height: 100%;
        flex: 1;
        width: 100%;
        padding-left: 16px;
        color: white;
        order: none;
        font-size: 16px;
        border-radius: 14px;
        background: transparent
    }

    .md {
        height: 50px;
    }

    .sm {
        height: 40px;
    }

    input[type="search"]::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }

    .icon {
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        &.left {
            margin-inline: 4px;
        }

        &.right {
            margin-inline: 8px;
        }
    }
}
</style>