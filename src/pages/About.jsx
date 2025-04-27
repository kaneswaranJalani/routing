import image from "../assets/image/Premium Photo _ Image of young Asian girl on blue.jpeg"
import icon1 from "../assets/image/scr1.png"
import icon2 from "../assets/image/scr2.png"
import icon3 from "../assets/image/scr3.png"
import icon4 from "../assets/image/scr4.png"

function About(){
    return(
        <>
        <div>
            <h1 className="about">About</h1>
            <p className="p1">This is my web page</p>
            <div style={{display:"flex"}} >
            <img className="image" src={image} alt="image"/>
            <div className="para">
                <div className="box">
                <img src={icon1} alt="icon"/>
            <p> Purchase once and receive lifetime updates and additional features for free, no recurring fees!</p>
            </div>
            <div className="box">
            <img src={icon2} alt="icon"/>
            <p>Xtra is the lightest theme on the market, providing unparalleled performance and the greatest search engine results.</p>
            </div>
            <div className="box">
            <img src={icon3} alt="icon"/>
            <p>Create and customize your website in real time, and see the results immediately with our unique preview mode. This will save you time!</p>
            </div>
            <div className="box">
            <img src={icon4} alt="icon"/>
            <p>Save time on website design by importing pixel-perfect, ready-to-use website demos from our extensive starting site collection.</p>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default About