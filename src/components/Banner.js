import React from 'react'

export const Banner = () => {
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>
                            Welcome to my Portfolio
                        </span>

                        <h1>
                            {`Hi I'm webdecoded`}
                            <span className='wrap'>
                                web developer
                            </span>
                        </h1>

                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni commodi sunt corporis ducimus veniam tempore explicabo incidunt dignissimos dicta mollitia?
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
