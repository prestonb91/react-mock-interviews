import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({error: "Unauthorized"});

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        if (err) return res.status(403).json({error: "Forbidden"});  
        (req as any).user = decoded;
        next();
    })
}

export const authorizeRole = (role: string) => {
    return (req: Response, res: Response, next: NextFunction) => {
        if ((req as any).user.role !== role) {
            return res.status(403).json({error: "Access denied"});
        }
        next();
    }
}

export default { authenticateJWT, authorizeRole };
