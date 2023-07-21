'use client'

import { Container } from '@mui/material'
import './page.css'
import SearchListSection from './layouts/search-list/SearchListSection'
import SearchForm from './components/search-form/SearchForm'
import { useContext } from 'react'
import { searchDataContext } from '@/context/SearchDataContextProvider'
import { SearchDataType } from '@/models/SearchModel'
import { FormikHelpers } from 'formik'

export default function Home() {
  const { searchData, setSearchData } = useContext(searchDataContext)

  const handleFormSubmit = (
    values: SearchDataType,
    actions: FormikHelpers<SearchDataType>
  ) => {
    // console.log(values)
    setSearchData(values)
    actions.setSubmitting(false)
  }

  return (
    <main className="main">
      <Container
        sx={{ mt: 8, mb: 12, display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        <SearchForm
          initialValues={searchData}
          handleSubmit={handleFormSubmit}
        />
        <SearchListSection />
      </Container>
    </main>
  )
}
