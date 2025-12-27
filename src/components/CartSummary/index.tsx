import { ShoppingBagIcon } from '@/common/icons'
import type { CartActionHandlers } from '@/common/types/cartActionHandlers'
import CartActions from '@/components/CartActions'
import Typography from '@/components/Typography'
import Field from '@/components/Field'
import Divider from '@/components/Divider'
import styles from './CartSummary.module.css'

interface CartSummaryProps extends CartActionHandlers {
    itemCount: number
    total: number
    freight: number
}

const CartSummary = ({
    itemCount,
    total,
    freight,
    handleRedirect,
    onPayment,
}: CartSummaryProps) => {
    return (
        <div className={styles.cartSummary}>
            <Typography variantStyle="heading-small">Sumário</Typography>
            <div className={styles.discount}>
                <Field
                    label="Cupom de desconto"
                    inputId="cupom"
                    inputPlaceholder="Digite o cupom"
                    buttonText="Ok"
                    onButtonClick={() => {}}
                    onChange={() => {}}
                />
            </div>
            <div className={styles.summaryResume}>
                <Typography variantStyle="body-small-bold">
                    {itemCount} {itemCount > 1 ? 'Produtos' : 'Produto'}
                </Typography>
                <Typography variantStyle="body-small-bold">
                    R$ {total}
                </Typography>
                <Typography variantStyle="body-small-bold">Frete:</Typography>
                <Typography variantStyle="body-small-bold">
                    R$ {freight}
                </Typography>
            </div>
            <Divider style={{ borderColor: '#780BF7' }} />
            <div className={styles.total}>
                <Typography variantStyle="body-large-bold">
                    <ShoppingBagIcon />
                    <span style={{ marginLeft: '4px' }}>Total:</span>
                </Typography>
                <Typography
                    variantStyle="body-large-bold"
                    className={styles.total}
                >
                    R$ {total + freight}
                </Typography>
            </div>
            <CartActions
                handleRedirect={handleRedirect}
                onPayment={onPayment}
            />
        </div>
    )
}

export default CartSummary
