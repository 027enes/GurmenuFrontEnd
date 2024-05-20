<template>
  <NuxtLayout>
  <NuxtLoadingIndicator />

    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup>
import {useRestaurant} from "~/composables/useRestaurant";
const {data: restaurant, error} = useRestaurant(useRoute().params.restaurant)
</script>
<style  scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>