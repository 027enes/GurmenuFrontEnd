<template>
    <div :class="restaurant.data.theme">
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
const setCSSVariables = (restaurantColor) => {
  if (restaurantColor) {
    document.documentElement.style.setProperty('--restaurant-color', restaurantColor);
  }
}

// Bileşen yüklendiğinde CSS değişkenlerini ayarla
onMounted(() => {
  setCSSVariables(restaurant?.value?.data?.restaurant_color);
})

// Restaurant verisi değiştiğinde CSS değişkenlerini güncelle
watch(() => restaurant.value?.data?.restaurant_color, (newColor) => {
  setCSSVariables(newColor);
})

</script>
<style>
:root {

    --restaurant-color: v-bind(restaurant.data.restaurant_color);
    --text-right: end;
    --text-center: center;
    --text-left: start;
    --category-text-position: var(--text-center);
    --sheets-img-bg: 192, 131, 87;
}
</style>