import jwt from 'jsonwebtoken';
import User from '../models/User';

const authenticate = (req, res, next)=>{
    const header = req.header("authorization");
    let token = null;
    if(header) {
        const tokens = header.split(' ');
        if(tokens && tokens.length>0)
            token = tokens[1];
    };

    if(token){
        jwt.verify(token, process.env.JWT_SECRET,(err, decoded)=>{
            if(err){
                res.status(401).json({errors:{globals:"Invalid token"}});
            }
            else{
                User.findOne({email: decoded.email}).then(user=>{
                    req.currentUser = user;
                    next();
                })
            }
        })
    }
    else{
        res.status(401).json({errors:{globals:"No token"}});
    }
}

export default authenticate; 