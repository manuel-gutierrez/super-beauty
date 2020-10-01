export const state = () => ({
    filterNames: {
        PRICE: "price",
        RATING: "rating",
        BRAND: "brand",
        VARIANT: "variant",
        OTHER: "other",
        SUSTAINABLE: "sustainable",
        NEW: "new",
    },
})
export const mutations = {}

export const getters = {
    getEnum: (state) => (enumName) => {
        return state[enumName]
    },
}
