<template>
    <div class="main-page">
        <MainBanner />

        <Container>
            <GameList />
        </Container>

    </div>
</template>

<script setup lang="ts">
import Container from '~/shared/ui/Container.vue';
import MainBanner from '~/widgets/banners/ui/MainBanner.vue';
import GameList from '~/widgets/game/ui/GameList.vue';


definePageMeta({
    layout: "user"
})


const supabase = useSupabaseClient();
const instruments = ref([]);

async function getInstruments() {
    const { data, error } = await supabase.from('users_data').select();
    if (data) instruments.value = data;
}

onMounted(() => {
    getInstruments()
})


</script>

<style scoped>
.main-page {
    display: flex;
    flex-direction: column;
    row-gap: 80px;
}
</style>