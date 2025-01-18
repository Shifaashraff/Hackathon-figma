import Link from "next/link"
export default function shop(){
    return(
        <div className="shop">
            <div className="singProduct1">
            <div className="sing-A">
                <img src="/hotitem2.png" className="sing1" />
            </div>
            <div className="sing-B">
                <h1>Library Stool Chair</h1>
                <button className="buttonA" >$20.00 USD</button>
                {/* Plain Line */}
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <Link href="/cart"><button className="buttonB" ><img src="/cart-3.png" alt="cart icon" width= {10} height={10}/>Add to cart</button></Link>
            </div>
        </div>
        {/*... Repeat for other products */}
        <div className="singProduct2">
            <div className="sing2-A">
            <h1>FEATURED PRODUCTS</h1>
             <h2>View all</h2>
             <div className="sing2-B">
             <div className="line2"></div>
             </div>
            </div>
            <div className="productsImages7">
                <div className="images3">
                    <img src="/Image (6).png"  />
                    <div className="image3Box">
                        <div> 
                        <h2>Library Stool Chair</h2>
                        </div>
                        <div>
                        <h3>$99</h3>
                        </div>
                    </div>
                    </div>
                    <div  className="images4">
                    <img src="/Image (7).png" alt=""  />
                    <div className="image4Box">
                        <div>
                        <h2>Library Stool Chair</h2>
                        </div>
                        <div>
                        <h3>$99</h3>
                        </div>
                    </div>
                    </div>
                    <div  className="images5">
                    <img src="/pproduct9.png" alt="img5"  />
                    <div className="image5Box">
                        <div>
                        <h2>Library Stool Chair</h2>
                        </div>
                        <div>
                        <h3>$99</h3>
                        </div>
                    </div>
                    </div>
                    <div className="images6">
                    <img src="/hotitem3.png" alt="img6" />
                    <div className="image6Box">
                        <div>
                        <h2>Library Stool Chair</h2>
                        </div>
                        <div>
                        <h3>$99</h3>
                        </div>
                    </div>
                    </div>
                    <div className="images0">
                    <img src="/Image (4).png" alt="img6" />
                    <div className="image0Box">
                        <div>
                        <h2>Library Stool Chair</h2>
                        </div>
                        <div>
                        <h3>$99</h3>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>
    )
}