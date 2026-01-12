<template>
    <div class="sales-widget__skeleton">
        <GameListSkeleton>
            <template #default>
                <GameCardSkeleton class="col-2" v-for="item in 6" :key="item" />
            </template>
        </GameListSkeleton>
    </div>
</template>

<script setup lang="ts">
import GameCardSkeleton from '~/entities/Game/ui/Skeletons/GameCardSkeleton.vue';
import GameListSkeleton from '~/entities/Game/ui/Skeletons/GameListSkeleton.vue';


</script>

<style scoped>
</style>