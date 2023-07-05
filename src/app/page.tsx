'use client'

import { Container } from '@mui/material'
import './page.css'
import SearchListSection from './layouts/search-list/SearchListSection'
import { useState } from 'react'
import SearchForm, { initialValues } from './components/search-form/SearchForm'
import { SearchInputType } from '@/types'
import SearchModel from '@/models/SearchModel'

export default function Home() {
  const [searchInput, setSearchInput] = useState<SearchInputType>(new SearchModel(initialValues).searchData)

  // console.log(searchInput)

  return (
    <main className="main">
      <Container
        sx={{ mt: 8, mb: 12, display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        <SearchForm setSearchInput={setSearchInput} />
        <SearchListSection searchInput={searchInput} />
      </Container>
    </main>
  )
}
