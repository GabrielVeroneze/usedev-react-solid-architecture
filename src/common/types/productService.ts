import type { Product } from '@/common/types/product'

export interface ProductService {
    fetchProducts: () => Promise<Product[]>
}
