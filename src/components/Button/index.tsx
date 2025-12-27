import type { ButtonHTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large'
}

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    ...props
}: ButtonProps) => {
    return (
        <button
            className={classnames(styles.button, styles[variant], styles[size])}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
