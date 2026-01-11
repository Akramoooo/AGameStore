<template>
    <div>
        <RegisterForm />
    </div>
</template>

<script setup lang="ts">
import RegisterForm from '~/features/auth-form/ui/RegisterForm.vue';

definePageMeta({
    // middleware: "auth"
});

</script>

<style scoped></style>