import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";

import avatar1 from "../assets/img/avatar1.jpg";
import avatar2 from "../assets/img/avatar2.webp";
// import avatar3 from "../assets/img/avatar3.png";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Fei has demonstrated outstanding initiative and problem-solving skills in my class. Her ability to quickly grasp complex technical concepts and apply them in practical projects sets her apart. She is a driven and reliable student who is always willing to go the extra mile.",
      author: "Prof. Khaled Bugrara",
      role: "Northeastern University",
      avatar: avatar1,
    },
    {
      quote:
        "Fei is an exceptional team member—organized, dependable, and proactive. In our work together, she has consistently taken initiative, delivered high-quality results, and communicated effectively across teams. Her professionalism and attention to detail make her a valuable asset to any organization.",
      author: "Leslie Thomas",
      role: "Administrative Supervisor, D'Amore-McKim School of Business, Northeastern University",
      avatar: avatar2,
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="testimonial" id="testimonial">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h2 className="text-center">Testimonials</h2>
            <p className="text-center">What others say about working with me</p>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              arrows={true}
              className="testimonial-carousel"
            >
              {testimonials.map((item, index) => (
                <div className="testimonial-card" key={index}>
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="testimonial-avatar"
                  />
                  <p className="testimonial-quote">“{item.quote}”</p>
                  <p className="testimonial-author">{item.author}</p>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
