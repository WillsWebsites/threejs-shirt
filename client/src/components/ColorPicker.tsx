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
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={handleColorChange}
        presetColors={['#52555a', '#7e8b9a', '#7e705c', '#6b806f', '#739e99', '#615868', '#685861', '#6c4042']}
      />
      <div className="py-2 px-3 bg-white">Hex color: {state.color}</div>
    </div>
  )
}

export default ColorPicker
