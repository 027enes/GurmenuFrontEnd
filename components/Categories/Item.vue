<template>
  <div class="products-item" v-if="loading">
    <USkeleton class="products-link sag-bg">
      <div class="products-img">
        <USkeleton alt="ATIŞTIRMALIKLAR"  />
      </div>
      <div class="product-text sag">
        <USkeleton />
      </div>
    </USkeleton>
  </div>
  <div class="products-item" v-else-if="restaurant.data && category.slug">
    <NuxtLinkLocale :to="link" class="products-link sag-bg">
      <div class="products-img">
        <NuxtImg alt="ATIŞTIRMALIKLAR"
          :src="category.medias?.cover.conversions.optimized.url"
          :placeholder="category.medias?.cover.conversions.optimized.placeholder"
          loading="lazy"
          :height="category.medias?.cover.conversions.optimized.height"
          :width="category.medias?.cover.conversions.optimized.width"
        />
      </div>
      <div class="product-text sag">
        <h3>{{ category.title }}</h3>
      </div>
    </NuxtLinkLocale>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const {data:restaurant} = useNuxtData('restaurant');
const props = defineProps({
  category: {
    type: Object,
    required: true
  }
})
const loading = ref(true);

onMounted(() => {
  loading.value = false;
});
const link = computed(() => ({
  name: 'restaurant-restaurant-category',
  params: { restaurant: restaurant?.data?.slug, category: props.category?.slug }
}))

</script>

<style scoped>

</style>

