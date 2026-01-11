<template>
    <div class="game-info__container">
        <NuxtLink href="#" class="company">Mojiken</NuxtLink>
        <span class="p__big">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui autem, unde
            pariatur ducimus
            distinctio soluta cumque architecto quis aliquid saepe doloribus, nihil nostrum aliquam! Ullam, labore
            beatae unde, deserunt molestiae sequi quae saepe impedit nam inventore autem velit modi quaerat tenetur eum
            suscipit, quos numquam ratione magnam fugiat. Consequatur, tempora.</span>
        <div class="tags">
            <Badge title="Horror" border-radius="lg" />
            <Badge title="Horror" border-radius="lg" />
            <Badge title="Horror" border-radius="lg" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Badge from '~/shared/ui/Badge.vue';


</script>

<style scoped>
.game-info__container {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
}

.tags {
    display: flex;
    gap: 12px;
}

.company {
    color: rgb(9, 166, 169);
    display: inline !important;
    width: auto;
}
</style>