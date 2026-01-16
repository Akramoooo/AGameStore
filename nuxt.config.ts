export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabasePublishableKey: process.env.SUPABASE_PUBLISHABLE_KEY,
      baseImageUrl: `${process.env.NUXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/`,
    },
  },
  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: true,
    redirectOptions: {
      login: "auth/login",
      callback: "/confirm",
      exclude: ["/", "/profile", "/auth/register"], // Массив страниц, которые доступны БЕЗ логина (например, главная)
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./scss/main.scss"],
  devServer: {
    port: 3030,
  },
  googleFonts: {
    families: {
      Urbanist: [100, 300, 400, 700, 900],
      Inter: [400, 700, 800],
    },
    display: "swap",
    download: true,
  },

  pinia: {
    storesDirs: ["./entities/**/model/"],
  },

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/supabase",
  ],
});
