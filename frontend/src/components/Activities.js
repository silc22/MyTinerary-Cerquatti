import React from 'react';


const Activities = ({data}) => {



    return (
        <>
            <div className="activity-container">
                <img src={data.src}></img>
                <p>{data.activityTitle}</p>
                <p>{data.description}</p>
            </div>
        </>
    )
}

export default Activities