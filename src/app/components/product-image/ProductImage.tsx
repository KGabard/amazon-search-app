import { Box, Skeleton, Typography, styled } from '@mui/material'
import Image from 'next/image'

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 'fit-content',
  aspectRatio: 0.9,
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: theme.palette.white.light,
  boxShadow: '5px 5px 20px rgba(0,0,0,0.5)',
}))

const ImageSkeleton = styled(Skeleton)(({ theme }) => ({
  width: '100%',
  height: 'fit-content',
  aspectRatio: 0.9,
  borderRadius: '16px',
  backgroundColor: theme.palette.white.transparent,
  boxShadow: '5px 5px 20px rgba(0,0,0,0.5)',
}))

type Props = {
  loading?: boolean
  pictureUrl?: string
  title?: string
}

export default function ProductImage({ loading, pictureUrl, title }: Props) {
  return loading ? (
    <ImageSkeleton variant="rectangular" />
  ) : (
    <ImageContainer>
      {pictureUrl && title ? (
        <Image
          src={pictureUrl}
          alt={title}
          fill={true}
          style={{
            objectFit: 'contain',
          }}
          sizes={'(max-width: 768px) 100vw'}
        />
      ) : (
        <Typography
          component={'p'}
          variant="subtitle"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          Image data incomplete.
        </Typography>
      )}
    </ImageContainer>
  )
}
