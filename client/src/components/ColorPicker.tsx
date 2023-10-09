import { ColorResult, SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  const handleColorChange = (color: ColorResult) => {
    state.color = color.hex
  }
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker color={snap.color} disableAlpha onChange={handleColorChange} />
      <div className="py-2 px-3 bg-white">Hex color: {state.color}</div>
    </div>
  )
}

export default ColorPicker
