import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row"; 
import Col from "react-bootstrap/esm/Col"; 
import './style.css';
import myFile from './image/khaled-cv.pdf.pdf'

function Banner() {
  return (
    <section className="banner min-vh-100 d-flex align-items-end pb-10 ps-0">
      <Container fluid className="ms-10 ps-md-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="text-start">
            
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>Hi! I'm Khaled Web Designer</h1>

            <p>
              Hello, I'm Khaled Elmansi. I'm building a web app for my project, 
              Section 3.2, Hall 5.7, An astronaut is a specially trained professional who pilots, crews, or conducts scientific research aboard a spacecraft, traveling beyond Earth's atmosphere to explore outer space
            </p>

            <a href={myFile} download="Khaled_CV.pdf" className="cnt-link">
              <button className="cnt">
                Download my CV
              </button>
            </a>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;