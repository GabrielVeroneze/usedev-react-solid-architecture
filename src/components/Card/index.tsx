import Typography from '@/components/Typography'
import styles from './Card.module.css'

interface CardProps {
    id: number
    label: string
    price: number
    imageSrc: string
}

const Card = ({ label, price, imageSrc, id }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={imageSrc} alt={label} className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardContentInner}>
                    <Typography variant="h6">{label}</Typography>
                    <Typography variantStyle="heading-semi-bold">
                        {price.toFixed(2)}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Card
