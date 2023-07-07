import { theme } from '@/styles/theme'
import {
  Box,
  LinearProgress,
  Rating,
  SxProps,
  Theme,
  Typography,
  linearProgressClasses,
  styled,
} from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import StarIcon from '@mui/icons-material/Star'

type Props = {
  rating: number
  ratingsCount: number
  ratingsBreakdown: number[]
}

const containerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  backgroundColor: theme.palette.neutral.tertiary,
  color: theme.palette.white.main,
  pt: 3,
  pb: 3,
  pr: 4,
  pl: 4,
  width: '100%',
  maxWidth: '400px',
  overflow: 'hidden',
  borderRadius: 4,
  boxShadow: '5px 5px 16px rgba(0,0,0,0.5)',
}

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: '100%',
  height: '16px',
  borderRadius: '6px',
  marginLeft: '16px',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.white.light,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: '6px',
    backgroundColor: theme.palette.gold.main,
  },
}))

const starPercentageBar = (percentage: number, index: number) => {
  return (
    <li
      key={index}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Typography component={'span'} variant="body">
        {index + 1}
      </Typography>
      <StarIcon style={{ color: theme.palette.gold.main }} />
      <CustomLinearProgress variant="determinate" value={percentage} />
      <Typography component={'span'} variant="bodySmallItalic">{`${Math.round(
        percentage
      )}%`}</Typography>
    </li>
  )
}

export default function RatingsBreakdown({
  rating,
  ratingsCount,
  ratingsBreakdown,
}: Props) {
  const ratingsBreakdownCount = ratingsBreakdown.reduce(
    (acc, value) => acc + value,
    0
  ) // Sometimes ratingsCount is not equal to ratingsBreakdownCount that's why it better to do the math

  return (
    <Box sx={containerStyle}>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          alignItems: 'center',
        }}
      >
        <Rating
          defaultValue={rating}
          precision={0.5}
          readOnly
          size="medium"
          sx={{
            color: theme.palette.gold.main,
          }}
          emptyIcon={
            <StarBorderOutlinedIcon
              style={{ opacity: 0.5, color: theme.palette.gold.main }}
              fontSize="inherit"
            />
          }
        />
        <Typography component={'p'} variant="body">
          {`${rating} sur 5`}
        </Typography>
      </Box>
      <Typography component={'p'} variant="body">
        {`${ratingsCount} ratings`}
      </Typography>
      <ul
        style={{
          listStyle: 'none',
          margin: '16px 0 0 0',
          padding: 0,
          display: 'flex',
          flexDirection: 'column-reverse',
          gap: '6px',
        }}
      >
        {ratingsBreakdown.map((value, index) => {
          const percentage = (value / ratingsBreakdownCount) * 100
          return starPercentageBar(percentage, index)
        })}
      </ul>
    </Box>
  )
}
