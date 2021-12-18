import React from 'react'
import { Accordion } from 'react-bootstrap'
import Activities from './Activities'

const viewMore = () => {

    return (
        <div className="viewMore-container">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        View More
                    </Accordion.Header>
                    <Accordion.Body>
                        <Activities/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}


export default viewMore