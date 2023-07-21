import { theme } from '@/styles/theme'
import { Box, Skeleton, Typography, styled } from '@mui/material'
import Link from 'next/link'

const ContainerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  color: theme.palette.white.main,
}))

type Props = {
  loading?: boolean
  title?: string
  price?: string
  brand?: string
  url?: string
}

export default function ProductDescription({
  loading,
  title,
  price,
  brand,
  url,
}: Props) {
  return loading ? (
    <ContainerBox>
      <Skeleton
        variant="text"
        sx={{
          fontSize: `calc(${theme.typography.title.fontSize}*2)`,
          backgroundColor: theme.palette.white.transparent,
          mt: '-16px',
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: `calc(${theme.typography.title.fontSize}*2)`,
          backgroundColor: theme.palette.white.transparent,
          mt: '-24px',
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: `calc(${theme.typography.title.fontSize}*2)`,
          backgroundColor: theme.palette.white.transparent,
          mt: '-24px',
          maxWidth: '75%',
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: `calc(${theme.typography.subtitle.fontSize}*2)`,
          backgroundColor: theme.palette.white.transparent,
          maxWidth: '200px',
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: `calc(${theme.typography.bodyItalic.fontSize}*2)`,
          backgroundColor: theme.palette.white.transparent,
          maxWidth: '164px',
        }}
      />
    </ContainerBox>
  ) : (
    <ContainerBox>
      <Typography component="h1" variant="title">
        {title ? title : 'Unknown'}
      </Typography>
      {brand && (
        <Typography component="p" variant="subtitle">
          {`Brand : ${brand}`}
        </Typography>
      )}
      <Typography component={'p'} variant="subtitle">
        {`Price : ${price}`}
      </Typography>
      {url && (
        <Typography component={'p'} variant="bodyItalic">
          Link to{' '}
          <Link
            href={url}
            target="_blank"
            style={{
              color: theme.palette.primary.main,
              textDecoration: 'underline',
            }}
          >
            Amazon
          </Link>
        </Typography>
      )}
    </ContainerBox>
  )
}
