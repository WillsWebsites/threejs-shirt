import { FC } from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'

interface CustomButtonProps {
  type: string
  title: string
  customStyles?: string
  handleClick: () => void
}

const CustomButton: FC<CustomButtonProps> = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state)

  const generateStyles = () => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: 'white'
      }
    }
  }
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyles()}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
