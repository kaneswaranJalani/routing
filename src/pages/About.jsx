import image from "../assets/image/644424c3ff9446eb285229055eec41fc.jpg"
function About(){
    return(
        <>
        <div>
            <h1 className="about">About</h1>
            <p className="p1">This is my web page</p>
            <img className="image" src={image} alt="image"/>
        </div>
        </>
    )
}
export default About