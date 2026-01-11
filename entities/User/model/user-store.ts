import type { UserProfile } from "./types";

export const useUserStore = defineStore("useUserStore", () => {
  const supabase = useSupabaseClient();

  const user = useSupabaseUser();
  const profile = ref<UserProfile | null>(null);

  const isAuth = computed(() => !!user.value);

  const fetchUserProfile = async () => {
    try {
      const { data } = await supabase
        .from("users_data")
        .select("*")
        .eq("id", user.value?.id)
        .single();
    } catch (error) {}
  };
  return { user, profile, isAuth, fetchUserProfile };
});
