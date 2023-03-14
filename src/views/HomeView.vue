<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/product'
import ToggleFeature from '../components/ToggleFeature.vue'
import ProductCard from '../components/ProductCard.vue'
import Spinner from '../assets/Spinner.vue'

const router = useRouter()
const productStore = useProductStore()
const { isEnabled, fetchingProducts, products } = storeToRefs(productStore)

const handleRedirect = (product) => {
  router.push({ name: 'product', params: { id: product.id } })
}

watch(
  () => isEnabled.value,
  (newValue) => {
    if (newValue) {
      productStore.fetchProducts()
    }
  }
)
</script>

<template>
  <div><ToggleFeature /></div>
  <div class="flex justify-center items-center h-full p-10">
    <div v-if="fetchingProducts"><Spinner /></div>
    <div class="flex flex-wrap">
      <div v-for="product in products" :key="product.id">
        <div class="mr-5 mb-5">
          <ProductCard @product-click="handleRedirect" :item="product" />
        </div>
      </div>
    </div>
  </div>
</template>
