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
        <template v-for="item in searchResult.searchResults.data" :key="item.id">
          <SearchItem :item="item"/>
        </template>

    </div>
  </div>
</template>


<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { useSearch } from '~/composables/useSearch';

const { data: restaurant } = useNuxtData('restaurant');

const searchInput = ref('');
const searchResult = ref({
  searchResults: [],
  searchResultsError: null,
  searchResultsPending: false,
  searchResultsStatus: null
});

const locale = 'tr';

async function search() {
  if (!searchInput.value) return;
  try {
    const {
      data: searchData,
      error: useSearchError,
      pending: useSearchPending,
      status: useSearchStatus
    } = await useSearch(useRoute().params.restaurant, searchInput.value, locale);

    searchResult.value = {
      searchResults: searchData.value,
      searchResultsError: useSearchError.value,
      searchResultsPending: useSearchPending.value,
      searchResultsStatus: useSearchStatus.value
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
