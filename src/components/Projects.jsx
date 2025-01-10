import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projGif1 from "../assets/img/project-gif1.gif";

import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

function Projects() {
  const projects = [
    {
      title: "Find A Fur Baby",
      description:
        "A pet adoption website featuring  a pink theme with dark mode, responsive design, and accessibility features for all users.",
      technologies: ["React", "Vite", "CSS", "JavaScript"],
      imgUrl: projGif1,
      githubUrl: "https://github.com/keainvhai/FindAFurBabyWeb",
      demoUrl: "https://find-a-fur-baby-web.vercel.app",
    },
  ];

  const projects2 = [
    {
      title: "SocialWave",
      description:
        "A full-stack social media platform built with React.js on the frontend, powered by Node.js, Express, and MySQL backend. Features user authentication (JWT), post sharing, comments, and likes functionality.",
      technologies: ["React.js", "Node.js", "MySQL", "Express", "JWT"],
      imgUrl: projImg2,
      githubUrl: "https://github.com/keainvhai/SocialWave-Client",
      demoUrl: "https://magical-monstera-7861e2.netlify.app",
    },
  ];

  const projects3 = [
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website showcasing my projects and skills",
      technologies: ["React", "Vite", "Bootstrap", "Node.js", "CSS"],
      imgUrl: projImg3,
      githubUrl: "https://github.com/keainvhai/personal-portfolio",
      demoUrl: "https://feixue-dev.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here are some of my recent projects</p>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="justify-content-center">
                    <Col xs={12} md={10} xl={8}>
                      {/* 调整这里的宽度比例 */}
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="justify-content-center">
                    <Col xs={12} md={10} xl={8}>
                      {projects2.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row className="justify-content-center">
                    <Col xs={12} md={10} xl={8}>
                      {projects3.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
}

export default Projects;
