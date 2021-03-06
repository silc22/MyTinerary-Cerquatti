import React, { useEffect , useState } from "react"
import { useDispatch } from "react-redux"
import { Accordion } from 'react-bootstrap'
import Activities from './Activities'
import activitiesActions from "../redux/actions/activitiesActions"
import Comments from './Comments'
import initinerariesActions from '../redux/actions/initineraryAction'
import {connect} from "react-redux"
import Swal from 'sweetalert2'

const Itineray = ( props ) => {
    
    const dispatch = useDispatch()
    const { element, token } = props
    // const [showActivities, setShowActivities]= useState([])
    const [like, setLike] = useState(false);
    const [itinerariesLikes, setItinerariesLikes] = useState(element.likes)
    const [viewMoreLess, setViewMoreLess] = useState(false);
    const [activity, setActivities] = useState([]);

    const likeOrDislike = itinerariesLikes.includes(element._id) ? '/heart-red.png' : '/heart.png';
    
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const likeItinerary = async () => {
        if(!token) {
            Toast.fire({
                icon: 'error',
                title: 'You must be logged to like this post!'
              })  
        }else {
        let response = await props.likeDislike(element._id, token)
        setItinerariesLikes(response.data.response)
        } 
    setLike(true)
    }

    async function getActivities() {
        try {
            let res = await props.getActivitiesByItinerary(element._id)
            if(res) {
                setActivities(res)
            }
        } catch(err) {
            console.error(err)
        }
    }

    // useEffect(()=>{
    //     return async () =>{
    //         try{
    //             let response = await dispatch(activitiesActions.getActivitiesByItinerary(element._id))
    //             setShowActivities(response)
    //         }catch (error){
    //             console.log(error)
    //         }
    //     }
    // },[])

    const handlerActivities = () => {
        setViewMoreLess(!viewMoreLess)
        getActivities()
    }

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
                    <p><span>Price: </span>{("????").repeat(element.price)}</p>
                    <p><span>Duration: </span>{("???").repeat(element.duracion)}</p>
                    <img onClick={!like ? likeItinerary : null} 
                            src={likeOrDislike}
                            className='like-heart'
                            alt='heart'
                        />
                        <span className="cont-likes">
                            {element.likes.length === 1? element.likes : element.likes.length - 1}
                        </span>
                    <div className="hashtags">
                        <p><span>Hashtags: </span></p>
                        {element.hashtags.map((hashtag, index) => {
                        return (<p key={index} >{hashtag}</p>)})}   
                    </div>
                </div> 
            </div>
            <div className="viewMore-container">
                <Accordion defaultActiveKey="1">
                        <Accordion.Header onClick={() => handlerActivities()}>
                                { viewMoreLess ?  "View less" : "View more"}
                        </Accordion.Header>
                        <Accordion.Body>
                        <Activities  data={activity} />
                        < Comments  itineraryId={element._id} itineraryComments={element.comments}/>   
                        </Accordion.Body>
                </Accordion>
            </div>
        </div>
        </>
    )

}


const mapStateToProps = (state)=>{
    return {
            token: state.authReducer.token
    }
}

const mapDispatchToProps = {
    likeDislike: initinerariesActions.likeItinerary,
    getActivitiesByItinerary: activitiesActions.getActivitiesByItinerary
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineray)