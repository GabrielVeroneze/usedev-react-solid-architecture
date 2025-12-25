import type { CSSProperties } from 'react'
import styles from './Divider.module.css'

interface DividerProps {
    style?: CSSProperties
}

const Divider = ({ style }: DividerProps) => {
    return <hr className={styles.divider} style={style} />
}

export default Divider
