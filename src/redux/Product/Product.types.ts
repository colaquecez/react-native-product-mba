export interface IProductsResponse {
  _id: number;
  name: string;
  price: string;
  favorite: boolean;
}

export interface IProductGetAllResponse {
  totalItems: number;
  page: number;
  perPage: number;
  products: IProductsResponse[];
}

export interface IProductGetAllDTO {
  page: number;
  perPage: number;
  orderDirection: string;
  search?: string;
}

export interface IProductSelect {
  product: IProductsResponse;
}
