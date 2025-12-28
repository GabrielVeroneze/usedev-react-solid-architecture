import { PRODUCTS_BASE_URL } from '@/common/constants/endpoints'
import type { HttpClient } from '@/common/types/httpClient'
import type { ProductService } from '@/common/types/productService'
import type { Product } from '@/common/types/product'

export const productService = (http: HttpClient): ProductService => {
    return {
        fetchProducts: async () => {
            try {
                const response = await http.get<{ products: Product[] }>(
                    PRODUCTS_BASE_URL,
                )

                return response.products
            } catch {
                throw new Error('Erro ao buscar produtos')
            }
        },
    }
}
