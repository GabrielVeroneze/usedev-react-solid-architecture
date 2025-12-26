import { useNavigate } from 'react-router'
import { ShoppingBagIcon } from '@/common/icons'
import type { Product } from '@/common/types/product'
import CartItem from '@/components/CartItem'
import Button from '@/components/Button'
import Divider from '@/components/Divider'
import Field from '@/components/Field'
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

    return (
        <main className="container">
            <div className={styles.cartTitle}>
                <Typography variant="h4">Carrinho de Compras</Typography>
            </div>
            <section className={styles.cartPage}>
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
                                removeFromCart={removeFromCart}
                            />
                        ))
                    ) : (
                        <div style={{ marginTop: '15px' }}>
                            <Typography>
                                Não existem produtos no carrinho.
                            </Typography>
                        </div>
                    )}
                </div>
                <div className={styles.cartSummary}>
                    <Typography variantStyle="heading-small">
                        Sumário
                    </Typography>
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
                        <Typography variantStyle="body-small-bold">
                            Frete:
                        </Typography>
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
            </section>
        </main>
    )
}

export default CartPage
