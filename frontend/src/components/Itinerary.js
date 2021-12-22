import React, { useEffect , useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Accordion } from 'react-bootstrap'
import Activities from './Activities'
import activitiesActions from "../redux/actions/activitiesActions"
import Comments from './Comments'


const Itineray = ({ element }) => {

    const dispatch = useDispatch()

    const [showActivities, setShowActivities]= useState([])

    useEffect( async ()=>{
        try{
            let response = await dispatch(activitiesActions.getActivitiesByItinerary(element._id))
            setShowActivities(response)
        }catch (error){
            console.log(error)
        }
    },[])

    return(
        <>
        <div className="itinerary-container-card" key={element.id}>
            <h3>{element.itinerarioNombre}</h3>
            <div className="img-info-container">
                <div key={element._id} className="itinerary-img-container">
                    <img src={element.usuarioFoto} alt={element.usuarioNombre} />
                    <p className="name-usuario">{element.usuarioNombre}</p>
                </div>
                <div className="name-itinerary">
                    <p><span>Price: </span>{("💵").repeat(element.price)}</p>
                    <p><span>Duration: </span>{("⌛").repeat(element.duracion)}</p>
                    <p><span>Likes:</span>{("♥")}</p>
                    <div className="hashtags">
                        <p><span>Hashtags: </span></p>
                        {element.hashtags.map((hashtag, index) => {
                        return (<p key={index} >{hashtag}</p>)})}   
                    </div>
                </div> 
            </div>
            <div className="viewMore-container">
                <Accordion defaultActiveKey="1">
                        <Accordion.Header>
                            View More
                        </Accordion.Header> 
                        <Accordion.Body>
                            { showActivities.map((activity) => {
                                return <Activities  data={activity} />
                            })}
                        < Comments  data={element}/>   
                        </Accordion.Body>
                </Accordion>
            </div>
        </div>
        </>
    )

}

export default Itineray