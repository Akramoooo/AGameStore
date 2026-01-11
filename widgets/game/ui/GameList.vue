<template>
    <div class="gamelist__container">
        <SectionHeader title="Распродажа" :link-data="linkData" />
        <div class="grid__container ">
            <GameCard class="col-2" v-for="value in [1, 2, 3, 4, 5, 6]">
                <template #action>
                    <BaseButton block>Купить</BaseButton>
                </template>
            </GameCard>
        </div>

    </div>
</template>

<script setup>
import GameCard from '~/entities/Game/ui/GameCard.vue';
import BaseButton from '~/shared/ui/BaseButton/BaseButton.vue';
import SectionHeader from '~/shared/ui/SectionHeader.vue';


const linkData = {
    title: "Посмотреть все",
    link: "#"
}

</script>

<style lang="scss" scoped>
.gamelist__container {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
}
</style>