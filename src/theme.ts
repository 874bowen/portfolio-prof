// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
   global: (props: StyleFunctionProps) => ({
     body: {
       color: mode('#0D1B2A', '#E0E1DD')(props),
       bg: mode('#E0E1DD', '#0D1B2A')(props),
     },
   }),
 };
 
 const components = {
   Drawer: {
     // setup light/dark mode component defaults
     baseStyle: (props:any) => ({
       dialog: {
         bg: mode('red', 'pink')(props),
       },
     }),
   },
 };
// 3. extend the theme

const theme = extendTheme({ components, styles })

export default theme