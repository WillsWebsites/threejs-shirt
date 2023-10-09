import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useRef } from 'react'

const Backdrop = () => {
  const shadows = useRef(null)

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={1}
      scale={2}
      opacity={0.75}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight amount={4} radius={9} intensity={3} ambient={0.55} position={[5, 5, -10]} />
      <RandomizedLight amount={2} radius={5} intensity={1} ambient={0.65} position={[-5, 5, -9]} />
    </AccumulativeShadows>
  )
}

export default Backdrop
