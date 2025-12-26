import { ShoppingBagIcon } from '@/common/icons'
import type { Product } from '@/common/types/product'
import Typography from '@/components/Typography'
import Field from '@/components/Field'
import Divider from '@/components/Divider'
import Button from '@/components/Button'
import styles from './CartSummary.module.css'

interface CartSummaryProps {
    cartItems: Product[]
    total: number
    freight: number
    handleRedirect: () => void
}

const CartSummary = ({
    cartItems,
    total,
    freight,
    handleRedirect,
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
                    {cartItems.length} Produtos
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
            <div className={styles.cartActions}>
                <Button onClick={handleRedirect} variant="secondary">
                    Continuar comprando
                </Button>
                <Button onClick={() => console.log('pagamento')}>
                    Ir para pagamento
                </Button>
            </div>
        </div>
    )
}

export default CartSummary
