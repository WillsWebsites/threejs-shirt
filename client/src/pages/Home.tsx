import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { Button } from '../components'
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import state from '../store'

const Home = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src="../gold-logo.svg" alt="logo" className="w-full max-w-[200px] h-auto object-contain" />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">BOSSO.</h1>
            </motion.div>
            <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
              <p className="max-w-md font-normal text-gray-600 text-base">
                Modern design customization at your fingertips. Powered by AI.
              </p>
              <Button
                type="filled"
                title="Customize"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-3 font-bold text-small"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
