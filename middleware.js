
import { dec } from "./jws.js";

export default (req, res, next) => {

    const token = req.header("x-auth-token");
    if (!token) return res.status(403).json("Not allowed...")

    try {

        dec(token).then(data => {
            req.email = JSON.parse(data.payload).email;
            next();
        }).catch(err => {
            return res.status(403).json("Invalid token...");
        });

    }catch (err) {
        return res.status(403).json("Invalid token...");
    }

};