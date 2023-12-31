'use client'

import { theme } from '@/styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import { montserrat, raleway, share } from '@/styles/fonts'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import SearchDataContextProvider from '@/context/SearchDataContextProvider'
import Header from '@/app/components/header/Header'

const httpLink = createHttpLink({
  uri: 'https://graphql.canopyapi.co/',
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token (only in production env)
  const token =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_CANOPY_API_TOKEN
      : ''

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token !== '' ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <SearchDataContextProvider>
          <html lang="en">
            <body
              className={`${montserrat.variable} ${share.variable} ${raleway.variable}`}
              style={{
                backgroundColor: theme.palette.neutral.secondary,
                color: theme.palette.white.main,
              }}
            >
              <Header />
              {children}
            </body>
          </html>
        </SearchDataContextProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}
