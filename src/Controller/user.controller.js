const User = require("../model/user.model")

exports.createUser = async(req,res)=>{
      try {
         const user = await User.create(req.body)
         res.status(200).json({
             message:"user successfully created ..",
             data:user
         })
      } catch (error) {
         res.status(500).json({
            message:"something went worng", 
            error})
      }
}