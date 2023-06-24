import { Alert, Col, Row } from "react-bootstrap"

export const Newsletter = ({ subscribe, status, message }) => {
    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subsribe to our Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>

                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>

                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
