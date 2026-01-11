<template>
    <NuxtLink href="/">
        <h2 class="logo-text" :class="size">{{ text }}</h2>
    </NuxtLink>
</template>

<script setup lang="ts">

const props = defineProps({
    text: { String, default: "AGameStore" },
    size: {
        type: String,
        default: "lg"
    }
})
</script>

<style lang="scss" scoped>
.logo-text {
    font-family: 'Urbanist', sans-serif;
    font-weight: 900;

    background: linear-gradient(90deg, #d000ff 0%, #8e54e9 50%, #47aaff 100%);

    -webkit-background-clip: text;
    background-clip: text;

    -webkit-text-fill-color: transparent;
    color: transparent;

    display: inline-block;

    background-size: 200% auto;
    animation: shine 3s linear infinite;


    &.sm {
        font-size: 20px;
    }

    &.md {
        font-size: 24px;
    }


    &.lg {
        font-size: 32px;
    }
}

@keyframes shine {
    to {
        background-position: 200% center;
    }
}
</style>