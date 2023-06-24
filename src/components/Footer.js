import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />

                    <Col sm={6}>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
