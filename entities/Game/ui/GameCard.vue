<template>
    <div class="game-card__container form-container">
        <Badge title="-23%" class="badge" />
        <div class="image-box">
            <SmartImage class="image" src="../public/images/dreadout.jpeg" />
            <div class="blur-field">
                <p class="p__big current-price">Rp 108.999</p>
                <p class="p__middle old-price">Rp 159.999</p>
            </div>
        </div>
        <div class="description-box">
            <h4>DreadOut 2</h4>
            <p class="p__middle company">Digital Happiness</p>
            <div class="tags">
                <NuxtLink href="#">
                    <p class="p__middle">Horror</p>
                </NuxtLink>
                <NuxtLink href="#">
                    <p class="p__middle">Actions</p>
                </NuxtLink>
                <NuxtLink href="#">
                    <p class="p__middle">Survival</p>
                </NuxtLink>
            </div>
        </div>

        <slot name="action"></slot>

    </div>
</template>

<script setup lang="ts">
import Badge from '~/shared/ui/Badge.vue';
import SmartImage from '~/shared/ui/SmartImage.vue';


</script>

<style lang="scss" scoped>
.game-card__container {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    position: relative;
    max-width: 270px;
    padding: 6px;
    width: 100%;
    background: rgba(22, 5, 58, 0.57);
    transition: transform 0.3s ease;
    will-change: transform;

    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
}

.badge {
    position: absolute;
    top: -15px;
    right: 5px;
}

.image-box {
    user-select: none;
    position: relative;
    border-radius: 12px;
    overflow: hidden;

    .blur-field {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        width: 100%;
        min-height: 50px;
        position: absolute;
        bottom: 0px;
        left: 0;
        background: rgba(35, 16, 72, 0.705);
        backdrop-filter: blur(4px);
    }
}

.description-box {
    display: flex;
    flex-direction: column;
    row-gap: 6px;

    .company {
        color: rgba(80, 183, 217, 0.692)
    }

    .tags {
        display: flex;
        gap: 6px;
        align-items: center;
        text-decoration: underline;
    }
}
</style>