<template>
    <div class="dropdown__container" ref="dropdownRef">
        <div class="label" @click="toggleClick">
            <p class="p__big">{{ text }}</p>
            <IconArrow :class="{ 'is-active': isOpen }" class="arrow-icon" />
        </div>
        <transition name="fade">
            <div class="menu__container" v-if="isOpen">
                <div class="item" v-for="category in categories">
                    <NuxtLink :href="`search/category/${category.key}`">
                        <p class="p__big">{{ category.name }}</p>
                    </NuxtLink>
                </div>
            </div>
        </transition>

    </div>
</template>

<script setup lang="ts">
import IconArrow from '~/icons/arrows/IconArrow.vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    text: { type: String, default: "Каталог" },
    modelValue: { type: Boolean, required: true }
});

const isOpen = ref(props.modelValue || false);

const dropdownRef = ref<HTMLElement | null>(null);

const handleClickOutside = (event: Event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
}
const toggleClick = () => {
    const newState = !isOpen.value;
    isOpen.value = newState; 
    emit('update:modelValue', newState); 
}

const categories = [
    { id: 1, name: 'Аркады', key: 'arcade' },
    { id: 2, name: 'Экшен', key: 'action' },
    { id: 3, name: 'Приключения', key: 'adventure' },
    { id: 4, name: 'Стратегии', key: 'strategy' },
    { id: 5, name: 'Ролевые (RPG)', key: 'rpg' },
    { id: 6, name: 'Шутеры', key: 'shooter' },
    { id: 7, name: 'Симуляторы', key: 'simulation' },
    { id: 8, name: 'Спорт', key: 'sports' }
];

watch(() => props.modelValue, (newVal) => {
    isOpen.value = newVal;
});

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
})

</script>


<style scoped lang="scss">
.dropdown-container {
    position: relative;
}

.label {
    user-select: none;
    display: flex;
    gap: 6px;
    align-items: center;
    cursor: pointer;
}

.arrow-icon {
    display: inline-block;
    transition: transform 0.3s ease;

    &.is-active {
        transform: rotate(180deg);
    }
}

.menu__container {
    z-index: 10;
    position: absolute;
    background-color: rgb(53, 2, 156);
    border-radius: 8px;
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;


    .item {
        cursor: pointer;
        border-radius: 6px;
        padding: 2px 4px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: rgb(84, 20, 212);
            transition: background-color 0.3s ease;
            transform: scale(1.05);
        }
    }

}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>