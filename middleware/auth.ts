export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isAuth, profile, user, fetchUserProfile } = useUserStore();

  if (user && !profile) {
    await fetchUserProfile();
  }

  if (!isAuth) return navigateTo("/");
});
