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
  setTimeout (() => {
    loading.value = false;
  }, 3000);
});
</script>

<template>
 <div>

  <div class="p-products-item" v-if="loading">
     <div class="prod-cont">
       <div class="p-products-top">
         <div class="products-item-img">
           <USkeleton class="uskeleton-img uskeleton-custom skeleton-box"/>
         </div>
         <div class="products-item-text">
           <USkeleton class="uskeleton-text uskeleton-custom skeleton-box"/>
           <USkeleton class="uskeleton-text uskeleton-custom skeleton-box" />
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

.uskeleton-custom {
  background-color: #424242; /* USkeleton rengi */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.skeleton-box {
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
}

.skeleton-box::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: -150%;
  height: 100%;
  width: 50%;
  background: linear-gradient(to right, transparent 0%, rgb(104, 104, 104) 50%, transparent 100%);
  animation: loading 3.5s infinite;
}

@keyframes loading {
  0% {
    left: -150%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
