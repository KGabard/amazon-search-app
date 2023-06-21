import { Field } from 'formik'
import MenuItem from '@mui/material/MenuItem'
// import { Select } from 'formik-mui'
import { styled, Select } from '@mui/material'

const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: 'blue',
    borderColor: 'blue',
    borderWidth: 1,
    fontFamily: theme.typography.title.fontFamily,
    fontWeight: theme.typography.title.fontWeight,
    fontSize: theme.typography.title.fontSize,
    minHeight: 'auto !important',
  },
  'label': {
    color: 'blue !important',
    borderColor: 'blue',
    borderWidth: 1,
    fontFamily: theme.typography.title.fontFamily,
    fontWeight: theme.typography.title.fontWeight,
    fontSize: theme.typography.title.fontSize,
    minHeight: 'auto !important',
    backgroundColor: 'blue',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'blue',
    borderWidth: 1,
  },

  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'blue',
  },
}))

// const StyledLabel = styled('label')(({ theme }) => ({
//   color: 'blue',
//   fontFamily: theme.typography.title.fontFamily,
//   fontWeight: theme.typography.title.fontWeight,
//   fontSize: theme.typography.title.fontSize,
//   '&.Mui-focused': {
//     color: 'green',
//     borderColor: 'green',
//   },
// }));

type Props = {
  name: string
  label: string
  itemsList: string[]
}

export default function MySelectField({ name, label, itemsList }: Props) {
  return (
    <Field
      component={Select}
      sx={{ minWidth: '244px' }}
      // formControl={{ sx: FormControl }}
      // formHelperText={{ children: 'How old are you?' }}
      id={name}
      name={name}
      // labelId="age-simple"
      label={label}
    >
      {itemsList.length > 0 &&
        itemsList.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          )
        })}
    </Field>
  )
}


// import { Field } from 'formik'
// import MenuItem from '@mui/material/MenuItem'
// // import { Select } from 'formik-mui'
// import { styled, Select } from '@mui/material'

// const StyledSelect = styled(Select)(({ theme }) => ({
//   '& .MuiInputBase-input': {
//     color: 'blue',
//     borderColor: 'blue',
//     borderWidth: 1,
//     fontFamily: theme.typography.title.fontFamily,
//     fontWeight: theme.typography.title.fontWeight,
//     fontSize: theme.typography.title.fontSize,
//     minHeight: 'auto !important',
//   },
//   'label': {
//     color: 'blue !important',
//     borderColor: 'blue',
//     borderWidth: 1,
//     fontFamily: theme.typography.title.fontFamily,
//     fontWeight: theme.typography.title.fontWeight,
//     fontSize: theme.typography.title.fontSize,
//     minHeight: 'auto !important',
//     backgroundColor: 'blue',
//   },
//   '& .MuiOutlinedInput-notchedOutline': {
//     borderColor: 'blue',
//     borderWidth: 1,
//   },

//   '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
//     borderColor: 'blue',
//   },
// }))

// // const StyledLabel = styled('label')(({ theme }) => ({
// //   color: 'blue',
// //   fontFamily: theme.typography.title.fontFamily,
// //   fontWeight: theme.typography.title.fontWeight,
// //   fontSize: theme.typography.title.fontSize,
// //   '&.Mui-focused': {
// //     color: 'green',
// //     borderColor: 'green',
// //   },
// // }));

// type Props = {
//   name: string
//   label: string
//   itemsList: string[]
// }

// export default function MySelectField({ name, label, itemsList }: Props) {
//   return (
//     <Field
//       component={Select}
//       sx={{ minWidth: '244px' }}
//       // formControl={{ sx: FormControl }}
//       // formHelperText={{ children: 'How old are you?' }}
//       id={name}
//       name={name}
//       // labelId="age-simple"
//       label={label}
//     >
//       {itemsList.length > 0 &&
//         itemsList.map((item, index) => {
//           return (
//             <MenuItem key={index} value={item}>
//               {item}
//             </MenuItem>
//           )
//         })}
//     </Field>
//   )
// }
