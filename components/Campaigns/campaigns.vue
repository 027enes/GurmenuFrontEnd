<template>
    <div class="container">
      <div v-if="loading">
        <Swiper
                  class="campaigns"
                  :loop="false"
                  :space-between="10"
                    :slides-per-view="slidesPerView"
                    :breakpoints="breakpoints"
                  :pagination="{ clickable: true }"
                  :draggable="true"
              >
                      <swiper-slide class="campaigns-content">
                        <USkeleton class="uskeleton-socials-box uskeleton-custom skeleton-box" />
                      </swiper-slide>
                    
          </Swiper>
        </div>
        <div v-else>
          <Swiper
                  class="campaigns"
                  :loop="false"
                  :space-between="10"
                    :slides-per-view="slidesPerView"
                    :breakpoints="breakpoints"
                  :pagination="{ clickable: true }"
                  :draggable="true"
              >
                      <swiper-slide class="campaigns-content">
                        <div class="campaigns-image">
                            <img src="../../assets/image/campaing.png" alt="Lavita" />
                        </div>
                        <div class="campaigns-text">
                            <h5 class="campaigns-title">Lavita</h5>
                        </div>
                      </swiper-slide>
                      
                      <swiper-slide class="campaigns-content">
                        <div class="campaigns-image">
                            <img src="../../assets/image/campaing.png" alt="Lavita" />
                        </div>
                        <div class="campaigns-text">
                            <h5 class="campaigns-title">Lavita</h5>
                        </div>
                      </swiper-slide>
          </Swiper>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
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
    slidesPerView: 3,
  },
  // when window width is <= 1600px
  1600: {
    slidesPerView: 3,
  },
});
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