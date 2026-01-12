<template>
    <BaseSkeleton width="100%" height="350px" border-radius="12px" class="main-skeleton">
        <template #default>
            <BaseSkeleton width="100%" height="180px" border-radius="12px" class="content"></BaseSkeleton>
            <BaseSkeleton width="100%" height="40px" border-radius="12px" class="content"></BaseSkeleton>
            <BaseSkeleton width="100%" height="40px" border-radius="12px" class="content"></BaseSkeleton>
        </template>
    </BaseSkeleton>
</template>

<script setup lang="ts">
import BaseSkeleton from '~/shared/ui/BaseSkeleton/BaseSkeleton.vue';


</script>

<style scoped lang="scss">
.main-skeleton {
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>