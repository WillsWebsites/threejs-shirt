import { FC } from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'

interface TabItem {
  name: string
  icon: string
}

interface TabProps {
  tab: TabItem
  isFilter?: boolean
  isActive?: boolean
  handleClick: () => void
}

const Tab: FC<TabProps> = ({ tab, isFilter, isActive, handleClick }) => {
  const snap = useSnapshot(state)
  const activeStyles =
    isFilter && isActive
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 }

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilter ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${isFilter ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
      />
    </div>
  )
}

export default Tab
