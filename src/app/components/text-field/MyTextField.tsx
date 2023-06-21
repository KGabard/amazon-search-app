import { TextField, styled } from '@mui/material'
import { Field } from 'formik'

const StyledComponent = styled(TextField)(({ theme }) => ({
  '& label': {
    color: theme.palette.white.main,
    fontFamily: theme.typography.body.fontFamily,
    fontWeight: theme.typography.body.fontWeight,
    fontSize: theme.typography.body.fontSize,
  },
  '& input': {
    color: theme.palette.white.main,
    fontFamily: theme.typography.body.fontFamily,
    fontWeight: theme.typography.body.fontWeight,
    fontSize: theme.typography.body.fontSize,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.white.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& label.Mui-focused': {
    fontWeight: 'inherit',
    fontSize: 'inherit',
  },
  '& label.MuiFormLabel-filled': {
    fontWeight: 'inherit',
    fontSize: 'inherit',
  },
  '& .MuiFormHelperText-root': {
    fontFamily: theme.typography.bodySmallItalic.fontFamily,
    fontWeight: theme.typography.bodySmallItalic.fontWeight,
    fontSize: theme.typography.bodySmallItalic.fontSize,
    fontStyle: theme.typography.bodySmallItalic.fontStyle,
  },
}))

export default function MyTextField({ ...props }) {
  return <Field {...props} as={StyledComponent} />
}