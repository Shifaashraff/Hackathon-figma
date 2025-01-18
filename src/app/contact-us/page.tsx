export default function Contact(){
    return(
        <div className="contact-container">
            <div className="contact-A">
                <h2>Get In Touch With Us</h2>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className="contact-B">
                <div className="contact-B1">
                    <div className="contact-B11">
                        <div className="cont-B11a">
                        <img src="/Vector.png" />
                        </div>
                        <div className="cont-B11b">
                        <h3>Address</h3>
                        <p>236 5th SE Avenue, New York NY10000, United States</p>
                         </div>
                    </div>
                <div className="contact-B12">
                    <div className="cont-B12a">
                        <img src="/bxs_phone.png" />
                    </div>
                    <div className="cont-B12b">
                        <h3>Phone</h3>
                        <p>Mobile: +(84) 546-6789 
                            Hotline: +(84) 456-6789</p>
                    </div>
                </div>
                <div className="contact-B13">
                    <div className="cont-B13a">
                        <img src="/bi_clock-fill.png" />
                    </div>
                    <div className="cont-B13b">
                        <h3>Working Time</h3>
                        <p>Monday-Friday: 9:00 - 22:00 
                            Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
                <div className="contact-B2">
                    <form>
                            <label>Your name</label>
                            <input type="text" placeholder="abc" required />
            
                            <label>Email address</label>
                            <input type="email" placeholder="abc@def.com" required />
                        
                            <label>Subject</label>
                            <input type="text" placeholder="This is an optional." required />
                    
                            <label>Message</label>
                            <textarea placeholder="Hi! i’d like to ask about" required></textarea>
                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="contact-quality">
               <div className="quality-A">
               <div className="quality-A1">
                    <img src="/trophy 1.png" />
                </div>
                <div className="quality-A2">
                    <h2>High Quality</h2>
                    <h3>crafted from top materials</h3>
                </div>
                </div>
                <div className="quality-B">
               <div className="quality-B1">
                    <img src="/guarantee.png" />
                </div>
                <div className="quality-B2">
                    <h2>Warranty Protection</h2>
                    <h3>over 2 year</h3>
                </div>
                </div>
                <div className="quality-C">
               <div className="quality-C1">
                    <img src="/customer-support.png" />
                </div>
                <div className="quality-C2">
                    <h2>24 / 7 Support</h2>
                    <h3>Dedicated Support</h3>
                </div>
                </div>
        </div>
    </div>
    )
}