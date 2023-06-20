import * as React from 'react'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { theme } from '@/styles/theme'

const ValidationTextField = styled(TextField)({
  '& label': {
    color: theme.palette.white.main,
    borderColor: theme.palette.white.main,
    borderWidth: 1,
  },
  '& input:valid + fieldset': {
    color: theme.palette.white.main,
    borderColor: theme.palette.white.main,
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: theme.palette.error.main,
    borderWidth: 1,
  },
  '& input:valid:focus + fieldset': {
    // borderLeftWidth: 4,
    // padding: '4px !important', // override inline-style
  },
})

export default function MyTextField() {
  return (
    // <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
    <ValidationTextField
      label="Search"
      // required
      variant="outlined"
      // defaultValue="Success"
      id="validation-outlined-input"
      fullWidth
    />
  )
}
