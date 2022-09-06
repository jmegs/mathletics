<script setup lang="ts">
import type { Plate } from '~/composables';
type Colors = Record<Plate, string>
const props = defineProps<{ value: Plate }>()
const colors: Colors = {
  45: "bg-blue-400",
  35: "bg-yellow-400",
  25: "bg-green-400",
  15: "bg-slate-400",
  10: "bg-slate-400",
  5: "bg-blue-400",
  2.5: "bg-green-400"
}
const color = computed(() => colors[props.value])
const size = computed(() => props.value < 10 ? 'h-12 w-12' : 'h-16 w-16')
</script>

<template>
  <div :class="[color, size]" class="grid place-items-center rounded-full text-center">
    {{ props.value }}
  </div>
</template>

