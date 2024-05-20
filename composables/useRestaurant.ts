export const useRestaurant = (restaurant: string) => {
    return useFetch(`/restaurant`, {
        baseURL: useRuntimeConfig().public.apiBaseUrl,
        method: 'POST',
        body: {
            restaurant: restaurant,
        },
        key: 'restaurant',
    });
};
