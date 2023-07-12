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
      <AppBar
        position="static"
        sx={{
          height: 'fit-content',
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.white.main,
            display: 'flex',
            flexDirection: 'column',
            height: 'fit-content',
            pt: '16px',
            pb: '24px',

            [theme.breakpoints.up('sm')]: {
              flexDirection: 'row',
              pb: '16px',
            },
          }}
        >
          <Typography component="h1" variant="title" sx={{ flexGrow: 1 }}>
            Amazon Search
          </Typography>
          {!isHomePage && (
            <Link
              href={`/`}
              style={{
                display: 'flex',
                width: 'fit-content',
                gap: '6px',
                alignItems: 'center',
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
              <EastRoundedIcon />
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
