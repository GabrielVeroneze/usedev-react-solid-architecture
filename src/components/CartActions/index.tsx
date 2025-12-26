import type { CartActionHandlers } from '@/common/types/cartActionHandlers'
import Button from '@/components/Button'
import styles from './CartActions.module.css'

const CartActions = ({ handleRedirect, onPayment }: CartActionHandlers) => {
    return (
        <div className={styles.cartActions}>
            <Button onClick={handleRedirect} variant="secondary">
                Continuar comprando
            </Button>
            <Button onClick={onPayment}>Ir para pagamento</Button>
        </div>
    )
}

export default CartActions
