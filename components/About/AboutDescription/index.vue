<template>
  <div>
      <div v-if="loading">
          <section id="p-about-desc">
              <div class="container">
                  <USkeleton class="uskeleton-about-title uskeleton-custom skeleton-box" />
                  <div class="about-content" :class="{ expanded: expanded }" @click="expanded = true">
                      <USkeleton class="uskeleton-about-description uskeleton-custom skeleton-box" />
                  </div>
                  <USkeleton class="uskeleton-about-slider-text uskeleton-custom skeleton-box"></USkeleton>
              </div>
          </section>
      </div>
      <div v-else>
          <section id="p-about-desc">
              <div class="container">
                  <h2>{{ $t('about_the_business') }}</h2>
                  <div class="about-content" :class="{ expanded: expanded }" @click="expanded = true">
                      <div v-html="aboutDescription.description"></div>
                  </div>
                  <div class="btn-about" :class="{ btn: btn }">
                      <button class="button-show" @click="toggleContent">
                          {{ $t('show_more') }}
                      </button>
                      <nuxt-icon name="show" class="icon-font"></nuxt-icon>
                  </div>
              </div>
          </section>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { aboutDescription } = defineProps(['aboutDescription']);
const expanded = ref(false);
const btn = ref(false);

const toggleContent = () => {
  expanded.value = !expanded.value;
  btn.value = !btn.value;
};
const loading = ref(true);

onMounted(() => {
  setTimeout (() => {
    loading.value = false;
  }, 1000);
});
</script>


<style scoped >

.uskeleton-about-title{
    width: 300px;
    height: 20px;
    margin: 5px 0;
}
.uskeleton-about-description{
    width: 100%;
    height: 100px;
}
.uskeleton-icon{
  width: 100%;
  height: 80px;
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
  background-color: #e4e4e4;
  position: relative;
  overflow: hidden;
}
.skeleton-slider{
    width: 100%;
    height: 100%;
    background-color: #7c7c7c;
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
