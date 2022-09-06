import { ref, isRef, unref, watchEffect } from "vue"
import type { Ref } from "vue"

export const BARS = {
  Default: 45,
  Bella: 35,
  Trap: 65,
  Safety: 75
}

export const PLATES = [45, 35, 25, 15, 10, 5, 2.5] as const

export type Plate = typeof PLATES[number]
export type Bar = keyof typeof BARS


export function useCalculator(target: Ref<number>, bar: Ref<Bar>) {
  const result = ref<Plate[]>([])

  function calculate() {
    console.log({ target, bar })
    // reset state before calculating
    result.value = []

    let remaining = (unref(target) - BARS[unref(bar)]) / 2

    for (let plate of PLATES) {
      if (remaining < plate) continue
      let count = 0
      while (count < Math.floor(remaining / plate)) {
        count++
        result.value.push(plate)
      }
      remaining = remaining % plate
    }
  }

  if (isRef(target) && isRef(bar)) {
    watchEffect(calculate)
  } else {
    calculate()
  }
  return result
}



// export function oldCalc(target: number, bar: Bar): Plate[] {
//   let remaining = (target - BARS[bar]) / 2
//   let result: Plate[] = []

//   for (let plate of PLATES) {
//     if (remaining < plate) continue
//     let count = 0
//     while (count < Math.floor(remaining / plate)) {
//       count++
//       result.push(plate)
//     }
//     remaining = remaining % plate
//   }
//   return result
// }
