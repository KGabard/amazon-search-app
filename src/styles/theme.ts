import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true
    h6: false
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ed8707',
    },
  },
  typography: {
    title: {
      fontSize: '32px',
      fontWeight: 700,
      fontFamily: 'var(--font-montserrat)',
    },
    // Disable h6 variant
    h6: undefined,
  },
})
