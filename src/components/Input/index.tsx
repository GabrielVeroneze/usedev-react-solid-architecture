import type { CSSProperties } from 'react'
import styles from './Input.module.css'

interface InputProps {
    variant?: 'primary' | 'secondary'
    placeholder?: string
    value?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    id?: string
    style?: CSSProperties
    type?: string
}

const Input = ({
    variant = 'primary',
    onChange,
    placeholder,
    id,
    style,
    type = 'text',
    ...props
}: InputProps) => {
    return (
        <input
            id={id}
            className={styles[variant]}
            type={type}
            style={style}
            onChange={() => onChange}
            placeholder={placeholder}
            {...props}
        />
    )
}

export default Input
