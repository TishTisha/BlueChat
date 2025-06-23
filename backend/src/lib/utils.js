import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {

      const token = jwt.sign({userId}, process.env.JWT_TOKEN,{
            expiresIn: "7d",
      });

      res.cookie("jwt", token,{
            maxAge: 7*24*60*60*1000, // in milliseconds
            httpOnly: true, //prevent xss attacks
            sameSite: "strict", //csrf attack
            secure: process.env.NODE_ENV !== "development" //currently in dev mode hence not secure ie http otherwise https.
      })

      return token;
}