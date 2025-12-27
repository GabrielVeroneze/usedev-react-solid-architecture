import Button, { type ButtonProps } from '@/components/Button'

interface ButtonIconProps extends ButtonProps {
    children: React.ReactNode
}

const ButtonIcon = ({ children, ...props }: ButtonIconProps) => {
    return (
        <Button style={{ gap: '8px' }} {...props}>
            {children}
        </Button>
    )
}

export default ButtonIcon
