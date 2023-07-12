import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties
    subtitle: React.CSSProperties
    body: React.CSSProperties
    bodyItalic: React.CSSProperties
    bodySmallItalic: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties
    subtitle?: React.CSSProperties
    body?: React.CSSProperties
    bodyItalic?: React.CSSProperties
    bodySmallItalic?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true
    subtitle: true
    body: true
    bodyItalic: true
    bodySmallItalic: true
    h6: false
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    white: Palette['primary']
    gold: Palette['primary']
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary']
    white: PaletteOptions['primary']
    gold: PaletteOptions['primary']
  }

  interface PaletteColor {
    primary?: string
    secondary?: string
    tertiary?: string
    transparent?: string
  }

  interface SimplePaletteColorOptions {
    primary?: string
    secondary?: string
    tertiary?: string
    transparent?: string
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ed8707',
    },
    white: {
      light: '#FEFEFE',
      main: '#F5F5F5',
      transparent: 'rgba(255,255,255,0.5)',
    },
    gold: {
      main: '#ffc02d',
    },
    neutral: {
      main: '#a6afaf',
      secondary: '#2f4f4f',
      tertiary: '#1e3b3b',
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
      fontFamily: 'var(--font-share)',
    },
    body: {
      fontSize: '18px',
      fontWeight: 400,
      fontFamily: 'var(--font-raleway)',
    },
    bodyItalic: {
      fontSize: '18px',
      fontWeight: 400,
      fontStyle: 'italic',
      fontFamily: 'var(--font-raleway)',
    },
    bodySmallItalic: {
      fontSize: '16px',
      fontWeight: 400,
      fontStyle: 'italic',
      fontFamily: 'var(--font-raleway)',
    },
    // Disable h6 variant
    h6: undefined,
  },
})
