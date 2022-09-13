import { PLATES } from "../constants"
import cn from "classnames"
type Plate = typeof PLATES[number]

interface PlatesProps {
  value: Plate[] | null
}

const colors: Record<Plate, string> = {
  45: "bg-blue-400",
  35: "bg-yellow-400",
  25: "bg-green-400",
  15: "bg-slate-400",
  10: "bg-slate-400",
  5: "bg-blue-400",
  2.5: "bg-green-400"
} as const

const getSize = (val: Plate) => val < 10 ? 'h-12 w-12' : 'h-16 w-16'

const Plate = ({ val }: { val: Plate }) => {
  let sx = cn(
    "grid place-items-center rounded-full text-center",
    colors[val],
    getSize(val)
  )

  return (
    <div className={sx}>{val}</div>
  )
}

export default function Plates({ value }: PlatesProps) {
  return (
    <div>
      {value && (
        <div className="flex px-8 mx-auto gap-3 flex-wrap items-center justify-center">
          {value.map((p) => <Plate val={p} />)}
        </div>
      )}
    </div>
  )
}
