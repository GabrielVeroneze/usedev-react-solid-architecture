import type { Product } from '@/common/types/product'
import Typography from '@/components/Typography'
import Button from '@/components/Button'
import styles from './CartItem.module.css'

interface CartItemProps {
    item: Product
    removeFromCart: (id: number) => void
}

const CartItem = ({ item, removeFromCart }: CartItemProps) => {
    return (
        <div className={styles.cartItem}>
            <div className={styles.cartImageContainer}>
                <img src={item.imageSrc} alt={item.label} />
            </div>
            <div className={styles.itemDetails}>
                <div>
                    <Typography variantStyle="h6-small">
                        {item.label}
                    </Typography>
                    <Typography variantStyle="body">
                        {item.description}
                    </Typography>
                </div>
                <Typography variantStyle="body-semi-bold">
                    R$ {item.price}
                </Typography>
                <Typography variantStyle="body-small-bold">
                    Quantidade: 1
                </Typography>
                <Typography variantStyle="body-small-bold">
                    Tamanho: único
                </Typography>
                <Button onClick={() => removeFromCart(item.id)}>Excluir</Button>
            </div>
        </div>
    )
}

export default CartItem
