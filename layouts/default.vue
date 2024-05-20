<template>
    <div :class="restaurant.data.theme">
      <Head>
        <Link rel="icon" :href="restaurant.data.medias.favicon.url"/>
        <Meta name="description" :content="restaurant.data.meta.description" />
        <Meta name="og:site_name" :content="restaurant.data.meta.title"/>
        <Meta name="og:image" :content="restaurant.data.meta.og_image"/>
      </Head>
      <NuxtLoadingIndicator />
        <Header/>
        <slot/>
        <Footer/>
        <BottomNavigation/>
    </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
const {data: restaurant} = useNuxtData('restaurant')
import Header from '@/components/Header/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

// CSS değişkenlerini ayarlayan fonksiyon
const setCSSVariables = (restaurantColor,category_list_text_align) => {
  if (restaurantColor,category_list_text_align) {
    document.documentElement.style.setProperty('--restaurant-color', restaurantColor);
    document.documentElement.style.setProperty('--category-text-position', category_list_text_align)
  }
}

// Bileşen yüklendiğinde CSS değişkenlerini ayarla
onMounted(() => {
  setCSSVariables(restaurant?.value?.data?.restaurant_color,restaurant?.value?.data?.category_list_text_align);
})

// Restaurant verisi değiştiğinde CSS değişkenlerini güncelle
watch(() => restaurant.value?.data, (newData) => {
  setCSSVariables(newData?.restaurant_color, newData?.category_list_text_align);
})
</script>
<style>
:root {

    --restaurant-color: v-bind(restaurant.data.restaurant_color);
    --category-text-position: v-bind(restaurant.data.category_list_text_align);
    --sheets-img-bg: 192, 131, 87;
}
</style>