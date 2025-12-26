import { useNavigate } from 'react-router'
import type { Product } from '@/common/types/product'
import CartList from '@/components/CartList'
import CartSummary from '@/components/CartSummary'
import Typography from '@/components/Typography'
import styles from './CartPage.module.css'

interface CartPageProps {
    cartItems: Product[]
    removeFromCart: (id: number) => void
}

const CartPage = ({ cartItems, removeFromCart }: CartPageProps) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0)
    const freight = cartItems.length > 0 ? 8 : 0

    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate('/')
    }

    const handlePayment = () => console.log('pagamento')

    return (
        <main className="container">
            <div className={styles.cartTitle}>
                <Typography variant="h4">Carrinho de Compras</Typography>
            </div>
            <section className={styles.cartPage}>
                <CartList cartItems={cartItems} onRemove={removeFromCart} />
                <CartSummary
                    cartItems={cartItems}
                    total={total}
                    freight={freight}
                    handleRedirect={handleRedirect}
                    onPayment={handlePayment}
                />
            </section>
        </main>
    )
}

export default CartPage
