import { Center, Environment, OrbitControls } from '@react-three/drei'
import { Canvas as ThreeCanvas } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import state from '../store'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'
import Shirt from './Shirt'

const Canvas = () => {
  const snap = useSnapshot(state)
  return (
    <ThreeCanvas
      shadows
      // camera={{ position: [0, 0, 0], fov: 25 }}
      camera={snap.intro ? { position: [0, 0, 0], fov: 25 } : { position: [0, 0, 3], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <>{snap.intro && <Backdrop />}</>
        <Center>
          <Shirt />
        </Center>
      </CameraRig>

      {!snap.intro && <OrbitControls />}
    </ThreeCanvas>
  )
}

export default Canvas
