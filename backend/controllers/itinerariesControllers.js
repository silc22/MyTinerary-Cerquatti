const Itineraries = require('../models/Itinerary')


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
    editComment: async (req, res) => {
        switch(req.body.type){
            case "addComment":
                try {
                    const newComment = await Itinerary.findOneAndUpdate({_id: req.params.id}, {$push: {comments: {comment: req.body.comment, userId: req.user._id}}}, {new: true}).populate("comments.userId")
                    if (newComment) {
                        res.json({success: true, response: newComment.comments})
                    } else {
                        throw new Error()
                    }
                } catch (error) {
                    res.json({success: false, response: error.message})
                }
                break

            case "editComment": 
                try {
                    let editedComment = await Itinerary.findOneAndUpdate({"comments._id": req.params.id}, {$set: {"comments.$.comment": req.body.comment}}, {new: true})
                    if (editedComment) {
                        res.json({success: true, response: editedComment.comments})
                    } else {
                        throw new Error()
                    }
                } catch (error) {
                    res.json({success: false, response: error.message})
                }
                break

            case "deleteComment":
                try {
                    let deletedComment = await Itinerary.findOneAndUpdate({"comments._id": req.body.commentId}, {$pull: {comments: {_id: req.body.commentId}}}, {new: true})
                    if (deletedComment) {
                        res.json({success: true})
                    } else {
                        throw new Error()
                    }
                } catch (error) {
                    res.json({success: false, response: error.message})
                }
                break  
        }
    },

    likesItinerary:(req,res) =>{
        Itinerary.findOne({_id: req.params.id})
        .then((itinerary) =>{
            if(itinerary.likes.includes(req.user._id)){
                Itinerary.findOneAndUpdate({_id:req.params.id}, {$pull:{likes:req.user.id}},{new:true})
                .then((newItinerary)=> res.json({success:true, response:newItinerary.likes}))
                .catch((error) => console.log(error))
            }else{
                Itinerary.findOneAndUpdate({_id: req.params.id}, {$push:{likes:req.user.id}},{new:true})
                .then((newItinerary) => res.json({success:true, response:newItinerary.likes}))
                .catch((error) => console.log(error))
            }
        })
        .catch((error) => res.json({success:false, response:error}))
    },

}

module.exports = itinerariesControllers;