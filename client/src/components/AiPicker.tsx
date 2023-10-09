import { Dispatch, FC, SetStateAction } from 'react'
import CustomButton from './CustomButton'

interface AiPickerProps {
  prompt: string
  setPrompt: Dispatch<SetStateAction<string>>
  generatingImg: boolean
  handleSubmit: (type: any) => void
}

const AiPicker: FC<AiPickerProps> = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton type="outline" title="asking ai" customStyles="text-sx" />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AiPicker
