import { Product, Status } from "../generated/types";
import api from "./api";

export const fetchProducts = async (take: number, skip: number) => {
  const response = await api.get<Product[]>('/products', {
    params: {
      take,
      skip,
      orderBy: {
        updatedAt: 'desc'
      }
    },
  });

  return response.data;
}

export const updateStatusInBulk = async (ids: string[], status: Status) => {
  const response = await api.post('/products/update-mass', {
    products: ids.map(id => ({ id, status }))
  });

  return response.data;
}

export const updateProductStatus = async (product: Product, status: Status) => {
  const response = await api.post(`/product/${product.id}/status`, { status });
  return response.data;
}

export const updateProduct = async (product: Product, input: { name: string, price: number }) => {
  const response = await api.patch(`/product/${product.id}`, input);
  return response.data;
}

export const fetchFilteredProducts = async (searchString: string): Promise<Product[]> => {  
  if (!searchString.trim()) {
    return fetchProducts(20, 0);
  }

  const response = await api.get<Product[]>(`/filtered-products/${encodeURIComponent(searchString)}`);
  return response.data;
}