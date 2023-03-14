<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const emit = defineEmits(['click'])
</script>

<template>
  <div
    @click="emit('click')"
    class="text-center btn border rounded-md py-3 px-5 bg-white cursor-pointer hover:bg-gray-50"
  >
    <slot></slot>
  </div>
</template>
