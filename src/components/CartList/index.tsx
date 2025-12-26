import type { Product } from '@/common/types/product'
import Typography from '@/components/Typography'
import CartItem from '@/components/CartItem'
import CartEmptyMessage from '@/components/CartEmptyMessage'
import styles from './CartList.module.css'

interface CartListProps {
    cartItems: Product[]
    onRemove: (id: number) => void
}

const CartList = ({ cartItems, onRemove }: CartListProps) => {
    return (
        <div className={styles.cartItems}>
            <Typography
                variantStyle="body-large-bold"
                className={styles.cartItemTitle}
            >
                Detalhes da compra
            </Typography>
            {cartItems?.length > 0 ? (
                cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        removeFromCart={onRemove}
                    />
                ))
            ) : (
                <CartEmptyMessage />
            )}
        </div>
    )
}

export default CartList
