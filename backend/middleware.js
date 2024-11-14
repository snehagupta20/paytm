import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    try{
        // check if u got any token or not
        // console.log(req);
        let token = req.headers.authorization;

        if(token){
            // console.log(token);
            // sneha gupta -> ["sneha", "gupta"]
            token = token.split(" ")[1];
            
            let user = jwt.verify(token, process.env.JWT_SECRET );

            req.username = user.username;
        } else {
            return res.status(403).json({
                message : "User unauthorised"
            });
        }

        next();

    } catch (error) {
        console.log(error);
        return res.status(403).json({
            message : "user unauthorised"
        });
    }
}

export default auth;