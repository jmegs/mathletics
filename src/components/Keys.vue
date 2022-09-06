<script setup lang="ts">
export type CalcFunction = "clear" | "enter"

const emit = defineEmits<{
  (e: 'fn', type: CalcFunction): void,
  (e: 'digit', value: number): void
}>()

function handleFn(id: CalcFunction) {
  emit("fn", id)
}

function handleDigit(num: number) {
  emit('digit', num)
}
</script>

<template>
  <div class="Keyboard">
    <button class="Digit bg-slate-100" @click="handleDigit(7)">7</button>
    <button class="Digit bg-slate-100" @click="handleDigit(8)">8</button>
    <button class="Digit bg-slate-100" @click="handleDigit(9)">9</button>
    <button class="Digit bg-slate-100" @click="handleDigit(4)">4</button>
    <button class="Digit bg-slate-100" @click="handleDigit(5)">5</button>
    <button class="Digit bg-slate-100" @click="handleDigit(6)">6</button>
    <button class="Digit bg-slate-100" @click="handleDigit(1)">1</button>
    <button class="Digit bg-slate-100" @click="handleDigit(2)">2</button>
    <button class="Digit bg-slate-100" @click="handleDigit(3)">3</button>
    <button class="Function Clear bg-red-200" @click="handleFn('clear')">⌧</button>
    <button class="Digit bg-slate-100" @click="handleDigit(0)">0</button>
    <button class="Function Enter bg-blue-200" @click="handleFn('enter')">↵</button>
  </div>
</template>

<style scoped>
.Keyboard {
  display: grid;
  grid-template-rows: repeat(4, 4.5rem);
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

:is(.Digit, .Function):active {
  outline: 1px solid;
}
</style>
