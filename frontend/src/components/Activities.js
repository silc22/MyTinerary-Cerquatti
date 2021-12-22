import React from 'react';

const Activities = ({data}) => {



    return (
        <>
            <div className="activity-container">
                <div className="container-activity">
                    <img src={data.src}></img>
                    <p>{data.activityTitle}</p>
                </div>
            </div>
        </>
    )
}

export default Activities