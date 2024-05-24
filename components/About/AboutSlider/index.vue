<template>
  <div>
      <div v-if="loading">
          <section id="about-slider">
              <Swiper
                  class=""
                  :loop="false"
                  :modules="modules"
                  :navigation="false"
                  :slides-per-view="1"
                  :space-between="150"
                  :pagination="{ clickable: true }"
                  :draggable="true"
              >
                      <swiper-slide v-for="(media, index) in aboutSlider.medias.photos" :key="index">
                          <USkeleton class="skeleton-slider uskeleton-custom skeleton-box" />
                          <div class="about-row" v-if="index === 0">
                          <div class="about-top-row">
                              <USkeleton class="uskeleton-about-slider-text uskeleton-custom skeleton-box"></USkeleton>
                          </div>
                          <div class="about-bottom-row">
                              <div class="about-bottom-left">
                                  <div class="about-bottom-icon">
                                      <USkeleton class="uskeleton-icon uskeleton-custom skeleton-box" />
                                  </div>
                                  <div class="about-bottom-text">
                                      <USkeleton class="uskeleton-about-slider-text uskeleton-custom skeleton-box" ></USkeleton>
                                      <USkeleton class="uskeleton-about-slider-text uskeleton-custom skeleton-box"></USkeleton>
                                  </div>
                              </div>
                          </div>
                      </div>
                      </swiper-slide>
                      
              </Swiper>
          </section>
      </div>
      <div v-else>
          <section id="about-slider">
              <Swiper
                  class="aboutSlider"
                  :loop="false"
                  :modules="modules"
                  :navigation="false"
                  :slides-per-view="1"
                  :space-between="150"
                  :pagination="{ clickable: true }"
                  :draggable="true"
              >
                      <swiper-slide v-for="(media, index) in aboutSlider.medias.photos" :key="index">
                          <NuxtImg :src="media.url" alt="Lavita"  />
                          <div class="about-row" v-if="index === 0">
                          <div class="about-top-row">
                              <h5 class="about-photo-content">{{ aboutSlider.opening_and_closing_time }}</h5>
                          </div>
                          <div class="about-bottom-row">
                              <div class="about-bottom-left">
                                  <div class="about-bottom-icon">
                                      <NuxtImg  :src="aboutSlider.medias.logo.url" alt="Lavita" />
                                  </div>
                                  <div class="about-bottom-text">
                                      <h2>{{aboutSlider.title}}</h2>
                                      <span>{{ aboutSlider.slogan_or_branch }}</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      </swiper-slide>
                      
              </Swiper>
          </section>
      </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { ref, onMounted } from 'vue';

  const {aboutSlider} = defineProps(['aboutSlider']);

const modules = [ Pagination, Autoplay];

const loading = ref(true);

onMounted(() => {
  setTimeout (() => {
    loading.value = false;
  }, 1000);
});
</script>

<style scoped >

.uskeleton-about-slider-text{
  width: 200px;
  height: 20px;
  margin: 5px 0;
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


<style scoped >

.uskeleton-about-slider-text{
    width: 200px;
    height: 20px;
    margin: 5px 0;
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
