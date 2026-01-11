<template>
    <div class="footer-links__container ">
        <NuxtLink v-for="link in links" :href="link.link">
            <p class="p__middle">{{ link.title }}</p>
        </NuxtLink>
    </div>
</template>

<script setup>


const links = [
    { id: 1, title: "About service", link: "#" },
    { id: 2, title: "Payment", link: "#" },
    { id: 3, title: "FAQ", link: "#" },
    { id: 4, title: "Terms of sale", link: "#" },
    { id: 5, title: "Waranty conditions", link: "#" },
    { id: 6, title: "Contacts", link: "#" },
    { id: 7, title: "Privacy policy", link: "#" },
    { id: 8, title: "User agreement", link: "#" },
    { id: 9, title: "Legal information", link: "#" },
    { id: 10, title: "News", link: "#" },
    { id: 11, title: "Terms of conditions", link: "#" },
];

</script>

<style lang="scss" scoped>
.footer-links__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 16px;
    width: 60%;
}
</style>