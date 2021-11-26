import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl, Button} from 'react-bootstrap'

function Calltoaction() {

    

    return (

        <div className="section-container">
            <div className="callToAction-container">
                <Link as={Link} to={"/Cities"} className="neon-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Find your next destination
                </Link>
            </div>
            <div className="form-container">
                <form className="d-flex">
                    <FormControl
                    variant="sucess"
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline">Search</Button>
                </form>
            </div>
        </div>
        
    )
}

export default Calltoaction