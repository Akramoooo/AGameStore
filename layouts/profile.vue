<template>
    <div>
        <Container>
            <Logo />
        </Container>
        <main>
            <slot />
        </main>
    </div>

</template>

<script setup lang="ts">
import Container from '~/shared/ui/Container.vue';
import Logo from '~/shared/ui/Logo/Logo.vue';

</script>

<style lang="scss" scoped></style>