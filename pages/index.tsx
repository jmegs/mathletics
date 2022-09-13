import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { BARS, PLATES } from "../constants"
import Tabs from "../components/Tabs"
import Plates from "../components/Plates"
import Keys from "../components/Keys"

type Plate = typeof PLATES[number]
type Bar = keyof typeof BARS
// type CalcFn = "CLEAR" | "ENTER"

const calculate = (target: number, bar: Bar): Plate[] => {
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

const Home: NextPage = () => {

  let [show, toggle] = useState(false)
  let [operand, setOperand] = useState("0")
  let [bar, setBar] = useState<Bar>("Default")
  let [plates, setPlates] = useState<Plate[] | null>(null)

  const onDigit = (val: number) => {
    if (operand === "0") {
      setOperand(String(val))
    } else if (show) {
      setOperand(String(val))
      toggle(false)
    } else {
      setOperand(operand + val)
    }
  }

  const onFn = (fn: string) => {
    switch (fn) {
      case "CLEAR":
        toggle(false)
        setOperand("0")
        break;

      case "ENTER":
        toggle(true)

      default:
        break;
    }
  }

  useEffect(() => {
    let target = Number(operand)
    setPlates(calculate(target, bar))
  }, [operand, bar])

  return (
    <div className="bg-slate-50 h-full">

      <div className='grid grid-rows-[auto_1fr_1fr_auto] h-full gap-3 p-2 max-w-sm mx-auto bg-white'>
        <Tabs active={bar} onChange={setBar} />
        <div className="grid place-items-center">
          <h1 className='text-2xl'>{operand}</h1>
        </div>
        <div>
          {show && <Plates value={plates} />}
        </div>
        <Keys handleDigit={onDigit} handleFn={onFn} />
      </div>
    </div>
  )
}

export default Home
