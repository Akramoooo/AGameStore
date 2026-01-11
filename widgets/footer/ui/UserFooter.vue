<template>
    <div class="user-footer__container">
        <Logo size="md" />
        <UserFooterLinks />
        <div>ddd</div>
    </div>
</template>

<script setup lang="ts">
import Logo from '~/shared/ui/Logo/Logo.vue';
import UserFooterLinks from './UserFooterLinks.vue';


</script>

<style lang="scss" scoped>
.user-footer__container {
    margin-top: 50px;
    padding: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #1a1635;
}
</style>