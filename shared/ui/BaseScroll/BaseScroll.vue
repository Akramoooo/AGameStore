<template>
    <div class="base-scroll__container">
        <slot name="content" />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.base-scroll__container {
    width: 100%;
    display: flex;
    gap: 12px;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 12px;
    flex-shrink: 0;
}

.base-scroll__container::-webkit-scrollbar {
    height: 4px;
}

.base-scroll__container::-webkit-scrollbar-track {
    background: rgba(98, 44, 207, 0.501);
    border-radius: 12px;
    margin-inline: 6px;

}

.base-scroll__container::-webkit-scrollbar-thumb {
    background: rgb(81, 19, 206);
    border-radius: 12px;
}
</style>