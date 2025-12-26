import type { CSSProperties, MouseEvent, ReactNode } from 'react'
import classnames from 'classnames'
import styles from './Button.module.css'

interface ButtonProps {
    style?: CSSProperties
    children?: ReactNode
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    onClick: (e: MouseEvent<HTMLElement>) => void
}

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    style,
    ...props
}: ButtonProps) => {
    return (
        <button
            style={style}
            className={classnames(styles.button, styles[variant], styles[size])}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
