import React from 'react';


const Activities = ({data}) => {
    console.log(data)
    return (
        <>
            <div className="activity-container">
            {data.map((activity) => 
                <div className="container-activity">
                    <img src={activity.src}></img>
                    <p>{activity.activityTitle}</p>
                </div>)}
            </div>
        </>
    )
}

export default Activities