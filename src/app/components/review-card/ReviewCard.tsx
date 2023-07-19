import { ReviewType } from '@/types'
import { Box, Paper, Typography, styled } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { formatReviewTitle } from '@/lib/utils'

type Props = {
  review: ReviewType
}

const CustomCardContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  backgroundColor: theme.palette.neutral.tertiary,
  color: theme.palette.white.main,
  padding: '32px',
  width: '100%',
  overflow: 'hidden',
  borderRadius: '16px',
  boxShadow: '5px 5px 16px rgba(0,0,0,0.5)',
}))

export default function ReviewCard({ review }: Props) {
  return (
    <CustomCardContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            float: 'left',
            width: 'fit-content',
            mr: 2,
          }}
        >
          <Typography component={'p'} variant="bodyItalic">
            {review.rating}
          </Typography>
          <StarIcon />
        </Box>
        <Typography component={'h3'} variant="subtitle">
          {formatReviewTitle(review.title)}
        </Typography>
      </Box>
      <Typography
        component={'p'}
        variant="body"
        sx={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 10,
          overflow: 'hidden',
        }}
      >
        {review.body}
      </Typography>
    </CustomCardContainer>
  )
}
