<template>
  <div>
    <div class="lang-btn" :class="{ active: langBtn }" v-on:click="langBtn = !langBtn">
      <div class="lang-cont">
        <span :class="['fi fi-lang', `fi-${getFlagCode(locale)}`]"></span>
      </div>

      <ul class="lang-content" :class="{ active: langBtn }">
        <template v-for="loc in restaurant.data.available_locales" :key="loc">
          <li class="langs">
            <a href="/" @click.prevent.stop="setLocale(loc); langBtn = false" class="lang">
              <span :class="['fi fi-lang', `fi-${getFlagCode(loc)}`]"></span>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>


<script setup lang="ts">

const { locale, locales, setLocale } = useI18n()
const { data: restaurant } = useNuxtData('restaurant')
const langBtn = ref(false)

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

// Function to get the appropriate flag code
const getFlagCode = (locale) => {
  if (locale === 'en') return 'sh' // Use 'sh' for English
  return locale
}
</script>


  <style lang="scss" scoped>

  </style>