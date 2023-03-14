import { defineStore } from 'pinia'
import { fetchProductsApi, fetchProductApi } from '../api'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    isEnabled: false,
    products: [],
    currentProduct: null,
    fetchingProducts: false,
    fetchingProduct: false,
    error: null
  }),
  getters: {},
  actions: {
    toggleListFeature() {
      this.isEnabled = !this.isEnabled
    },

    async fetchProducts() {
      this.fetchingProducts = true
      const res = await fetchProductsApi()

      if (res.success) {
        this.products = res.data
      } else {
        this.error = res.error
      }

      this.fetchingProducts = false
    },
    async fetchSingleProduct(id) {
      this.fetchingProduct = true
      const res = await fetchProductApi(id)

      if (res.success) {
        this.currentProduct = res.data
      } else {
        this.error = res.error
      }

      this.fetchingProduct = false
    }
  }
})
