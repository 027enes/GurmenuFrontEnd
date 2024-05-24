<script setup lang="ts">
const props = defineProps<{
  title: string
  image: string
  placeholder: string
  width: number
  height: number
}>()
const loading = ref(true);

onMounted(() => {
  setTimeout (() => {
    loading.value = false;
  }, 1000);
});
</script>

<template>
    <section id="products-banner" v-if="loading">
    <USkeleton class="uskeleton-custom skeleton-box" style="height: 120px" />
    <div class="container p-banner-text">
        <USkeleton class="uskeleton-banner-text uskeleton-custom skeleton-box"></USkeleton>
    </div>
</section>
  <section id="products-banner" v-else>
    <div class="banner-img" style="height: 120px">
        <NuxtImg 
          alt="ATIŞTIRMALIKLAR"
          loading="lazy" 
          :src="image"
          :placeholder="placeholder"
          :width="width"
          :height="height"
        />
    </div>
    <div class="container p-banner-text">
        <h2>{{ title }}</h2>
    </div>
</section>
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
