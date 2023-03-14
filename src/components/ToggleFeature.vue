<script setup>
import { storeToRefs } from 'pinia'
import Button from '../components/Button.vue'
import { useProductStore } from '../stores/product'
import { formatDate } from '../utils/methods'

const productStore = useProductStore()

const { isEnabled } = storeToRefs(productStore)

const handleFeatureToggle = () => {
  productStore.toggleListFeature()
}
</script>

<template>
  <div class="flex flex-col md:justify-between items-center md:flex-row p-5 bg-slate-100">
    <div class="p-10 font-medium text-[30px]">
      <div class="">
        Product list feature is <span v-if="isEnabled" class="text-green-500">Enabled</span>
        <span v-else class="text-red-500">Disabled</span>
      </div>
      <div class="text-[20px]">{{ formatDate(new Date()) }}</div>
    </div>
    <div class="flex">
      <Button @click="handleFeatureToggle">{{ isEnabled ? 'Disable' : 'Enable' }}</Button>
    </div>
  </div>
</template>
