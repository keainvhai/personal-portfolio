import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      percentage: 90,
      icon: meter1,
      details:
        "React.js, JavaScript, HTML, CSS, Redux, Responsive Design,Bootstrap",
    },
    {
      title: "Backend Development",
      percentage: 85,
      icon: meter2,
      details: "Node.js, Express.js, Java, Python,RESTful APIs",
    },
    {
      title: "Database Management",
      percentage: 80,
      icon: meter3,
      details: "MySQL, MongoDB, Query Optimization, Data Modeling",
    },
    {
      title: "Development Tools",
      percentage: 95,
      icon: meter1,
      details: "Git, RESTful APIs, JWT, Postman,Vercel",
    },
  ];

  return (
    <div>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>
                  As a full-stack developer, I specialize in both frontend and
                  backend technologies, with a strong foundation in programming
                  and extensive project experience. Focused on building
                  responsive, high-performance web applications with emphasis on
                  code quality and user experience.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  {/* <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Web Development</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Brand Identify</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Image" />
                    <h5>Logo Design</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Web Development</h5>
                  </div> */}
                  {skillCategories.map((skill, index) => (
                    <div className="item" key={index}>
                      <img src={skill.icon} alt={skill.title} />
                      <h5>{skill.title}</h5>
                      <p className="skill-details">{skill.details}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img src={colorSharp} className="background-image-left" />
      </section>
    </div>
  );
}

export default Skills;
