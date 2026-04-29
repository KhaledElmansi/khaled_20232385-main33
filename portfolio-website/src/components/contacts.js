import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "./image/space.jpg";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const KContacts = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const SERVICE_ID = "service_r243nzh"; 
    const TEMPLATE_ID = "template_ozkegph";
    const PUBLIC_KEY = "lf4ahKqgrLuU18LR5";

    const templateParams = {
      from_name: `${formDetails.firstName} ${formDetails.lastName}`,
      from_email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
      to_email: '20232385@fue.edu.eg', 
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        console.log("SUCCESS!", result.status, result.text);
        setStatus({ success: true, message: 'Message sent successfully!' });
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        
        setTimeout(() => {
          setStatus({});
        }, 5000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setStatus({ 
          success: false, 
          message: error.text || 'Error: Recipient address missing in EmailJS dashboard.' 
        });
        setButtonText("Send");
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img 
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg} 
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.firstName}
                          placeholder="First Name" 
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.lastName}
                          placeholder="Last Name" 
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="email" 
                          value={formDetails.email} 
                          placeholder="Email Address" 
                          onChange={(e) => onFormUpdate('email', e.target.value)} 
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="tel" 
                          value={formDetails.phone} 
                          placeholder="Phone No." 
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea 
                          rows="6" 
                          value={formDetails.message}
                          placeholder="Message" 
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                        ></textarea>
                        
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>

                      {status.message && (
                        <Col size={12}>
                          <p className={status.success === false ? "danger" : "success"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default KContacts;