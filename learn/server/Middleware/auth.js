const cookieparser=require('cookie-parser')
const jwt=require('jsonwebtoken')
const auth=(req,res,next)=>{
    try {
        const token=req.cookies.token;
        console.log(token)
        if(token){
            jwt.verify(token,'practice',function (err,decoded){
                if(decoded){
                  
                    next()
                }else{
                    res.send({mag:"login again"})
                }
            })
        }else{
            res.send({mag:"please login"})
        }

    } catch (error) {
        res.send({msg:"eroor"})
    }
}

module.exports={auth}