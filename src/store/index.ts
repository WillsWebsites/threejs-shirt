import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#595c64',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './square-gold-logo.png',
  fullDecal: './square-gold-logo.png'
})

export default state
