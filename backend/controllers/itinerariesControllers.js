const Itineraries = require('../models/Itinerary')
const User = require('../models/User')

const itinerariesControllers = {

    itinerarioTodos: async(req,res)=>{
        let itinerarios
        let error = null
        try{
            itinerarios = await Itineraries.find().populate('city')
            
        }catch(error){
            error = error
            console.error(error)
        }  

        res.json({
            respuesta: error ? 'ERROR' : itinerarios, 
            success: error ? false : true,
            error: error
        })
    },

    agregarItinerario: (req, res) => {
        const {itinerarioNombre, usuarioNombre, usuarioFoto, price, duracion, hashtags, likes, comments} = req.body
        new Itineraries({itinerarioNombre, usuarioNombre, usuarioFoto, price, duracion, hashtags, likes, comments}).save()
        .then((response) => res.json({response}))
    },

    conseguirItinerario: async(req,res)=>{  
        let itinerarios
        const id = req.params.id        
        try{
            itinerarios = await Itineraries.findOne({_id:id}).populate('city')
        }catch(error){
            console.log(error)
        }
        res.json({respuesta: itinerarios, success:true})
    },

    borarItinerario: async(req,res)=>{
        let city
        const id = req.params.id
        try {
            city = await Itineraries.findOneAndDelete({ _id: id })
        } catch(error) {
            console.log(error)
        }
        res.json({response: city})
    },

    modificarItinerario: async(req,res)=>{
        let id = req.params.id
        let itinerarios = req.body
        let actualizado
        try{
            actualizado = await Itineraries.findOneAndUpdate({ _id : id }, itinerarios, { new : true })
        }catch(error){
            console.log(error)
        }
        res.json({success : actualizado ? true : false})
    },

    conseguirItinerarioDeUnaCiudad: async(req,res)=>{
        try{
            const itinerarioDeCiudad = await Itineraries.find({city: req.params.idCity})
            res.json({response: itinerarioDeCiudad})
        }catch(error){
            console.log(error)
        }
    },

    likeItinerary:(req,res) =>{
        Itineraries.findOne({_id: req.params.id})
        .then((itinerary) =>{
            if(itinerary.likes.includes(req.user._id)){
                Itineraries.findOneAndUpdate({_id:req.params.id}, {$pull:{likes:req.user.id}},{new:true})
               .then((newItinerary)=> res.json({success:true, response:newItinerary.likes}))
               .catch((error) => console.log(error))
            }else{
                Itineraries.findOneAndUpdate({_id: req.params.id}, {$push:{likes:req.user.id}},{new:true})
                .then((newItinerary) => res.json({success:true, response:newItinerary.likes}))
                .catch((error) => console.log(error))
            }
        })
        .catch((error) => res.json({success:false, response:error}))
    },

    getAllComments: async(req, res)=>{
        try {
           const itineraryId = req.params.id
           var itinerarySelected = await Itineraries.findOne({_id:itineraryId})
        }catch(err){
           console.log('Caí en el catch y el error es: '+err)
        }
        res.json({response: itinerarySelected.comments})
     },
  
    addNewComment: async(req, res)=>{
        console.log("addNewComment:", req.body)
        try {

           var {userId, comment, itineraryId } = req.body
           var userInfo = await User.findOne({_id: userId})
           var itineraryCommented = await Itineraries.findOneAndUpdate(
              {_id: itineraryId},
              {$push: {comments: {userId, userName: userInfo.name, userImg: userInfo.src, comment}}}, 
              {new: true}
           ) 
        }catch (err){
           console.log('Caí en el catch y el error es: '+err)
        }
        res.json({response: itineraryCommented.comments})
     },
  
     editComment: async(req, res)=>{
        console.log("edit commet: ", req.body)
        try {
            const itineraryId = req.params.id
            const commentId = req.body.commentId
            const newComment = req.body.newComment
            var itineraryModified = await Itineraries.findOneAndUpdate( 
                {_id: itineraryId, "comments.userId": commentId},  
                {$set: {"comments.$.comment": newComment}},            
                {new: true}
            )
            console.log(" itineraryModified: ",itineraryModified)
        }catch(err){
            console.log('editComment catch: ', err)
        }
        res.json({response: itineraryModified.comments})
    },
  
    deleteComment: async(req, res)=>{
        try {
           const itineraryId = req.body.itineraryId
           const commentId = req.body.commentId
           var itineraryModified = await Itineraries.findOneAndUpdate(
              {_id: itineraryId},
              {$pull: {comments: {_id: commentId}}}, 
              {new: true}
           ) 
  
        }catch(err){
           console.log('Caí en el catch y el error es: '+err)
        }
        res.json({response: itineraryModified.comments})
     }
}

module.exports = itinerariesControllers;