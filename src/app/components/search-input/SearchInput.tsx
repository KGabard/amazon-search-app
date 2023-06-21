import React, { CSSProperties, Dispatch, SetStateAction } from 'react'
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  useTheme,
  Theme,
  Grid,
  Typography,
} from '@mui/material'
import { SearchInputType } from '@/types'
import MyTextField from '../text-field/MyTextField'
import { theme } from '@/styles/theme'
import * as Yup from 'yup'

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

const domains = ['US', 'UK', 'FR']
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
                {/* {errors.search && touched.search && (
                  <Typography
                    component={'p'}
                    variant="bodySmallItalic"
                    color={theme.palette.error.main}
                    sx={{ mt: 0.5 }}
                  >
                    {errors.search}
                  </Typography>
                )} */}
              </Grid>

              <Grid item>
                <FormControl>
                  <InputLabel>Domain</InputLabel>
                  <Field as={Select} name="domain" label="Domain">
                    {domains.map((domain) => (
                      <MenuItem key={domain} value={domain}>
                        {domain}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>

              <Grid item>
                <FormControl>
                  <InputLabel>Sort</InputLabel>
                  <Field as={Select} name="sort" label="Sort">
                    {sortOptions.map((sort) => (
                      <MenuItem key={sort} value={sort}>
                        {sort}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
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
            <pre
              style={{
                marginTop: '32px',
              }}
            >
              {JSON.stringify({ values, errors }, null, 4)}
            </pre>
          </Form>
        )}
      </Formik>
    </section>
  )
}

// import { theme } from '@/styles/theme'
// import { SearchInputType } from '@/types'
// import { Button, Grid, Typography, styled } from '@mui/material'
// import { Form, Formik } from 'formik'
// import { CSSProperties, Dispatch, SetStateAction } from 'react'
// import * as Yup from 'yup'
// import MyTextField from '../text-field/MyTextField'
// import MySelectField from '../select-field/MySelectField'

// export const initialValues = {
//   search: '',
//   domain: 'US',
//   sort: 'FEATURED',
// }

// export const validationSchema = Yup.object({
//   search: Yup.string()
//     .max(30, 'Search term should be shorter than 30 caracters')
//     .min(2, 'Search term should be longer than 2 caracters')
//     .required('Search term is required'),
// })

// const sectionStyle: CSSProperties = {
//   backgroundColor: theme.palette.neutral.tertiary,
//   padding: '32px',
//   borderRadius: '16px',
//   overflow: 'hidden',
//   boxShadow: '5px 5px 16px rgba(0,0,0,0.5)',
//   color: theme.palette.white.main,
//   width: '100%',
// }

// type Props = {
//   setSearchInput: Dispatch<SetStateAction<SearchInputType>>
// }

// export default function SearchInput({ setSearchInput }: Props) {
//   return (
//     <section className="search-input" style={sectionStyle}>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={(values, actions) => {
//           setSearchInput(values)
//           actions.setSubmitting(false)
//         }}
//       >
//         {({ values, errors, isSubmitting, touched }) => (
//           <Form autoComplete="off">
// <Grid container direction="column" spacing={2}>
//   <Grid item>
//     <MyTextField name="search" label="Search" fullWidth />
//   </Grid>
//   <Grid item>
//     <MySelectField
//       name="domain"
//       label="Domain"
//       itemsList={['US', 'UK', 'FR']}
//     />
//   </Grid>
//   <Grid
//     item
//     sx={{
//       alignSelf: 'end',
//     }}
//   >
//     <Button
//       // disabled={isSubmitting}
//       type="submit"
//       variant="contained"
//       color="primary"
//     >
//       <Typography
//         component={'span'}
//         variant="subtitle"
//         sx={{ color: theme.palette.white.main }}
//       >
//         Search
//       </Typography>
//     </Button>
//   </Grid>
// </Grid>

//             <pre
//               style={{
//                 marginTop: '32px',
//               }}
//             >
//               {JSON.stringify({ values, errors }, null, 4)}
//             </pre>
//           </Form>
//         )}
//       </Formik>
//     </section>
//   )
// }
