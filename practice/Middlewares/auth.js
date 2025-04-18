const cookieParser = require('cookie-parser')
const jwt=require('jsonwebtoken')

const auth=(req,res,next)=>{
    try {
        const token=req.cookies.token;
        if(token){

    
        jwt.verify(token, 'eval', function(err, decoded) {
            if(decoded){
                next()
            }else{
                res.send('login again session expired')
            }

          });
        }else{
            res.send("login again")

        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports={auth}