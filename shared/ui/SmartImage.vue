<template>
    <NuxtImg :src="isError || !src ? fallback : src" loading="lazy" class="smart-image" :alt="alt"
        @error="handleError" />
</template>

<script lang="ts" setup>
interface SmartImageProps {
    src?: string;
    alt?: string;
    fallback?: string;
}

const props = withDefaults(defineProps<SmartImageProps>(), {
    src: '',
    alt: "Изображение",
    fallback: "../public/images/default-image.png"
});

const isError = ref(false);

const handleError = () => {
    isError.value = true
}

watch(() => props.src, () => {
    isError.value = false;
})
</script>

<style lang="scss" scoped>
.smart-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>