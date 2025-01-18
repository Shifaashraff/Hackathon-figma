import Link from "next/link";

export default function Header(){
return(
<div className="bar">
    <div className="header-top">
        <div className="top-left">Free shipping on all orders over $50</div>
        <div className="top-right">Eng Faq Need help</div>
    </div>
    <div className="header-mid">
        <div className="mid-left">
            <img src="/Logo Icon.png" alt=""></img>
            <span>Comforty</span>
        </div>
        <div className="mid-right">
            <img src="/Cart.png" alt="cartimage"></img>
        </div>
    </div>
    <div className="header-bottom">
        <div className="bottom-left">
            <ul className="icon-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/contact-us">Contact-us</Link></li> 
                <li><Link href="/about">About</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
            </ul>
        </div>
        <div className="bottom-right">
            <h1>contact: <strong>(808) 555-0111</strong></h1>
        </div>
    </div>
</div>
)
}