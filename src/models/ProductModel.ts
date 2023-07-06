import { DetailedProductType, ProductType } from '@/types'

export class ProductClass {
  _product: ProductType

  constructor(product: ProductType) {
    this._product = product
  }

  get asin() {
    return this._product.asin
  }

  get title() {
    return this._product.title
  }

  get rating() {
    return this._product.rating
  }

  get ratingsCount() {
    return this._product.ratingsTotal
  }

  get picture() {
    return this._product.mainImageUrl
  }

  get url() {
    return this._product.url ? this._product.url : ''
  }

  get price() {
    return this._product.price ? this._product.price.display : 'Unknown'
  }
}

export class DetailedProductClass extends ProductClass {
  _detailedProduct: DetailedProductType

  constructor(detailedProduct: DetailedProductType) {
    super(detailedProduct)
    this._detailedProduct = detailedProduct
  }

  get brand() {
    return this._detailedProduct.brand
  }

  get reviewsCount() {
    return this._detailedProduct.reviewsTotal
  }

  get subtitle() {
    return this._detailedProduct.subtitle
  }

  get reviews() {
    return this._detailedProduct.reviewsPaginated
  }

  get ratingsBreakdown() {
    return [
      this._detailedProduct.ratingsBreakdown.oneStarRatingsCount,
      this._detailedProduct.ratingsBreakdown.twoStarRatingsCount,
      this._detailedProduct.ratingsBreakdown.threeStarRatingsCount,
      this._detailedProduct.ratingsBreakdown.fourStarRatingsCount,
      this._detailedProduct.ratingsBreakdown.fiveStarRatingsCount,
    ]
  }
}
