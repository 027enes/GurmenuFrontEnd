<template>
    <div>
        <Head>
        <Title>{{ restaurant?.data?.meta?.title }} - Hakkımızda</Title>
    </Head>
        <main class="about-height">
            <AboutSlider :aboutSlider="restaurant?.data"/>
            <AboutDescription :aboutDescription="restaurant?.data"/>
            <AboutSocials />
            <AboutSuggestions />
        </main>
    </div>
</template>

<script setup>
import AboutSlider from '~/components/About/AboutSlider/index.vue';
import AboutDescription from '~/components/About/AboutDescription/index.vue';
import AboutSocials from '~/components/About/AboutSocials/index.vue';
import AboutSuggestions from '~/components/About/AboutSuggestions/index.vue';
const {data: restaurant} = useNuxtData('restaurant')    
defineI18nRoute({
  paths: {
    tr: '/restaurant/[restaurant]/hakkinda',
    en: '/restaurant/[restaurant]/about'
  }
})
</script>

<style lang="scss" scoped>

</style>