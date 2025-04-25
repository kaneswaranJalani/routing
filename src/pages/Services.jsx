import human1 from "../assets/image/image 1.jpg"
import human2 from "../assets/image/image 2.jpg"
import human3 from "../assets/image/image 3.jpg"
import human4 from "../assets/image/images 5.jpg"

function Services() {
  return (
    <>
    <h1 className="about">Services</h1>
    <p className="p1">anytime we give the services from us </p>
    <section className="services">
      
      <div style={{display: "flex"}}>
        <img src={human1} alt="Human 1" className="services-images"/>
        <img src={human2} alt="Human 2" className="services-images"/>
        <img src={human3} alt="Human 3" className="services-images"/>
        <img src={human4} alt="Human 4" className="services-images"/>
      </div>
    </section>
    </>
  );
}

export default Services;
