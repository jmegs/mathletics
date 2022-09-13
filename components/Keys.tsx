interface KeysProps {
  handleDigit: (num: number) => void,
  handleFn: (fn: string) => void
}

export default function Keys({ handleDigit, handleFn }: KeysProps) {
  return (
    <div className="grid grid-cols-3 grid-rows-[repeat(4,64px)] gap-3">
      <button className="bg-slate-100 active:opacity-75" onClick={() => handleDigit(7)}>7</button>
      <button className="bg-slate-100 active:opacity-75" onClick={() => handleDigit(8)}>8</button>
      <button className="bg-slate-100 active:opacity-75" onClick={() => handleDigit(9)}>9</button>
      <button className="bg-slate-100 active:opacity-75" onClick={() => handleDigit(4)}>4</button>
      <button className="bg-slate-100 active:opacity-75" onClick={() => handleDigit(5)}>5</button>
      <button className="bg-slate-100 active:opacity-75" onClick={() => handleDigit(6)}>6</button>
      <button className="bg-slate-100 active:opacity-75" onClick={() => handleDigit(1)}>1</button>
      <button className="bg-slate-100 active:opacity-75" onClick={() => handleDigit(3)}>3</button>
      <button className="bg-slate-100 active:opacity-75" onClick={() => handleDigit(2)}>2</button>
      <button className="bg-red-200 active:opacity-75" onClick={() => handleFn("CLEAR")}>⌧</button>
      <button className="bg-slate-100 active:opacity-75" onClick={() => handleDigit(0)}>0</button>
      <button className="bg-blue-200 active:opacity-75" onClick={() => handleFn("ENTER")}>↵</button>
    </div>
  )
}
