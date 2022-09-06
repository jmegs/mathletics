<script setup lang="ts">
const props = defineProps<{ num: string }>()
const emit = defineEmits<{
  (e: 'press', value: string): void
}>()
</script>

<template>
  <button @click="emit('press', props.num)">{{ props.num }}</button>
</template>
