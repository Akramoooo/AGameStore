<template>
    <div>
        <h2>Страница профиля</h2>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "profile",
    middleware: "auth"
})
</script>

<style scoped></style>