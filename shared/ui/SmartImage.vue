<template>
    <NuxtImg :src="image" loading="lazy" class="smart-image" :alt="alt" @error="handleError" :format="format"
        :quality="quality" />
</template>

<script lang="ts" setup>
interface SmartImageProps {
    src?: string;
    alt?: string;
    path?: string;
    fallback?: string;
    format?: "webp" | "avif" | "png" | "jpeg" | "jpg";
    quality?: number
}

const props = withDefaults(defineProps<SmartImageProps>(), {
    src: '',
    alt: "Изображение",
    fallback: "../public/images/default-image.png",
    path: "media/games",
    format: "webp",
    quality: 80
});

const config = useRuntimeConfig();
const imageBaseUrl = config.public.baseImageUrl

const image = computed(() => {
    if (isError.value || !props.src) return props.fallback

    return `${imageBaseUrl}/${props.path}/${props.src}`
})

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