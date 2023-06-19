'use client'

import { theme } from '@/styles/theme'
import Header from './components/header/Header'
import './globals.css'
import { ThemeProvider } from '@mui/material/styles'
import { lora, montserrat } from '@/styles/fonts'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

export const metadata = {
  title: 'Amazon search',
  description: 'Generated by create next app',
}

const httpLink = createHttpLink({
  uri: 'https://graphql.canopyapi.co/',
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token
  const token = process.env.NEXT_PUBLIC_CANOPY_API_TOKEN

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <html lang="en">
          <body
            className={`${lora.variable} ${montserrat.variable}`}
            style={{
              backgroundColor: theme.palette.neutral.secondary,
              color: theme.palette.white.main,
            }}
          >
            <Header />
            {children}
          </body>
        </html>
      </ApolloProvider>
    </ThemeProvider>
  )
}
