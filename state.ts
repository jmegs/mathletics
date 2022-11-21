import { signal, computed } from "@preact/signals-react"
import { calculate } from "./helpers"
import { type Plate, type Bar } from "./constants"

export const stack = signal<number[]>([])
export const bar = signal<Bar>("Default")
export const show = signal<boolean>(false)
export const operand = computed<number>(() => Number(stack.value.join('')))
export const plates = signal<Plate[]>([])

export function send(digit: number) {
  if (show.value === true) {
    stack.value = []; show.value = false;
  }
  stack.value = [...stack.value, digit]
}

export function go() {
  set()
  show.value = true
}

export function clear() {
  show.value = false
  stack.value = []
}

export function changeBarTo(target: Bar) {
  bar.value = target
  if (show.value) { set() }
  
}

function set() {
  plates.value = calculate(operand.value, bar.value)
}

