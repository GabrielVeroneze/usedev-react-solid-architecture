import { useState } from 'react'
import { Link } from 'react-router'
import { CarrinhoIcon, LogoIcon, PerfilIcon, SearchIcon } from '@/common/icons'
import Input from '@/components/Input'
import Typography from '@/components/Typography'
import styles from './Header.module.css'

interface HeaderProps {
    cartCount: number
    onSearch: (query: string) => void
}

const Header = ({ cartCount, onSearch }: HeaderProps) => {
    const [query, setQuery] = useState<string>('')

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setQuery(e.target.value)
    }

    const handleSearch = (): void => {
        onSearch(query)
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <div className={styles.logo}>
                    <Link to="/">
                        <LogoIcon />
                    </Link>
                </div>
                <div className={styles.options}>
                    <nav className={styles.nav}>
                        <ul>
                            <li>
                                <a className="body-large-regular" href="/about">
                                    Sobre nós
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.searchContainer}>
                        <Input
                            variant="secondary"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="O que você procura?"
                            icon={<SearchIcon />}
                        />
                        <button onClick={handleSearch}>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    <div className={styles.userActions}>
                        <a href="#">Login</a>
                        <a href="#">
                            <PerfilIcon />
                        </a>
                        <Link
                            to="/carrinho"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            <CarrinhoIcon />
                            <Typography variantStyle="body-small">
                                ({cartCount})
                            </Typography>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
