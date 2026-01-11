<template>
    <div>
        <Container>
            <UserHeader />
        </Container>
        <main>
            <slot />
        </main>

        <UserFooter />
    </div>
</template>

<script setup lang="ts">
import Container from '~/shared/ui/Container.vue';
import UserFooter from '~/widgets/footer/ui/UserFooter.vue';
import UserHeader from '~/widgets/header/ui/UserHeader.vue';



</script>

<style lang="scss" scoped></style>