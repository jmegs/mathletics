import { atom } from "jotai"
import { atomWithReset, RESET } from "jotai/utils"
import { calculate } from "./helpers"
import type { Plate, Bar } from "./constants"

export const showAtom = atom(false)
export const barAtom = atom<Bar>("Default")
export const opAtom = atomWithReset(0)

export const displayAtom = atom(
  (get) => get(opAtom).toString(),
  (get, set, newValue: number | typeof RESET) => {
    let show = get(showAtom)
    const nextValue = (newValue: number | typeof RESET) => {
      if (newValue === RESET) return 0
      if (show) {
        set(showAtom, false)
        return newValue
      }
      let newOp = String(get(opAtom)) + String(newValue)
      return Number(newOp)
    }
    set(opAtom, nextValue(newValue))
  }
)

export const platesAtom = atom<Plate[] | null>(
  (get) => calculate(get(opAtom), get(barAtom))
)
