import React from "react"
import Fade from "react-reveal/Fade"
import { Button, Modal, Carousel } from "react-bootstrap"

export default function ProjectCard({
  title,
  info,
  img,
  id,
  show,
  handleClose,
}) {
  return (
    <Fade duration={1000} delay={500} distance="30px">
      <div className="project-wrapper__text">
        <h3 className="project-wrapper__text-title">
          {title || "Project Title"}
        </h3>
        <div>
          <p>
            {info ||
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
          </p>
          <Button className="cta-btn cta-btn--hero" onClick={handleShow}>
            Ver mas
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
                {/* {projects.map(project => (
                  <Carousel.Item>
                    <ProjectImg alt={project.title} filename={project.img} />
                    <Carousel.Caption>
                      <h3>{project.title}</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))} */}
              </Carousel>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </Fade>
  )
}
