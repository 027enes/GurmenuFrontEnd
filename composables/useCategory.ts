export const useCategory = (restaurant: string, category: string) => {
    return useFetch(`/restaurant/category`, {
        baseURL: useRuntimeConfig().public.apiBaseUrl,
        method: 'POST',
        body: {
            restaurant: restaurant,
            category: category,
            locale: useI18n().locale.value,
        },
        key: restaurant + category + '-category-' + useI18n().locale.value,
        
    })
}


