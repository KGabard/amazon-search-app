import { useEffect, useState } from 'react'
import { getProduct } from '@/data/MockedApi'
import ProductInfos from './ProductInfos'

type Props = {
  productAsin: string
}

const fetchingQueryResult = {
  loading: true,
  error: false,
  data: undefined,
}

export default function DevProductInfosQueryProvider({ productAsin }: Props) {
  const [queryResult, setQueryResult] = useState<{
    loading: boolean
    error: boolean
    data: any
  }>(fetchingQueryResult)

  useEffect(() => {
    setQueryResult(fetchingQueryResult)

    const fetchQueryResult = setTimeout(() => {
      setQueryResult(getProduct())
    }, 2000)
  }, [productAsin])

  return (
    <div>
      <ProductInfos queryResult={queryResult} />
    </div>
  )
}
