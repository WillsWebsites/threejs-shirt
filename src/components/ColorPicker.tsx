import { ColorResult, SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  const handleColorChange = (color: ColorResult) => {
    console.log(color)
    state.color = color.hex
  }
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker color={snap.color} disableAlpha onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker
