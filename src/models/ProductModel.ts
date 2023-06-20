import { ProductType } from '@/types'

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
    return this._product.url
  }

  get price() {
    return this._product.price ? this._product.price.display : 'Unknown'
  }
}
