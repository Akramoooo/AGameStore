import type { RegisterForm } from "../model/types";

export const registerUser = () => {
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const supabase = useSupabaseClient();

  const handleRegister = async (formData: RegisterForm) => {
    if (!formData) return;

    try {
      isLoading.value = true;
      let { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          },
        },
      });
      return data;
    } catch (error: any) {
      error.value = error.message;
    } finally {
      isLoading.value = false;
    }
  };

  return { handleRegister, isLoading, error };
};
