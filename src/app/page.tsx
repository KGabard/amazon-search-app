'use client'

import { Container } from '@mui/material'
import './page.css'
import SearchListSection from './layouts/search-list/SearchListSection'
import SearchForm from './components/search-form/SearchForm'

export default function Home() {
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
