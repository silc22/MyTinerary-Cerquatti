import React from 'react';
import activitiesActions from '../redux/actions/activitiesActions';
import { connect } from 'react-redux';

const Activities = (props) => {

    return (
        <>
            <div classname="activity-container">
                <img src="https://sworld.co.uk/img/img/152/photoAlbum/32570/originals/0.jpg"></img>
                <p>Castel Roncolo</p>
                <p>The castle, which was built in 1237, is an imposing sight that sits atop an impressive rocky peak. </p>
            </div>
        </>
    )
}


export default (Activities)