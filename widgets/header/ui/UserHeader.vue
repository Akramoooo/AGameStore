<template>
    <div class="user-header__container">
        <div class="left-side">
            <Logo />

            <div class="sections">
                <Dropdown v-model="isCatalogOpen" />

                <NuxtLink v-for="section in sections" class="link">
                    <p class="p__big">{{ section.name }}</p>
                </NuxtLink>
            </div>
        </div>

        <div class="right-side">
            <HeaderSearch />
            <BaseAvatar size="sm" />
            <!-- <IconSignIn /> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import Dropdown from '~/shared/ui/Dropdown.vue';
import Logo from '~/shared/ui/Logo/Logo.vue';
import HeaderSearch from './HeaderSearch.vue';
import BaseAvatar from '~/shared/ui/User/BaseAvatar.vue';
import IconSignIn from '~/icons/base/IconSignIn.vue';


const isCatalogOpen = ref(false);

const sections = [
    { id: 1, name: 'Мои игры', key: 'my-games' },
    { id: 2, name: 'Новости', key: 'news' },
    { id: 3, name: 'О нас', key: 'about-us' },

];
</script>

<style lang="scss" scoped>
.user-header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}

.left-side {
    display: flex;
    align-items: center;
    gap: 48px;

    .sections {
        display: flex;
        gap: 32px;

        .link {
            position: relative;
            cursor: pointer;

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: rgb(84, 20, 212);

                transform: scaleX(0);

                transform-origin: left;
                transition: transform 0.3s ease;
            }

            &:hover {
                &::after {
                    transform: scaleX(1);
                }
            }
        }
    }
}

.right-side {
    max-width: 480px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 32px;
}
</style>