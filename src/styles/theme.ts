import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties
    subtitle: React.CSSProperties
    body: React.CSSProperties
    bodyItalic: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties
    subtitle?: React.CSSProperties
    body?: React.CSSProperties
    bodyItalic?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true
    subtitle: true
    body: true
    bodyItalic: true
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
      tertiary: '#1e3b3b',
    },
  },
  typography: {
    title: {
      fontSize: '32px',
      fontWeight: 400,
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
    // Disable h6 variant
    h6: undefined,
  },
})
