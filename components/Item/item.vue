<script setup lang="ts">
import "@webzlodimir/vue-bottom-sheet/dist/style.css";
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import { ref, onMounted } from 'vue';
const props = defineProps({
  product: Object,
});
const productSheet = ref(null);
const openProductSheet = () => {
  productSheet.value.open();
}
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000); // 2 saniye gecikme
})
</script>

<template>
 <div>

  <div class="p-products-item" v-if="loading">
     <div class="prod-cont">
       <div class="p-products-top">
         <div class="products-item-img">
           <USkeleton class="uskeleton-img"/>
         </div>
         <div class="products-item-text">
           <USkeleton class="uskeleton-text"/>
           <USkeleton class="uskeleton-text" />
         </div>
       </div>
     </div>
   </div>

   <div class="p-products-item" v-else @click="openProductSheet">
     <div class="prod-cont">
       <div class="p-products-top">
         <div class="products-item-img">
           <NuxtImg 
            :src="product.medias.cover?.conversions.optimized.url" 
            alt="product image"
            :placeholder="product.medias.cover?.conversions.optimized.placeholder"
            loading="lazy"
            width="product.medias.cover?.conversions.optimized.width"
            height="product.medias.cover?.conversions.optimized.height"  
          />
         </div>
         <div class="products-item-text">
           <h2 class="products-titlee">{{ product.title }}</h2>
           <h2 class="products-sell">{{ product.price }}{{ product.currency }}</h2>
         </div>
       </div>
     </div>
   </div>


   <client-only>
   <vue-bottom-sheet ref="productSheet" :max-height="1000">
     <main class="body fill column">
       <div class="sheets-img">
         <NuxtImg 
            :src="product.medias.cover?.conversions.optimized.url" 
            alt="product image"
            :placeholder="product.medias.cover?.conversions.optimized.placeholder"
            loading="lazy"
            width="product.medias.cover?.conversions.optimized.width"
            height="product.medias.cover?.conversions.optimized.height"   
        />
       </div>
       <div class="sheets-title-row products-item-text">
         <h2 class="products-title">{{ product.title }}</h2>
         <h2 class="products-sell">{{ product.price }}₺</h2>
       </div>

       <div class="sheets-text-cal">
         <!-- Additional details can be added here -->
       </div>

       <div class="sheet-desc">
         <p>{{ product.menu_content }}</p>
         <p v-if='product.allergens'>
           <b>Alerjenler:</b> {{ product.allergens }}
         </p>
       </div>
     </main>
   </vue-bottom-sheet>
</client-only>
 </div>
</template>

<style scoped >
.uskeleton-img{
  width: 80px;
  height: 80px;
}
.uskeleton-text{
  width: 100%;
  height: 20px;
  margin: 5px 0;
}
</style>
