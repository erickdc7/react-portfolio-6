import { Alert, Col, Row } from "react-bootstrap"

export const Newsletter = ({ subscribe, status, message }) => {
    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subsribe to our Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
