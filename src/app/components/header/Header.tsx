'use client'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import EastRoundedIcon from '@mui/icons-material/EastRounded'

import { usePathname } from 'next/navigation'

import { useTheme } from '@mui/material/styles'
import Link from 'next/link'

export default function Header() {
  const theme = useTheme()

  const pathname = usePathname()

  const isHomePage = pathname === '/'

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.white.main,
            height: 'var(--header-height)',
          }}
        >
          <Typography component="h1" variant="title" sx={{ flexGrow: 1 }}>
            Amazon Search
          </Typography>
          {!isHomePage && (
            <Box
              sx={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center',
              }}
            >
              <Link
                href={`/`}
                style={{
                  display: 'inline-block',
                  width: 'fit-content',
                }}
              >
                <Typography
                  component={'span'}
                  variant="subtitle"
                  sx={{
                    textDecoration: 'underline',
                    textDecorationThickness: '2px',
                    textUnderlineOffset: '4px',
                  }}
                >
                  Back to Search
                </Typography>
              </Link>
              <EastRoundedIcon />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
