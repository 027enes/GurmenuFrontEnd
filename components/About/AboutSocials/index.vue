<template>
  <div>
    <div v-if="loading">
      <section id="socials">
        <div class="container">
          <Swiper
            class="about-Slider"
            :loop="false"
            :modules="[Autoplay, Scrollbar]"
            :slides-per-view="slidesPerView"
            :space-between="20"
            :breakpoints="breakpoints"
            :scrollbar="{ draggable: false, hide: false }"
            :draggable="true"
          >
            <swiper-slide v-for="i in 8" :key="i">
              <USkeleton class="uskeleton-socials-box uskeleton-custom skeleton-box" />
            </swiper-slide>
          </Swiper>
        </div>
      </section>
    </div>
    <div v-else>
      <section id="socials">
        <div class="container">
          <Swiper
            class="about-Slider"
            :loop="false"
            :modules="[Autoplay, Scrollbar]"
            :slides-per-view="slidesPerView"
            :space-between="20"
            :breakpoints="breakpoints"
            :scrollbar="{ draggable: true, hide: false }"
            :draggable="true"
          >
            <swiper-slide v-for="i in 8" :key="i">
              <div class="slide-socials" data-bs-toggle="modal" data-bs-target="#address-modal">
                <div class="socials-content">
                  <nuxt-icon name="instagram" class="Socials"></nuxt-icon>
                </div>
                <span>Instagram</span>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

import { ref, onMounted } from 'vue';

const slidesPerView = ref(2);
const breakpoints = ref({
  // when window width is <= 768px
  768: {
    slidesPerView: 2,
  },
  // when window width is <= 1024px
  1024: {
    slidesPerView: 3,
  },
  // when window width is <= 1200px
  1200: {
    slidesPerView: 4,
  },
  // when window width is <= 1600px
  1600: {
    slidesPerView: 5,
  },
});

const loading = ref(true);

onMounted(() => {
  loading.value = false;
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
.uskeleton-socials-box{
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
