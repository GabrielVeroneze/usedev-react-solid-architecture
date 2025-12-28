import { useParams } from 'react-router'
import { useFetch } from '@/common/hooks/useFetch'
import { PRODUCTS_BASE_URL } from '@/common/constants/endpoints'
import type { Product } from '@/common/types/product'
import BackgroundBanner from '@/components/BackgroundBanner'
import Typography from '@/components/Typography'
import ProductDetail from '@/components/ProductDetail'
import StatusHandler from '@/common/utils/statusHandler'
import styles from './ProductDetailsPage.module.css'

interface ProductDetailsPageProps {
    addToCart: (product: Product) => void
}

const ProductDetailsPage = ({ addToCart }: ProductDetailsPageProps) => {
    const { id } = useParams<{ id: string }>()

    const {
        data: productsData,
        isLoading,
        error,
    } = useFetch<{ products: Product[] }>(PRODUCTS_BASE_URL)

    const product = productsData?.products.find(
        (product) => product.id.toString() === id,
    )

    return (
        <>
            <BackgroundBanner backgroundImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/refs/heads/main/banner-secoes.png" />
            <main className="container">
                <section>
                    <div className={styles.productContainer}>
                        <Typography variant="h4">
                            Detalhes do Produto
                        </Typography>
                        <StatusHandler isLoading={isLoading} error={error}>
                            {product ? (
                                <ProductDetail
                                    id={product.id}
                                    title={product.label}
                                    description={product.description}
                                    price={product.price}
                                    imageUrl={product.imageSrc}
                                    colors={product.colors}
                                    addToCart={addToCart}
                                />
                            ) : (
                                <p>Produto não encontrado.</p>
                            )}
                        </StatusHandler>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ProductDetailsPage
