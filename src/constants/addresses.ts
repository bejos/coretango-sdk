import { AddressMap } from '../types'
import { ChainId } from '../enums'

export const FLEXUSD_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x7b2B3C5308ab5b2a1d9a94d20D35CCDf61e05b72'
}

export const FACTORY_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xfAfFa2d8e0998b71B4270859E09FFf4f0be9B6Dc',
  [ChainId.SMARTBCH_AMBER]: '0x036ed8fa21a8f217Ad33facB6ae6ABEf346CD41a'
}

export const ROUTER_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x9d85FAE650Fc637744BE410D949e0d8f5B163110',
  [ChainId.SMARTBCH_AMBER]: '0xeE243671a3Cd09cce1887cA9D4aCB2Eb8e504BdA'
}

export const TANGOROLL_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x58C85c22F521733cC12EE12D569963605a433Cc4',
  [ChainId.SMARTBCH_AMBER]: '0x226Cf71d43EB4e20570ff07228Fc115e7C9e3373'
}

export const TANGO_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xa4ff4B493CF2a0c90B214148e08C027FC09e254b',
  [ChainId.SMARTBCH_AMBER]: '0xA13469C2D531AEc9b7a1445C1f00f36D17BD93b5'
}

export const MASTERCHEF_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xfb0fb0d88e510eC948E8aDe62D0da170Db5101d4',
  [ChainId.SMARTBCH_AMBER]: '0x184B1f2F2839f90a5109Eb738a074b370B73773E'
}

export const BAR_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x3E66c8B9DE0807c34ECA1A48B711394E4eBd85E8',
  [ChainId.SMARTBCH_AMBER]: '0x156e548342b14C09Cc85955799Fc451aAaCFe40b'
}

export const MAKER_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x4ec896A9BE85DeF21dfc9fF5EF30e1F452839026',
  [ChainId.SMARTBCH_AMBER]: '0x084d40C7B7a7cf35cd47a4351bcB869e4187f690'
}

export const BENTOBOX_ADDRESS: AddressMap = {}
export const KASHI_ADDRESS: AddressMap = {}
export const STOP_LIMIT_ORDER_ADDRESS: AddressMap = {}

export const WBCH_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04',
  [ChainId.SMARTBCH_AMBER]: '0x17F4FCF5b6E0A95D4eE331c8529041896A073F9b'
}

export const WNATIVE_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: WBCH_ADDRESS[ChainId.SMARTBCH],
  [ChainId.SMARTBCH_AMBER]: WBCH_ADDRESS[ChainId.SMARTBCH_AMBER],
}

export const MASTERCHEF_V2_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '',
  [ChainId.SMARTBCH_AMBER]: '',
}

export const ENS_REGISTRAR_ADDRESS: AddressMap = {}

export const MULTICALL2_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x3718e9C405D0bC779870355C34fb5624196A1cAA',
  [ChainId.SMARTBCH_AMBER]: '0xFb02AE15114268470108eC79de69B05c2629Caf7',
}

export const BORING_HELPER_ADDRESS: AddressMap = {}
