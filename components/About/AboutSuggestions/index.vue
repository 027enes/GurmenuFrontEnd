<template>
    <div>
      <div v-if="loading">
        <section id="address">
          <div class="container">
            <div class="opinion">
              <USkeleton class="uskeleton-socials-box uskeleton-custom skeleton-box"/>
            </div>
          </div>
        </section>
      </div>
      <div v-else>
        <section id="address">
          <div class="container">
            <div class="opinion">
              <button class="opinion-btn" @click="openBottomSheet">
                {{ $t('your_comments_and_suggestions') }}
              </button>
            </div>
          </div>
        </section>
      </div>
      <client-only>
        <vue-bottom-sheet ref="sheetsScore"  :max-height="1000">
          <BottomSheetsAbout />
        </vue-bottom-sheet>
    </client-only>
    </div>
  </template>
  
  <script setup>
    import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
    import  "@webzlodimir/vue-bottom-sheet/dist/style.css";
    import BottomSheetsAbout from "@/components/BottomSheets/index.vue";

import { ref } from "vue";

const sheetsScore = ref(null)

const openBottomSheet = () => {
    sheetsScore.value.open();
}

const close = () => {
    sheetsScore.value.close();
}

const loading = ref(true);

onMounted(() => {
  setTimeout (() => {
    loading.value = false;
  }, 1000);
});
</script>
  
  <style scoped>
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
  .uskeleton-socials-box{
      width: 100%;
      height: 60px;
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

