import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/img/logo.svg"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />

                    <Col sm={6}>
                        <img src={logo} alt="" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
