import { theme } from '@/styles/theme'
import { Button, Grid, Typography, styled } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-mui'
import { CSSProperties } from 'react'
import * as Yup from 'yup'

export const initialValues = {
  searchTerm: '',
}

export const validationSchema = Yup.object({
  searchTerm: Yup.string()
    .max(30, 'Search term should be shorter than 30 caracters')
    .min(2, 'Search term should be longer than 2 caracters')
    .required('Search term is required'),
})

const sectionStyle: CSSProperties = {
  backgroundColor: theme.palette.neutral.tertiary,
  padding: '32px',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '5px 5px 16px rgba(0,0,0,0.5)',
  color: theme.palette.white.main,
  width: '100%',
}

const MyTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    color: theme.palette.white.main,
    borderColor: theme.palette.white.main,
    borderWidth: 1,
    fontFamily: theme.typography.body.fontFamily,
    fontWeight: theme.typography.body.fontWeight,
    fontSize: theme.typography.body.fontSize,
  },
  '& input': {
    color: theme.palette.white.main,
    borderColor: theme.palette.primary.main, // Update the border color here
    borderWidth: 1,
    fontFamily: theme.typography.body.fontFamily,
    fontWeight: theme.typography.body.fontWeight,
    fontSize: theme.typography.body.fontSize,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.white.main,
      borderWidth: 1,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    // '&.Mui-focused fieldset': {
    //   borderColor: 'blue',
    // },
  },
  '& label.Mui-focused': {
    borderWidth: 1,
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    fontSize: 'inherit',
  },
}))

export default function SearchInput() {
  return (
    <section className="search-input" style={sectionStyle}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }}
      >
        {({ values, errors, isSubmitting, touched }) => (
          <Form autoComplete="off">
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Field
                  name="searchTerm"
                  component={MyTextField}
                  label="Search"
                  fullWidth
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

            {/* <pre
              style={{
                marginTop: '32px',
              }}
            >
              {JSON.stringify({ values, errors }, null, 4)}
            </pre> */}
          </Form>
        )}
      </Formik>
    </section>
  )
}
