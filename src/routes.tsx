import { BrowserRouter as Router, Route, Routes } from 'react-router'
import { ScrollToTop } from '@/common/utils/ScrollToTop'
import type { CartProps } from '@/common/types/cart'
import HomePage from '@/pages/HomePage'
import ProductDetailsPage from '@/pages/ProductDetailsPage'
import CartPage from '@/pages/CartPage'
import Header from '@/components/Header'
import FooterConfig from '@/components/Footer/FooterConfig'
import WithCart from '@/common/utils/withCart'

const AppRoutes = ({
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
}: CartProps) => {
    return (
        <Router>
            <ScrollToTop />
            <Header onSearch={() => {}} cartCount={cartCount} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/produto/:id"
                    element={<ProductDetailsPage addToCart={addToCart} />}
                />
                <Route
                    path="/carrinho"
                    element={
                        <CartPage
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                            cartCount={cartCount}
                        />
                    }
                />
            </Routes>
            <FooterConfig />
        </Router>
    )
}

const AppRoutesWithCart = WithCart(AppRoutes)

export default AppRoutesWithCart
