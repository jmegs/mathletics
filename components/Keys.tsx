import type { Bar } from "../constants"
import type { PropsWithChildren } from 'react'
import { send, bar as currentBar, changeBarTo, clear as clearFn, go } from "../state"


const Digit = ({ val }: PropsWithChildren<{ val: number }>) => {
  return (
    <button
      className="bg-surface-2 active:opacity-75"
      onClick={() => send(val)}
    >
      {val}
    </button>
  )
}

const BarTab = ({ bar, children }: PropsWithChildren<{ bar: Bar }>) => {
  const sx = `${bar === currentBar.value ? 'bg-surface-2' : 'bg-surface-1'}`
  return (
    <button
      className={sx}
      onClick={() => changeBarTo(bar)}
    >
      {children}
    </button>
  )
}

const Clear = () => {
  return (
    <button
      className="bg-surface-2 active:opacity-75"
      onClick={clearFn}>
      CLR
    </button>
  )
}

const Enter = () => {

  return (
    <button
      className="bg-accent active:opacity-75"
      onClick={go}
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
