<template>
    <div class="header-search__container">
        <BaseInput v-model="search" type="search" :icon="markRaw(IconSearch)" color="unset" placeholder="search"
            size="sm" />
    </div>
</template>

<script setup>
import IconSearch from '~/icons/base/IconSearch.vue';
import BaseInput from '~/shared/ui/BaseInput/BaseInput.vue';

const search = ref("");

</script>

<style lang="scss" scoped>
.header-search__container {
    width: 100%;
    flex-grow: 1
}
</style>