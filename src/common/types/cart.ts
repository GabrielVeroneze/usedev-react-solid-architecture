import type { Product } from '@/common/types/product'

export interface CartProps {
    readonly cartItems: Product[]
    readonly addToCart: (product: Product) => void
    readonly removeFromCart: (id: number) => void
    readonly cartCount: number
}
