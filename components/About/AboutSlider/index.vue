<template>
    <div>
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
                        <img :src="media.url" alt="LaVita" />
                        <div class="about-row" v-if="index === 0">
                        <div class="about-top-row">
                            <h5 class="about-photo-content">{{ aboutSlider.opening_and_closing_time }}</h5>
                        </div>
                        <div class="about-bottom-row">
                            <div class="about-bottom-left">
                                <div class="about-bottom-icon">
                                    <img alt="LaVita" :src="aboutSlider.medias.logo.url">
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
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

    const {aboutSlider} = defineProps(['aboutSlider']);

const modules = [ Pagination, Autoplay];
</script>

<style scoped>

</style>