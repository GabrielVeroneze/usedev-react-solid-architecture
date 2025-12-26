import type { MouseEvent } from 'react'

export interface CartActionHandlers {
    handleRedirect: (e: MouseEvent<HTMLElement>) => void
    onPayment: (e: MouseEvent<HTMLElement>) => void
}
