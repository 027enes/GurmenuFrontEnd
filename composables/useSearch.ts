export const useSearch = (restaurant: string, searchString: string) => {
    return useFetch(`/restaurant/items/search`, {
        baseURL: useRuntimeConfig().public.apiBaseUrl,
        method: 'POST',
        body: {
            restaurant: restaurant,
            search: searchString,
            locale: 'tr',
        }
    });
}