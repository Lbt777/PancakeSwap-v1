/*
 * @Author: lbt666 '1319451895@qq.com'
 * @Date: 2022-07-12 11:14:33
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-07-12 11:34:08
 * @Description: 
 */
import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/swap',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  }
]

export default config
