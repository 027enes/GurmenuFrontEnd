
<template>
   <div>
        <div>
            <section id="line"></section>
            <section id="products">
                <div class="container">
                    <div class="products-row rectangle">
                        <CategoriesItem  v-for="category in categories" :key="category.id"  :category="category"/>
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>
<script setup lang="ts">
const {data: restaurant} = useNuxtData('restaurant')
import {useCategories} from "~/composables/useCategories";

const {
  data: categories,
  error: categoriesError,
  pending: categoriesPending,
  status: categoriesStatus
} = useCategories(useRoute().params.restaurant)
</script>
<style scoped>
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
