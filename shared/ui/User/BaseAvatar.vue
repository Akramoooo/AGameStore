<template>
    <div class="avatar__container">
        <NuxtImg :src="src" loading="lazy" class="image" :style="{ 'width': selectedSize, 'height': selectedSize }" />
    </div>
</template>

<script lang="ts" setup>
interface UserAvatarProps {
    src?: string;
    size?: "sm" | "md" | "lg",
}

const props = withDefaults(defineProps<UserAvatarProps>(), {
    src: "../public/images/user-default.png",
    size: "md",
});

const selectedSize = computed(() => {
    switch (props.size) {
        case "sm":
            return '40px'
        case "lg":
            return '120px'
        default:
            return '80px'
    }
})
</script>

<style lang="scss" scoped>
.avatar__container {
    border: 2px solid transparent;
    border-radius: 50%;
    background:
        linear-gradient(rgb(28, 14, 56), rgb(28, 14, 56)) padding-box,
        linear-gradient(90deg, #d000ff25, #c408ee4f, #47a9ffcc) border-box;
}

.image {
    cursor: pointer;
    border-radius: 50%;
}
</style>