import { Center, Environment } from '@react-three/drei'
import { Canvas as ThreeCanvas } from '@react-three/fiber'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'
import Shirt from './Shirt'

const Canvas = () => {
  return (
    <ThreeCanvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </ThreeCanvas>
  )
}

export default Canvas
