<script setup>
const emit = defineEmits(['productClick'])
defineProps(['item'])
</script>

<template>
  <div
    id="product-card"
    class="p-3 border rounded h-[300px] w-[200px] shadow-md cursor-pointer"
    @click="emit('productClick', item)"
  >
    <div class="h-[60%] relative overflow-hidden">
      <img :src="item.image" class="w-[100%]" />
    </div>

    <div class="text-gray-600 mt-2 mb-2 h-[20%] text-[13px] text-ellipsis overflow-hidden ...">
      {{ item.title }}
    </div>
    <div class="text-green-600">
      $ <span class="text-[20px]">{{ item.price }}</span>
    </div>
  </div>
</template>
