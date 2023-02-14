// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
   global: (props: StyleFunctionProps) => ({
     body: {
       color: mode('#22223B', '#OD1B2A')(props),
       bg: mode('#E0E1DD', '#$A4E69')(props),
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