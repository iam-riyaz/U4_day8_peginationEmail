

const express=require("express")

const transport=require("../configs/mail")

const Users=require("../models/users.model")

const router=express.Router()

router.get("/", async(req,res)=>{

    try{
      const page=req.query.page ||  1;
      const pagesize=req.query.pagesize || 10

      const skip=(page-1)*pagesize;

      const users= await Users.find().skip(skip).limit(pagesize).lean().exec();

      const totalPages=Math.ceil(
         ( await Users.find().countDocuments())/pagesize
      )
      return res.status(200).send({users,totalPages})
    }
    catch(err)
    {
     return res.status(500).send(err.message)
    }
})


router.post("/",async(req,res)=>{
    try
    {
      const users= await Users.create(req.body)
      transport.sendMail({
        from: '"facebook head office" <headOfficeFacebook@facebook.com>', // sender address
        to:users.email, // list of receivers
        subject:`Welcome to ABC system ${users.first_name} ${users.last_name}`, // Subject line
        text:`Hi ${users.first_name}, Please confirm your email address`, // plain text body
        html: `Hi ${users.first_name}, Please confirm your email address` // html body


      });

      return res.status(200).send("user account created successfullu")
    }
    catch(err)
    {
      return res.status(500).send(err.message)
    }
})

module.exports=router