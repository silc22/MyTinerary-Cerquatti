const User = require('../models/User')
const bcryptjs = require('bcryptjs')


const authControllers = {

    // + al momento de registrar usuarios en nuestra aplicación, 
    // + hay situaciones que tenemos tener en cuenta  
    // + cuales son estas situaciones a tener en cuenta ?

    // - 1) que no haya usuarios repetidos
    // - 2) seguridad de la contraseña
    // - 3) validacion de datos


    newUser: async(req, res) => {
        
        let { userName, password } = req.body      
        // tengo que hashear (hash) la contraseña y guardarla en la base de datos
        console.log(req.body)
        try {

            const userExists = await User.findOne({userName})
            if (userExists){
                res.json({success: false, error:"El nombre de usuario ya esta en uso", response:null})
            }else{

                const contraseñaHasheada = bcryptjs.hashSync(password, 10)

                const newUser = new User({
                    userName, 
                    password:contraseñaHasheada
                })
            
                await newUser.save()
                res.json({success: true, response: newUser, error: null})
            }
        
        }catch(error){
            res.json({success: false, response: null, error: error})
        }

        
    },
    loginAccount: async(req, res)=>{
        const { userName, password } = req.body
        console.log(req.body)
        try {

            const userExists = await User.findOne({userName})
            if (!userExists){
                res.json({success: true, error:"El usuario y/o contraseña incorrectos"})
            }else{
                let contraseñaCoincide = bcryptjs.compareSync(password, userExists.password)
                if (contraseñaCoincide) {
                    res.json({success:true, response:{userName} ,error:null})
                }else{
                    res.json({success: true, error:"El usuario y/o contraseña incorrectos"})
                }
            }

        }catch(error){
            res.json({success: false, response: null, error: error})
        }
    }


}

module.exports = authControllers;