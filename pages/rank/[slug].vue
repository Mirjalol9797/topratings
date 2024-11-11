<script setup>
import { useAsyncData } from "nuxt/app";

import { useRoute } from "vue-router";

import CategoryLastTen from "@/components/mainPage/CategoryLastTen.vue";
import CategoryAllTopMain from "@/components/mainPage/CategoryAllTopMain.vue";

const { t } = useI18n();
const route = useRoute();

const getNewsSlugApi = useNewsSlug();

const { data: newsSlug } = useAsyncData(
  "slug",
  async () => await getNewsSlugApi.getNewsSlug(route.params.slug)
);

// for seo. script application json
const inLanguage = route.name.replace("rank-slug___", "");
const keywords = computed(() => {
  if (newsSlug.value && newsSlug.value.seo && newsSlug.value.seo.keywords) {
    return newsSlug.value.seo.keywords
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);
  }
  return [];
});

const headData = computed(() => {
  if (newsSlug.value) {
    return {
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${newsSlug.value?.seo.title}`,
            description: `${newsSlug.value?.seo.description}`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://toprankings.uz${route.fullPath}`,
            },
            publisher: {
              "@type": "Organization",
              name: "Mirjalol Mirxomitov",
              logo: {
                "@type": "ImageObject",
                url: `https://toprankings.uz/logo.jpg`,
              },
            },
            author: {
              "@type": "Person",
              name: "Mirjalol Mirxomitov",
            },
            datePublished: `${newsSlug.value?.publication_date}`,
            dateModified: `${newsSlug.value?.publication_date}`,
            image: `${newsSlug.value?.file}`,
            articleSection: `${newsSlug.value?.category?.name}`,
            keywords: `${keywords.value}`,
            inLanguage: `${inLanguage}`,
          }),
        },
      ],
    };
  }

  return {};
});

useHead(headData);
</script>

<template>
  <div class="rank-detail">
    <div class="site-container">
      <div class="flex 768:flex-col">
        <div class="w-[68%] 768:w-full 768:mb-14">
          <h1 class="font-bold text-2xl mb-5 title 768:mb-4 768:text-lg">
            {{ newsSlug?.title }}
          </h1>
          <div
            v-html="newsSlug?.description"
            class="w-full h-full content"
          ></div>
        </div>
        <div class="w-[29%] ml-[3%] 768:w-full 768:ml-0">
          <CategoryLastTen />
        </div>
      </div>
      <CategoryAllTopMain v-if="false" />
    </div>
  </div>

  <!-- seo -->
  <Head>
    <Title>{{ newsSlug?.seo?.title }}</Title>
    <Meta name="title" :content="newsSlug?.seo?.title" />
    <Meta name="description" :content="newsSlug?.seo?.description" />
    <Meta name="keywords" :content="newsSlug?.seo?.keywords" />
    <Meta name="og:title" property="og:title" :content="newsSlug?.seo?.title" />
    <Meta
      name="og:description"
      property="og:description"
      :content="newsSlug?.seo?.description"
    />
    <Meta property="og:image" :content="newsSlug?.file" />
    <Meta
      property="og:url"
      :content="`https://toprankings.uz${route.fullPath}`"
    />
    <Meta property="twitter:title" :content="newsSlug?.seo?.title" />
    <Meta
      property="twitter:description"
      :content="newsSlug?.seo?.description"
    />
    <Meta property="twitter:image" :content="newsSlug?.file" />
    <Meta
      property="twitter:url"
      :content="`https://toprankings.uz${route.fullPath}`"
    />
    <Link rel="canonical" :href="`https://toprankings.uz${route.fullPath}`" />
    <Link
      rel="alternate"
      hreflang="uz"
      :href="`https://toprankings.uz/uz/rank/${route.params.slug}`"
    />
    <Link
      rel="alternate"
      hreflang="en"
      :href="`https://toprankings.uz/en/rank/${route.params.slug}`"
    />
    <Link
      rel="alternate"
      hreflang="x-default"
      :href="`https://toprankings.uz/rank/${route.params.slug}`"
    />
  </Head>
</template>

<style lang="scss">
.rank-detail {
  .content {
    h1,
    h2,
    h3,
    img,
    p {
      margin-bottom: 12px;
    }
    p {
      line-height: 24px;
    }
    h2 {
      font-size: 20px;
      line-height: 24px;
    }
    a {
      color: #315efb;
    }
    ul {
      padding: 0 0 0 40px;
      margin-bottom: 12px;
      list-style: circle;
    }
    iframe {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
}
</style>
