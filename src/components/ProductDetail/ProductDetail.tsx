import { useState } from 'react'
import { AddCarrinhoIcon } from '@/common/icons/AddCarrinhoIcon'
import type { Product } from '@/common/types/product'
import RadioButton from '@/components/RadioButton'
import Typography from '@/components/Typography'
import Button from '@/components/Button'
import styles from './ProductDetail.module.css'

interface ProductDetailProps {
    id: number
    title: string
    description: string
    price: number
    imageUrl: string
    colors: string[]
    addToCart: (product: Product) => void
}

const ProductDetail = ({
    id,
    title,
    description,
    price,
    imageUrl,
    colors,
    addToCart,
}: ProductDetailProps) => {
    const [selectedValue, setSelectedValue] = useState('')

    const handleAddToCart = () => {
        const product = {
            id,
            label: title,
            description,
            price,
            colors,
            imageSrc: imageUrl,
        }

        addToCart(product)
    }

    const handleRadioChange = (value: string) => {
        setSelectedValue(value)
    }

    return (
        <section className={styles.productDetail}>
            <div className={styles.imageContainer}>
                <img
                    src={imageUrl}
                    alt={title}
                    className={styles.productImage}
                />
            </div>

            <div className={styles.detailContainer}>
                <Typography variant="h4">{title}</Typography>
                <Typography variantStyle="body-large">{description}</Typography>
                <Typography variantStyle="heading-semi-bold">
                    {price.toFixed(2)}
                </Typography>

                <div className={styles.radioGroup}>
                    {colors.map((color) => (
                        <RadioButton
                            key={color}
                            label={color}
                            value={color}
                            checked={selectedValue === color}
                            onChange={handleRadioChange}
                        />
                    ))}
                </div>

                <div className={styles.action}>
                    <Button onClick={handleAddToCart}>
                        <AddCarrinhoIcon />
                        Adicionar ao carrinho
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail
