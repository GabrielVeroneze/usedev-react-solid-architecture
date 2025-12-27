import Input, { type InputProps } from '@/components/Input'

interface InputIconProps extends InputProps {
    children: React.ReactNode
}

const InputIcon = ({ children, ...props }: InputIconProps) => {
    return (
        <div>
            <Input {...props} />
            <div>{children}</div>
        </div>
    )
}

export default InputIcon
