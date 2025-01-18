export default function Cart (){
    return(
        <div className="cart-container">
            <div className="cart-A">
                <h1>Bag</h1>
                <div className="cart-A1">
                    <div className="cart-A1a">
                        <img src="/hotitem3.png" alt="product-img"/>
                    </div>
                    <div className="cart-A1b">
                        <h1>Library Stool Chair</h1>
                        <h2>Ashen Slate/Cobalt Bliss</h2>
                        <div className="cart-A1a0">
                            <h2>Size L</h2>
                            <h3>quantity  1</h3>
                        </div>
                        <div className="cart-A1a1">
                            <img src="/Frame.png" className="cartheart" />
                            <img src="/Frame (1).png" className="carttrash" />
                        </div>
                    </div>
                    <div className="cart-A1c">
                        <h2>MRP: $99</h2>
                    </div>
                </div>
                <div className="cart-A2">
                    <div className="cart-A2a">
                        <img src="/Image (4).png" alt="product-img"/>
                    </div>
                    <div className="cart-A2b">
                        <h1>Library Stool Chair</h1>
                        <h2>Ashen Slate/Cobalt Bliss</h2>
                        <div className="cart-A2a0">
                            <h2>Size L</h2>
                            <h3>Quantity  1</h3>
                        </div>
                        <div className="cart-A2a1">
                            <img src="/Frame.png" className="cartheart" />
                            <img src="/Frame (1).png" className="carttrash" />
                        </div>
                    </div>
                    <div className="cart-A2c">
                        <h2>MRP: $99</h2>
                    </div>
                </div>
            </div>
            <div className="cart-B">
                <h1>Summary</h1>
                <div className="cart-B1">
                    <div className="cart-B1a">
                        <h2>Subtotal</h2>
                        <h3>$198</h3>
                    </div>
                    <div className="cart-B1b">
                        <h2>Estimated Delivery & Handling</h2>
                        <h3>Free</h3>
                    </div>
                    <div className="cart-B1c">
                        <h2>Total</h2>
                        <h3>$198.00</h3>
                    </div>
                    <div className="cart-B1d">
                        <button className="checkout-btn">Member Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}