import { Link } from 'react-router'
import type { Product } from '@/common/types/product'
import Card from '@/components/Card'
import Typography from '@/components/Typography'
import styles from './ProductList.module.css'

interface ProductListProps {
    title: string
    products: Product[]
}

const ProductList = ({ title, products }: ProductListProps) => {
    return (
        <section className={styles.productList}>
            <Typography variant="h4" className={styles.title}>
                {title}
            </Typography>
            <div className={styles.gridContainer}>
                {products.map((product) => (
                    <Link to={`/produto/${product.id}`} key={product.id}>
                        <Card
                            id={product.id}
                            key={`product-card-${product.id}`}
                            label={product.label}
                            price={product.price}
                            imageSrc={product.imageSrc}
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default ProductList
