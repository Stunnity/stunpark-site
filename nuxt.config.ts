// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://stunpark.com",
        },
    },
    css: ["@/assets/css/global.css"],
    app: {
        head: {
            charset: "utf-16",
            viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
            title: "Stunpark Mobile App | Hassle-Free Parking Experience",
            meta: [
                // <meta name="description" content="My amazing site">

                {
                    name: "description",
                    content:
                        "Stunpark is a mobile app designed to make finding and booking parking spaces quick and easy. Our app offers powerful features such as booking parking slots, getting directions to parks, and tracking parking slot availability.",
                },
            ],
            htmlAttrs: {
                lang: "en",
            },
        },
    },
    components: [
        {
            path: "~~/components",
            pathPrefix: false,
        },
    ],
    plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
    image: {},
    routeRules: {
        "/*": { headers: { "Cache-Control": "max-age=31536000" } },
    },
    modules: ["@nuxtjs/tailwindcss", "vite-plugin-vue-type-imports/nuxt", "@nuxt/image-edge", "nuxt-og-image", "@nuxtjs/robots"],
})
