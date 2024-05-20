<template>
  <div class="search-bottom">
    <form @submit.prevent="fetchData">
      <div class="search-input">
        <label for="search-input"></label>
        <input id="search-input" v-model="searchInput" type="text" placeholder="Arama yapın...">
        <button type="submit">Search</button>
        <button type="reset" @click="resetSearch"><i class="fa-regular fa-circle-xmark"></i></button>
      </div>
    </form>
    <div class="p-products-items" id="search-results" v-if="searchInput">
      <template v-if="searchResult.searchResults.length">
        <template v-for="item in searchResult.searchResults" :key="item.id">
          <SearchItem :item="item"/>
        </template>
      </template>
      <template v-else-if="searchResult.searchResultsError">
        <div class="p-products-item">
          <div class="not-page">
            <h2 class="products-title">Ürün Bulunamadı</h2>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { useSearch } from '~/composables/useSearch';
import SearchItem from '~/components/Search/Item.vue';

const { data: restaurant } = useNuxtData('restaurant');

const searchInput = ref('');
const searchResult = ref({
  searchResults: [],
  searchResultsError: null,
  searchResultsPending: false,
  searchResultsStatus: null
});

const locale = 'tr'; // Locale sabit olarak 'tr' ayarlandı

function search() {
  if (!searchInput.value) return;
  try {
    const {
      data: searchData,
      error: useSearchError,
      pending: useSearchPending,
      status: useSearchStatus
    } = useSearch(useRoute().params.restaurant, searchInput.value, locale); // Locale sabit olarak 'tr' kullanıldı

    searchResult.value = {
      searchResults: searchData,
      searchResultsError: useSearchError,
      searchResultsPending: useSearchPending,
      searchResultsStatus: useSearchStatus
    };
  } catch (e: any) {
    console.log(e);
  }
}

const throttledSearch = useDebounceFn(search, 200);

watch(
  () => searchInput.value,
  () => throttledSearch(),
);

function resetSearch() {
  searchInput.value = '';
  searchResult.value = {
    searchResults: [],
    searchResultsError: null,
    searchResultsPending: false,
    searchResultsStatus: null
  };
}

function fetchData() {
  search();
}
</script>

<style scoped>
</style>
