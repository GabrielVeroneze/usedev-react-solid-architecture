import { useEffect, useState } from 'react'
import type { ProductService } from '@/common/types/productService'
import type { Product } from '@/common/types/product'

export const useFetchProducts = (productService: ProductService) => {
    const [products, setProducts] = useState<Product[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true)

                const productsData = await productService.fetchProducts()

                setProducts(productsData)
                setIsLoading(false)
            } catch (error) {
                setError((error as Error).message)
                setIsLoading(false)
            }
        }

        fetchProducts()
    }, [productService])

    return { products, isLoading, error }
}
