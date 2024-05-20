export const useCategory = (restaurant: string, category: string) => {
    return useFetch(`/restaurant/category`, {
        baseURL: useRuntimeConfig().public.apiBaseUrl,
        method: 'POST',
        body: {
            restaurant: restaurant,
            category: category,
            locale: 'tr',
        },
        key: restaurant + category + '-category-' + 'tr',
        
    })
}


