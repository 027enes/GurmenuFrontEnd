<template>
  <div>
    <div class="lang-btn" :class="{ active: langBtn }" v-on:click="langBtn = !langBtn" >
      <div class="lang-cont">
        {{ locale }}
      </div>

      <ul class="lang-content" :class="{ active: langBtn }">
        <template v-for="locale in restaurant.data.available_locales" :key="locale">
        <li class="langs">
          <a href="/" @click.prevent.stop="setLocale(locale); langBtn = false" class="lang">
            {{ locale }}
          </a>
        </li>
      </template>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
const {locale, locales, setLocale} = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
const {data: restaurant} = useNuxtData('restaurant')
const langBtn = ref(false)
</script>

<style lang="scss" scoped>

</style>