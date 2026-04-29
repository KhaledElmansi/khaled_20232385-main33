import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./projectcards";
import projImg1 from "./image/p1.jpg";
import projImg2 from "./image/p1.jpg";
import projImg3 from "./image/p1.jpg";


import TrackVisibility from 'react-on-screen';

import "./style.css"


export const Projects = () => {
const projects = [
{
title: "cactus Startup",
description: "Design & Development",
imgUrl: projImg1,
},
{
title: "meeting startup",
description: "Design & Development",
imgUrl: projImg2,
},

{
title: "money startup",
description: "Design & Development",
imgUrl: projImg3,
},

];
return (
    <section className="project" id="projects">
    <Container>
    <Row>
    <Col size={12}>
    <TrackVisibility>
    {({ isVisible }) =>
    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
    <h2>Projects</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text.</p>
    <Tab.Container id="projects-tabs" defaultActiveKey="first">
    <Nav variant="pills" className="nav-pills mb-5 justify-contentcenter
    align-items-center" id="pills-tab">
    <Nav.Item>
    <Nav.Link eventKey="first">Tab 1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
<Nav.Link eventKey="second">Tab 2</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="third">Tab 3</Nav.Link>
</Nav.Item>
</Nav>
<Tab.Content id="slideInUp" className={isVisible ?
"animate__animated animate__slideInUp" : ""}>
<Tab.Pane eventKey="first">
<Row>

{
projects.map((project, index) => {
return (
<ProjectCard
key={index}
{...project}
/>
)
})
}

    </Row>
    </Tab.Pane>
    <Tab.Pane eventKey="second">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae
    blanditiis.</p>
    </Tab.Pane>
    <Tab.Pane eventKey="third">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae
    blanditiis/</p>
    </Tab.Pane>
    </Tab.Content>
    </Tab.Container>
    </div>}
    </TrackVisibility>
    </Col>
    </Row>
    </Container>
    
    </section>

    
)
}
export default Projects;