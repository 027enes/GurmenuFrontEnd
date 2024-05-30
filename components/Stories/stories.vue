<template>
    <div class="container">
        <Swiper
            class="stories"
            :loop="false"
            :space-between="10"
            :slides-per-view="slidesPerView"
            :breakpoints="breakpoints"
            :pagination="{ clickable: true }"
            :draggable="true"
        >
            <swiper-slide class="stories-content">
                <button @click="storiesClick" :class="{ 'active': isActive }" class="stories-image">
                    <img src="../../assets/image/campaing.png" alt="Lavita" />
                </button>
            </swiper-slide>
            <swiper-slide class="stories-content">
                <div class="stories-image">
                    <img src="../../assets/image/campaing.png" alt="Lavita" />
                </div>
                <div class="stories-text">
                    <h5 class="stories-title">Lavita</h5>
                </div>
            </swiper-slide>
        </Swiper>
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

const isActive = ref(false);

const storiesClick = () => {
  isActive.value = !isActive.value;

};
</script>

<style lang="scss" scoped>

</style>