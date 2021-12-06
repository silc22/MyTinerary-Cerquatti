import React from 'react'
import { Accordion } from 'react-bootstrap'

const viewMore = () => {

    return (
        <div className="viewMore-container">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        View More
                    </Accordion.Header>
                    <Accordion.Body>
                        UNDER CONSTRUCTION
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}


export default viewMore