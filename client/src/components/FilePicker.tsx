import { Dispatch, FC, SetStateAction } from 'react'
import CustomButton from './CustomButton'

interface FilePickerProps {
  file: File | ''
  setFile: Dispatch<SetStateAction<File | ''>>
  readFile: (type: any) => void
}

const FilePicker: FC<FilePickerProps> = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-1 flex-col">
        <label htmlFor="file-upload" className="filepicker-label">
          Upload file
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={e => setFile(e.target.files ? e.target.files[0] : '')}
        />

        <p className="mt-2 text-gray-500 text-xs truncate">{file === '' ? 'No file selected' : file.name}</p>

        <div className="mt-4 flex flex-warp gap-3">
          <CustomButton type="outline" title="Logo" handleClick={() => readFile('logo')} customStyles="text-xs" />
          <CustomButton type="filled" title="Full" handleClick={() => readFile('full')} customStyles="text-xs" />
        </div>
      </div>
    </div>
  )
}

export default FilePicker
