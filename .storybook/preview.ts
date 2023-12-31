import type { Preview } from '@storybook/react'

import { ThemeProvider, CssBaseline } from '@mui/material'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { theme } from '../src/styles/theme'

/* TODO: update import for your custom Material UI themes */
// import { lightTheme, darkTheme } from '../path/to/themes';

// Import your fontface CSS files here
// Don't have any? We recommend installing and using @fontsource/roboto
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'

import '@fontsource/share/400.css'
import '@fontsource/share/700.css'

import '@fontsource/raleway/400.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/400-italic.css'
import '@fontsource/raleway/700-italic.css'

import '@fontsource/material-icons'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      // Uncomment for theme switching
      Provider: ThemeProvider,
      themes: {
        // Provide your custom themes here
        light: theme,
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
