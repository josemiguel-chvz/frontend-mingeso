import Cart from "./Cart";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({
    children,
    cart,
    showCart,
    openCart,
    closeCart
}) => {
    return (
        <>
            <NavBar openCart={openCart} cart={cart} />
            <main>{children}</main>
            <Footer />
            <Cart cart={cart} show={showCart} closeCart={closeCart}/>
        </>
    );
};

export default Layout;