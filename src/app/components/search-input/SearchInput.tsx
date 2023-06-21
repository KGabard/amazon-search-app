import React, { CSSProperties, Dispatch, SetStateAction } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import { Button, Grid, Typography } from '@mui/material'
import { SearchInputType } from '@/types'
import MyTextField from '../text-field/MyTextField'
import { theme } from '@/styles/theme'
import * as Yup from 'yup'
import MySelectField from '../select-field/MySelectField'

interface FormData {
  search: string
  domain: string
  sort: string
}

export const initialValues: FormData = {
  search: '',
  domain: '',
  sort: '',
}

const validationSchema = Yup.object({
  search: Yup.string()
    .max(30, 'Search term should be shorter than 30 caracters')
    .min(2, 'Search term should be longer than 2 caracters')
    .required('Search term is required'),
  domain: Yup.string().required('Domain is required'),
  sort: Yup.string().required('Sort is required'),
})

const domainOptions = ['US', 'UK', 'FR']
const sortOptions = ['FEATURE', 'PRICE', 'RATING']

const sectionStyle: CSSProperties = {
  backgroundColor: theme.palette.neutral.tertiary,
  padding: '32px',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '5px 5px 16px rgba(0,0,0,0.5)',
  color: theme.palette.white.main,
  width: '100%',
}

type Props = {
  setSearchInput: Dispatch<SetStateAction<SearchInputType>>
}

export default function SearchInput({ setSearchInput }: Props) {
  const handleSubmit = (values: FormData, actions: FormikHelpers<FormData>) => {
    console.log(values)
    setSearchInput(values)
    actions.setSubmitting(false)
  }

  return (
    <section className="search-input" style={sectionStyle}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, isSubmitting, touched }) => (
          <Form autoComplete="off">
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <MyTextField
                  name="search"
                  label="Search"
                  fullWidth
                  error={errors.search && touched.search}
                  helperText={
                    errors.search && touched.search ? errors.search : ''
                  }
                />
              </Grid>

              <Grid item sx={{ display: 'flex', gap: 2 }}>
                <MySelectField
                  options={domainOptions}
                  muiAttributes={{
                    name: 'domain',
                    label: 'Domain',
                    error: errors.domain && touched.domain,
                    helperText:
                      errors.domain && touched.domain ? errors.domain : '',
                    style: { width: '200px' },
                  }}
                />
                <MySelectField
                  options={sortOptions}
                  muiAttributes={{
                    name: 'sort',
                    label: 'Sort',
                    error: errors.sort && touched.sort,
                    helperText: errors.sort && touched.sort ? errors.sort : '',
                    style: { width: '200px' },
                  }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  alignSelf: 'end',
                }}
              >
                <Button
                  // disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  <Typography
                    component={'span'}
                    variant="subtitle"
                    sx={{ color: theme.palette.white.main }}
                  >
                    Search
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </section>
  )
}
