import { BARS } from "../constants";

type Bar = keyof typeof BARS

interface TabsProps {
  active: Bar,
  onChange: (bar: Bar) => void
}

const Tabs = ({ active, onChange }: TabsProps) => {
  return (
    <div className="flex gap-1 justify-center pt-2">
      {Object.keys(BARS).map((bar) => {
        return (
          <button
            onClick={() => onChange(bar as Bar)}
            className={`${active === bar ? 'bg-gray-100' : ''} px-3 py-1 rounded-sm`}
          >{bar}</button>)
      })}
    </div>
  )
}

export default Tabs
