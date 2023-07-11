'use client'

import { Container } from '@mui/material'
import './page.css'
import SearchListSection from './layouts/search-list/SearchListSection'
import { useContext } from 'react'
import SearchForm from './components/search-form/SearchForm'
import { searchDataContext } from '@/context/SearchDataContextProvider'

export default function Home() {
  const { searchData } = useContext(searchDataContext)

  console.log('searchData in home page : ', searchData)

  return (
    <main className="main">
      <Container
        sx={{ mt: 8, mb: 12, display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        <SearchForm />
        <SearchListSection />
      </Container>
    </main>
  )
}
