import { createDarkTheme, createLightTheme, type BrandVariants } from '@fluentui/react-components'

export const myNewTheme: BrandVariants = {
  10: '#050109',
  20: '#1B0E39',
  30: '#28116C',
  40: '#2F1098',
  50: '#340CC7',
  60: '#3702F7',
  70: '#5321FF',
  80: '#6B38FF',
  90: '#7F4DFF',
  100: '#9160FF',
  110: '#A072FF',
  120: '#AF84FF',
  130: '#BC97FF',
  140: '#C9A9FF',
  150: '#D5BBFF',
  160: '#E1CDFF',
}

export const lightTheme = createLightTheme(myNewTheme)
export const darkTheme = createDarkTheme(myNewTheme)

darkTheme.colorBrandForeground1 = myNewTheme[110]
darkTheme.colorBrandForeground2 = myNewTheme[120]
