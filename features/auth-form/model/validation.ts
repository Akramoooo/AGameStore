import type { RegisterForm } from "./types";

export const useAuthValidation = <T extends Record<string, any>>() => {
  const baseValidator = useBaseValidation();
  const errors = ref<Partial<Record<keyof T, string>>>({});

  const validate = (formData: T) => {
    errors.value = {} as any;

    if ("email" in formData && !baseValidator.email(formData.email)) {
      errors.value.email = "Неверный email";
    }

    if ("name" in formData && !baseValidator.name(formData.name)) {
      errors.value.name = "Неверный формат имени";
    }

    if ("password" in formData && !baseValidator.password(formData.password)) {
      errors.value.password = "Пароль должен быть от 8 символов";
    }
    if ("confirm" in formData && "password" in formData) {
      if (formData.confirm !== formData.password) {
        errors.value.confirm = "Пароли не совпадают";
      }
    }

    return Object.values(errors.value).every((err) => !err);
  };

  const setFieldError = (field: keyof T, message: string) => {
    errors.value[field] = message;
  };

  const clearErrors = () => {
    errors.value = {};
  };

  return { validate, errors, setFieldError };
};
