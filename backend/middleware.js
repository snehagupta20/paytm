import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    try{

        let token = req.headers.authorization;

        if(token){
            token = token.split(" ")[1];
            
            let user = jwt.verify(token, process.env.JWT_SECRET );

            console.log("token = ", token);
            console.log("user is  = ",user);
            req.username = user.username;
            req.userId = user.userId;
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