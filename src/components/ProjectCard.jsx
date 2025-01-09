import { Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  technologies,
  imgUrl,
  githubUrl,
  demoUrl,
}) {
  return (
    <Col>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <div className="proj-content">
            <h4>{title}</h4>
            <p className="proj-description">{description}</p>
            <div className="tech-stack">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="proj-links">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <FaGithub size={24} />
                  <span>Code</span>
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <FaExternalLinkAlt size={24} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
