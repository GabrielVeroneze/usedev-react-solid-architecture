import type { CSSProperties, ReactNode } from 'react'
import styles from './Input.module.css'

interface InputProps {
    icon?: ReactNode
    variant?: 'primary' | 'secondary'
    placeholder?: string
    value?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    id?: string
    style?: CSSProperties
    type?: string
}

const Input = ({
    icon,
    variant = 'primary',
    onChange,
    placeholder,
    id,
    style,
    type = 'text',
    ...props
}: InputProps) => {
    return (
        <div className={`${styles.inputContainer} ${styles[variant]}`}>
            <input
                type={type}
                style={style}
                {...props}
                onChange={() => onChange}
                id={id}
                placeholder={placeholder}
            />
            {!!icon && <span className={styles.iconContainer}>{icon}</span>}
        </div>
    )
}

export default Input
