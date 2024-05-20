export const useCategories = (restaurant: string) => {
    return useFetch(`/restaurant/categories`, {
        baseURL: useRuntimeConfig().public.apiBaseUrl,
        method: 'POST',
        body: {
            restaurant: restaurant,
            locale: 'tr',
        },
        key: restaurant + '-categories-' + 'tr',
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
