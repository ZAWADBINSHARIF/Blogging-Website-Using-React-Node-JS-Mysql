// external import
import jwt from 'jsonwebtoken';


export function checkLogin(req, res, next) {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("Not authenticated");

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
        if (err) return res.status(403).json('Token is not vaild');

        req.userInfo = userInfo;

        next();
    });
}