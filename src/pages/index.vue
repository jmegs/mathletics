<script setup lang="ts">
import { BARS } from '~/composables/calculator';
import type { Bar } from '~/composables/calculator';
import type { CalcFunction } from '~/components/Keys.vue';

const selectedBar = ref<Bar>("Default")
const operand = ref<string>("0")
const target = computed(() => Number(operand.value))
const plates = useCalculator(target, selectedBar)
const show = ref(false)

function handleBarChange(selected: Bar) {
  selectedBar.value = selected
  console.log("Bar is:", selectedBar.value)
}

function handleDigit(num: number) {
  if (operand.value === "0") {
    operand.value = String(num)
  } else if (show.value) {
    operand.value = String(num)
    show.value = false
  } else {
    operand.value = operand.value + String(num)
  }
}

function handleFn(id: CalcFunction) {
  switch (id) {
    case "clear":
      show.value = false
      operand.value = "0"
      break;
    case "enter":
      show.value = true
      break;
    default:
      break;
  }
}
</script>

<template>
  <div class="Layout">
    <div class="Bars">
      <button class="Tab" :class="{ active: name === selectedBar }" v-for="(_, name) in BARS"
        @click="handleBarChange(name)">
        {{ name }}
      </button>
    </div>
    <div class="Target">
      {{ operand }}
    </div>
    <div class="Plates">
      <div v-if="show" class="h-full flex gap-3 flex-wrap items-center justify-center">
        <Plate v-for="value in plates" :value="value" />
      </div>
    </div>
    <div class="Keys">
      <Keys @digit="handleDigit" @fn="handleFn" />
    </div>
  </div>
</template>

<style scoped>
.Layout {
  display: grid;
  /* flex-direction: column; */
  grid-template-rows: auto 1fr 1fr auto;
  width: 100%;
  height: 100%;
  padding: 1rem;
}

.Target {
  font-size: 4rem;
  font-variant-numeric: tabular-nums;
  text-align: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Bars {
  margin-inline: auto;
  display: flex;
  gap: .25rem;
}

.Tab {
  padding: 0.25rem .5rem;
  border-radius: 3px;
}

.Tab.active {
  background-color: #f5f5f5;
}
</style>
