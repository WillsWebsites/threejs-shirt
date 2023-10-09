import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { FC, useRef } from 'react'
import { Group, Object3DEventMap } from 'three'
import { useSnapshot } from 'valtio'
import state from '../store'

interface CameraRigProps {
  children: JSX.Element | JSX.Element[]
}

const CameraRig: FC<CameraRigProps> = ({ children }) => {
  const camera = useRef<Group<Object3DEventMap>>(null)
  const snap = useSnapshot(state)

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260
    const isMobile = window.innerWidth <= 600

    let targetPosition: [number, number, number] = [-0.4, 0, 2]

    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2]
      if (isMobile) targetPosition = [0, 0.2, 2.5]
      if (camera && camera?.current) {
        easing.dampE(camera.current.rotation, [state.pointer.x / 4, -state.pointer.y / 3, 0], 0.25)
      }
      easing.damp3(state.camera.position, targetPosition, 0.25, delta)
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5]
      else targetPosition = [0, 0, 2]
      // if (camera && camera?.current) {
      //   easing.dampE(camera.current.rotation, [0, 0, 0], 0.25)
      // }
    }
  })

  return <group ref={camera}>{children}</group>
}

export default CameraRig
