<template>
    <div>
        <div class="header-bg">
            <svg style="opacity: 2" width="336" height="356" viewBox="0 0 336 356" fill="" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2" filter="url(#filter0_f_614_1048)">
                    <circle cx="51" cy="71" r="145" fill=""/>
                </g>
                <defs>
                    <filter id="filter0_f_614_1048" x="-234" y="-214" width="570" height="570" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="70" result="effect1_foregroundBlur_614_1048"/>
                    </filter>
                </defs>
            </svg>
        </div>

        <Head>
            <Title>{{restaurant.data.title}}</Title>
            <meta name="description" :content="restaurant.data.description" />
        </Head>

        <header id="header" class="header-top">
            <div class="container">
                <div class="header-top-row">
                        <div class="back h-item" id="back" x-data="">
                            <NuxtLinkLocale  :to="{ name: 'restaurant-restaurant', params:{restaurant: restaurant.data.slug} }" class="back-İcon" >
                                <nuxt-icon name='back' class="icon-font"></nuxt-icon>
                            </NuxtLinkLocale>
                        </div>
                    <NuxtLinkLocale  :to="{ name: 'restaurant-restaurant', params:{restaurant: restaurant.data.slug} }" class="header-top-left" activeClass="active">
                        <h2>{{restaurant.data.title}}</h2>
                        <h5>{{ restaurant.data.slogan_or_branch }}</h5>
                    </NuxtLinkLocale>
                    <div class="header-top-right ">
                        <Language />
                    </div>
                </div>
            </div>
        </header>
        
    </div>
</template>

<script setup>
    import Language from '~/components/Header/language/index.vue';
    const {data:restaurant} = useNuxtData('restaurant');

</script>

<style scoped>

</style>