import Input, { type InputProps } from '@/components/Input'
import styles from './InputIcon.module.css'

interface InputIconProps extends InputProps {
    children: React.ReactNode
}

const InputIcon = ({ children, ...props }: InputIconProps) => {
    return (
        <div className={styles.inputIconContainer}>
            <Input {...props} />
            <div className={styles.iconContainer}>{children}</div>
        </div>
    )
}

export default InputIcon
