<template>
    <form class="register-form__container form-container" @submit.prevent>
        <h2>Региcтрация</h2>
        <BaseInput v-model="user.name" label="Введите имя" :error="errors?.name" />
        <BaseInput v-model="user.email" label="Введите почту" type="email" :error="errors?.email" />
        <div class="grid__container">
            <BaseInput v-model="user.password" label="Введите пароль" class="col-6" type="password"
                :error="errors?.password" />
            <BaseInput v-model="user.confirm" label="Подтвердите пароль" class="col-6" type="password"
                :error="errors?.confirm" />
        </div>

        <BaseButton class="button" @click="submit" :disabled="isLoading">Регистрация</BaseButton>
    </form>
</template>

<script setup lang="ts">
import BaseButton from '~/shared/ui/BaseButton/BaseButton.vue';
import BaseInput from '~/shared/ui/BaseInput/BaseInput.vue';
import type { RegisterForm } from '../model/types';
import { useAuthValidation } from '../model/validation';
import { registerUser } from '../api/register';

const user = ref<RegisterForm>({
    name: "",
    email: "",
    password: "",
    confirm: ""
});

const router = useRouter();
const { handleRegister, isLoading, error } = registerUser();
const { validate, errors } = useAuthValidation();

const submit = async () => {
    const isValid = validate(user.value);

    if (!isValid) return;
    const result = await handleRegister(user.value)

    if (result) router.push('/');
}
</script>

<style scoped>
.register-form__container {
    max-width: 600px;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    padding: 24px;
}

h2 {
    margin: 0 auto;
}

.button {
    margin-top: 12px;
}
</style>