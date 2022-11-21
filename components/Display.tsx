import { plates, show, operand } from "../state"

const Display = () => {
  return (
    <div className="px-4 py-2 tracking-tighter grid grid-rows-2 gap-4">
      <div className="text-8xl leading-none text-right self-end">
        {operand.value}
      </div>
      <div className="text-4xl text-loContrast leading-none text-right">
        {show.value ? plates.value?.join(" ") : ""}
      </div>
    </div>
  )
}
export default Display
