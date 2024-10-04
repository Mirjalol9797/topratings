export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (to.path.includes("profile")) {
    const codeEntered = authStore.userToken;

    if (!codeEntered) {
      return navigateTo("/?user_modal=true");
    }
  }
});
