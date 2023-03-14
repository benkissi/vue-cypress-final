<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '../stores/product'

import Button from '../components/Button.vue'

const route = useRoute()
const router = useRouter()
const productStore = useProductStore()
const id = route.params.id

const { currentProduct } = storeToRefs(productStore)

const handleRedirect = () => {
  router.push('/')
}

onMounted(() => {
  productStore.fetchSingleProduct(id)
})
</script>

<template>
  <div class="flex p-5">
    <div class="w-[50%] h-[600px] relative">
      <img :src="currentProduct?.image" class="object-contain h-[100%] w-[100%]" />
    </div>
    <div class="w-[50%]">
      <div class="text-2xl text-gray-600 mb-10">{{ currentProduct?.title }}</div>
      <div class="text-gray-500 text-[20px]">{{ currentProduct?.description }}</div>
      <div>
        <div class="text-green-600 text-[50px]">
          $ <span class="text-[100px]">{{ currentProduct?.price }}</span>
        </div>
      </div>
      <Button @click="handleRedirect">Back</Button>
    </div>
  </div>
</template>
