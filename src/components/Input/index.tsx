import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'primary' | 'secondary'
}

const Input = ({
    variant = 'primary',
    type = 'text',
    ...props
}: InputProps) => {
    return <input className={styles[variant]} type={type} {...props} />
}

export default Input
