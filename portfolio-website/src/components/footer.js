import { Container, Row, Col } from "react-bootstrap";
import facebook from './image/blackfacebook.jpg'
import insta from './image/balckinsta.png'
import linked from './image/linkedinblack.png'
import logo from './image/logo.svg' 


export const KFooter = () => {
return (
<footer className="footer">
<Container>
<Row className="align-items-center">
<Col size={12} sm={6}>
<img src={logo} alt="Logo" />
</Col>
<Col size={12} sm={6} className="text-center text-sm-end">
<div className="social-icon">
<a href="#"><img src={facebook} alt="Icon" /></a>
<a href="#"><img src={insta} alt="Icon" /></a>
<a href="#"><img src={linked} alt="Icon" /></a>
</div>
<p>Copyright 2026. All Rights Reserved</p>
</Col>
</Row>
</Container>
</footer>
)
}

export default KFooter ;