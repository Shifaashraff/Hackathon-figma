type FooterProps = {
    isHeroPage: boolean;
  };

export default function Footer({ isHeroPage }: FooterProps){
    return(
        <div className="footer" 
        style={isHeroPage ? { top: '450rem' } : {}}
        >
            <div className="sect1">
                <div className="sect1A">
                    <img src="/footerlogo.png"  className="a"/>
                    <p>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus</p>
                    <img src="/Social Links.png" className="b"/>
                </div>
                <div className="sect1B">
                    <h1>Category</h1>
                    <h2>Armchair</h2>
                    <h3>Sofa</h3>
                    <h4>Wing Chair</h4>
                    <h5>Desk Chair</h5>
                    <h6>wooden Chair</h6>
                    <p>Park Bench</p>
                </div>
                <div className="sect1C">
                    <h1>Support</h1>
                    <h2>Help & Support</h2>
                    <h3>Tearms & Conditions</h3>
                    <h4>Privacy Policies</h4>
                    <h5>Help</h5>
                </div>
                <div className="sect1D">
                    <h1>NEWSLETTER</h1>
                    <div className="footerButton">
                    <input type="text" placeholder="Your email"/>
                    <button>Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                </div>
            </div>
            <div className="sect2">
                <h1>@ 2021 - Blogy - Designed & Develop by <span className="zakirsoft">zakirsoft</span></h1>
                <img src="/Rectangle 33.png" />
            </div>
        </div>
    )
}