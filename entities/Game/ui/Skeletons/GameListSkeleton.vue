<template>
    <div class="game-list__skeleton">
        <div class="header flex__box">
            <BaseSkeleton width="200px" height="40px" />
            <BaseSkeleton width="140px" height="20px" />
        </div>

        <div class="grid__container">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseSkeleton from '~/shared/ui/BaseSkeleton/BaseSkeleton.vue';


</script>

<style scoped>
.game-list__skeleton {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
}
</style>