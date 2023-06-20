import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />

                <div className="proj-txtx">

                </div>
            </div>
        </Col>
    )
}
