import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties
    subtitle: React.CSSProperties
    body: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties
    subtitle?: React.CSSProperties
    body?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true
    subtitle: true
    body: true
    h6: false
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    white: Palette['primary']
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary']
    white: PaletteOptions['primary']
  }

  interface PaletteColor {
    primary?: string
    secondary?: string
    tertiary?: string
  }

  interface SimplePaletteColorOptions {
    primary?: string
    secondary?: string
    tertiary?: string
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ed8707',
    },
    white: {
      main: '#F5F5F5',
    },
    neutral: {
      main: '#a6afaf',
      secondary: '#2f4f4f',
      tertiary: '#142929',
    },
  },
  typography: {
    title: {
      fontSize: '32px',
      fontWeight: 600,
      fontFamily: 'var(--font-montserrat)',
    },
    subtitle: {
      fontSize: '24px',
      fontWeight: 400,
      fontFamily: 'var(--font-montserrat)',
    },
    body: {
      fontSize: '18px',
      fontWeight: 400,
      fontFamily: 'var(--font-lora)',
    },
    // Disable h6 variant
    h6: undefined,
  },
})
