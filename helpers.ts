import { PLATES, BARS } from "./constants"
import type { Plate, Bar } from "./constants"

export const calculate = (target: number, bar: Bar): Plate[] => {
  let result: Plate[] = []
  let remaining = (target - BARS[bar]) / 2
  for (let plate of PLATES) {
    if (remaining < plate) continue
    let count = 0
    while (count < Math.floor(remaining / plate)) {
      count++
      result.push(plate)
    }
    remaining = remaining % plate
  }
  return result
}
