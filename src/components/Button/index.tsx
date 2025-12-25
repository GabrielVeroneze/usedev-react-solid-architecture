import type { CSSProperties, MouseEvent, ReactNode } from 'react'
import classnames from 'classnames' // Para combinar classes dinamicamente
import styles from './Button.module.css'

interface ButtonProps {
    style?: CSSProperties
    children?: ReactNode
    text?: string
    icon?: ReactNode
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large' // Define diferentes tamanhos
    onClick: (e: MouseEvent<HTMLElement>) => void // Manipulação de click adicional
}

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    text,
    icon,
    onClick,
    style,
    ...props
}: ButtonProps) => {
    const handleClick = (e: MouseEvent<HTMLElement>) => {
        if (onClick) {
            onClick(e)
        }
    }

    return (
        <button
            style={style}
            className={classnames(styles.button, styles[variant], styles[size])}
            onClick={handleClick}
            {...props}
        >
            <span className={styles.icon}>{icon}</span>
            <span className={styles.text}>{text ? text : children}</span>
        </button>
    )
}

export default Button
