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
        </div>
        
    )
}

export default Calltoaction