import { useAtom } from "jotai"
import { useState, useEffect } from "react"
import { calculate } from "../helpers"
import { displayAtom, barAtom, opAtom, showAtom, platesAtom } from "../state"

import type { Plate } from "../constants"

const Display = () => {
  const [display] = useAtom(displayAtom)
  const [show] = useAtom(showAtom)
  const [plates] = useAtom(platesAtom)

  return (
    <div className="px-4 py-2 tracking-tighter grid grid-rows-2 gap-4">
      <div className="text-8xl leading-none text-right self-end">
        {display}
      </div>
      <div className="text-4xl text-loContrast leading-none text-right">
        {show ? plates?.join(" "): ""}
      </div>
    </div>
  )
}
export default Display
