import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const KNewsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && email.indexOf("@") > -1 && onValidated) {
      onValidated({
        EMAIL: email
      });
      
    }
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br /> and Never miss latest update
            </h3>

            {status === 'sending' && <Alert variant="primary">Sending...</Alert>}
            {status === 'error' && (
              <Alert variant="danger" dangerouslySetInnerHTML={{ __html: message }} />
            )}
            {status === 'success' && (
              <Alert variant="success" dangerouslySetInnerHTML={{ __html: message }} />
            )}
          </Col>

          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input 
                  value={email} 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter your email" 
                  required
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default KNewsletter;