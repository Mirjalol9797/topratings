// composables/useSeo.js

export const useSeo = (seoData) => {
  useHead({
    title: seoData.title,
    meta: [
      { name: "title", content: seoData.title },
      { name: "description", content: seoData.description },
      { name: "keywords", content: seoData.keywords },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: seoData.ogTitle },
      { property: "og:description", content: seoData.ogDescription },
      { property: "og:image", content: seoData.ogImage },
      { property: "og:url", content: seoData.ogUrl },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Top Rankings" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: seoData.twitterUrl },
      { property: "twitter:title", content: seoData.twitterTitle },
      { property: "twitter:description", content: seoData.twitterDescription },
      { property: "twitter:image", content: seoData.twitterImage },
    ],
    link: [
      { rel: "canonical", href: "https://toprankings.uz/" },
      { rel: "preload", href: "https://fonts.gstatic.com" },
      { rel: "alternate", hreflang: "en", href: "https://toprankings.uz/en/" },
      { rel: "alternate", hreflang: "ru", href: "https://toprankings.uz/ru/" },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: "https://toprankings.uz/",
      },
      { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
    ],
  });
};
