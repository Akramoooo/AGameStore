<template>
    <BaseSkeleton width="100%" height="500px" class="main-skeleton">
        <template #default>
            <BaseSkeleton width="550px" height="300px" border-radius="12px" class="content"></BaseSkeleton>
        </template>
    </BaseSkeleton>
</template>

<script setup lang="ts">
import BaseSkeleton from '~/shared/ui/BaseSkeleton/BaseSkeleton.vue';


</script>

<style scoped lang="scss">
.main-skeleton {
    position: relative;

    .content {
        position: absolute;
        top: 50%;
        right: 300px;
        transform: translateY(-50%);
    }
}
</style>