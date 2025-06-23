import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

//the next function is gonna call the next function ie updateProfile only when the protect route function has been succesfullly executed.

export const protectRoute = async (req, res, next) => {
      try{
            const token = req.cookies.jwt;

            if(!token){
                  return res.status(401).json({message:"Unathorized - no token provided"});
            }

            //token provided check if token is valid or not

            const decoded= jwt.verify(token, process.env.JWT_TOKEN);
            if(!decoded){
                  return res.status(401).json({ message: "Unathorized - Invalid Token"});
            }

            const user = await User.findById(decoded.userId).select("-password");

            if(!user)
            {
                  return res.status(404).json({ message: "User not found"});
            }

            req.user = user;
            next();
            
      }
      catch(error){
                console.log("error in protectRoute middleware", error.message);
                res.status(500).json({ message: "Internal server error" });
      }
};