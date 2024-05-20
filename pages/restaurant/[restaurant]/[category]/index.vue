<template>
    <div v-if="categoryError" class="error">
        <nuxt-icon name="error" filled class="icon-font error-icon"></nuxt-icon>
        <h1 class="error-title">
          Aradığınız sayfa bulunamadı.
        </h1>
        <h2 class="error-subtitle">
          Kapatıp tekrar açmayı denediniz mi?
        </h2>
        <NuxtLink to="/" class="errorBtn">Anasayfaya Dön</NuxtLink>
    </div>
    <div v-else>
        <Banner v-if="!categoryPending" 
        :title="category.data.title" 
        :image="category.data.medias.cover.conversions.optimized.url"
        :placeholder="category.data.medias.cover.conversions.optimized.placeholder"
        :width="category.data.medias.cover.conversions.optimized.width"
        :height="category.data.medias.cover.conversions.optimized.height"
      />
      <section id="products-content">
          <div class="container">
            <div class="p-products-items products-page-items">
              <template v-if="categoryPending">
                Kategoriler bekleniyor...
              </template>
              <template v-else>
                <Item v-for="p in category.data.items" :product="p" :key="p.id"/>
              </template>
            </div>
          </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Banner from "~/components/Categories/Banner.vue";
import Item from "~/components/Item/item.vue";
import {useCategory} from "~/composables/useCategory";
const {
  data: category,
  error: categoryError,
  pending: categoryPending,
  status: categoryStatus
} = useCategory(useRoute().params.restaurant, useRoute().params.category)
</script>

<style lang="scss" scoped>

</style>