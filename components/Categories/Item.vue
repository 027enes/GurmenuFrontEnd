<template>
<div class="products-item"  v-if="restaurant.data && category.slug">
<NuxtLink :to="link" class="products-link sag-bg">
      <div class="products-img">
        <NuxtImg alt="ATIŞTIRMALIKLAR" 
          :src="category.medias?.cover.conversions.optimized.url" 
          :placeholder="category.medias?.cover.conversions.optimized.placeholder" 
          loading="lazy"
          height="category.medias?.cover.conversions.optimized.height"
          width="category.medias?.cover.conversions.optimized.width" 
        />
      </div>
      <div class="product-text sag">
        <h3>{{ category.title }}</h3>
      </div>
    </NuxtLink>
</div>
</template>

<script setup lang="ts">
const {data:restaurant} = useNuxtData('restaurant');
const props = defineProps({
  category: {
    type: Object,
    required: true
  }
})

const link = computed(() => ({
  name: 'restaurant-restaurant-category',
  params: { restaurant: restaurant?.data?.slug, category: props.category?.slug }
}))

</script>

<style lang="scss" scoped>
</style>

