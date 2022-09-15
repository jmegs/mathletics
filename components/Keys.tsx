import { useAtom } from "jotai"
import { useResetAtom, useUpdateAtom } from "jotai/utils"
import type { Bar } from "../constants"
import type { PropsWithChildren } from 'react'
import { barAtom, opAtom, showAtom, displayAtom } from "../state"


const Digit = ({ val }: PropsWithChildren<{ val: number }>) => {
  const setNum = useUpdateAtom(displayAtom)

  return (
    <button
      className="bg-surface-2 active:opacity-75"
      onClick={() => setNum(val)}
    >
      {val}
    </button>
  )
}

const BarTab = ({ bar, children }: PropsWithChildren<{ bar: Bar }>) => {
  const [currentBar, setBar] = useAtom(barAtom)
  const sx = `${bar === currentBar ? 'bg-surface-2' : 'bg-surface-1'}`
  return (
    <button
      className={sx}
      onClick={() => setBar(bar)}
    >
      {children}
    </button>
  )
}

const Clear = () => {
  const [, setShow] = useAtom(showAtom)
  const resetNum = useResetAtom(displayAtom)
  return (
    <button
      className="bg-surface-2 active:opacity-75"
      onClick={() => {
        resetNum()
        setShow(false)
      }}
    >
      CLR
    </button>
  )
}

const Enter = () => {
  const [_, setShow] = useAtom(showAtom)
  return (
    <button
      className="bg-accent active:opacity-75"
      onClick={() => setShow(true)}
    >
      GO
    </button>
  )
}


const Keys = () => (
  <div className="KeysGrid pb-8 px-4">
    <BarTab bar="Default">REG</BarTab>
    <BarTab bar="Bella">BEL</BarTab>
    <BarTab bar="Trap">HEX</BarTab>
    <Digit val={7} />
    <Digit val={8} />
    <Digit val={9} />
    <Digit val={4} />
    <Digit val={5} />
    <Digit val={6} />
    <Digit val={1} />
    <Digit val={2} />
    <Digit val={3} />
    <Clear />
    <Digit val={0} />
    <Enter />
  </div>
)

export default Keys
