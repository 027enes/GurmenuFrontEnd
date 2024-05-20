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
        transform(input) {
            return {
                ...input,
                fetchAt: new Date()
            }
        },
        getCachedData(key, nuxtApp) {
            const cachedData = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
            // 1 hour = 3600000ms, 10 minutes = 600000ms
            if (!cachedData || new Date(cachedData.fetchAt).getTime() < Date.now() - 3600000) {
                return undefined;
            }
            return cachedData;
        },
    });
};
