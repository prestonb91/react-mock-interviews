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

/*
import accountModel from "../models/account.model";
import { Response, Request, NextFunction, CookieOptions } from "express";
import { getAuth } from "firebase-admin/auth";

async function loginHandler(req: Request, res: Response) {
    try {
        const email = req.body.email;
        const idToken = req.body.token;
        const userAccount = await accountModel.getAccountByEmail(email);
        const expiresIn = 60 * 60 * 24 * 5 * 1000;
        getAuth().verifyIdToken(idToken).then((res) => {
            // verify that user signed in within the last five minutes
            if (new Date().getTime() / 1000 - res.auth_time < 5 * 60) {
                return getAuth().createSessionCookie(idToken, {expiresIn});
            }
            throw new Error("Unauthorized request");
            })
            .then((sessionCookie) => {
                const options:CookieOptions = {maxAge: expiresIn, httpOnly: true, secure: true, sameSite: "none"};
                res.cookie('session', sessionCookie, options);
                res.status(201).send(userAccount);
            })
            .catch((err) => {
                res.status(401).send("Unauthorized request");})
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'An error occured while logging in.'});
    }
}

async function logoutHandler(req: Request, res: Response) {
    const sessionCookie = req.cookies.session || '';
    res.clearCookie('session');
    if (sessionCookie) {
        getAuth().verifySessionCookie(sessionCookie, true).then((res) => {
            return getAuth().revokeRefreshTokens(res.sub);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({error: 'An error occurred while logging out'});
        })
    }
    res.end();
}

function authenticateUser(req: Request, res: Response, next: NextFunction) {
    const sessionCookie = req.cookies.session || '';
    getAuth().verifySessionCookie(sessionCookie, true).then((authenticatedCookie) => {
        next();
    })
    .catch((err) => {
        res.status(401).json({error: 'Unauthorized'});
    })
}

function authenticateAdmin(req: Request, res: Response, next: NextFunction) {
    const sessionCookie = req.cookies.session || '';
    getAuth().verifySessionCookie(sessionCookie, true).then(async (authenticatedCookie) => {
        const email = authenticatedCookie.email
        if (email) {
            const userAccount = await accountModel.getAccountByEmail(email);
            if (userAccount?.Privileges?.is_admin) {
                next();
            }
        }
    })
    .catch((err) => {
        res.status(401).json({error: 'Unauthorized'});
    })
}

function authenticateSupervisor(req: Request, res: Response, next: NextFunction) {
    const sessionCookie = req.cookies.session || '';
    getAuth().verifySessionCookie(sessionCookie, true).then(async (authenticatedCookie) => {
        const email = authenticatedCookie.email
        if (email) {
            const userAccount = await accountModel.getAccountByEmail(email);
            if (userAccount?.Privileges?.is_supervisor) {
                next();
            }
        }
    })
    .catch((err) => {
        res.status(401).json({error: 'Unauthorized'});
    })
}

// function authenticateAdminOrSupervisor(req: Request, res: Response, next: NextFunction) {
//     const sessionCookie = req.cookies.session || '';
//     getAuth().verifySessionCookie(sessionCookie, true).then(async (authenticatedCookie) => {
//         const email = authenticatedCookie.email
//         if (email) {
//             const userAccount = await accountModel.getAccountByEmail(email);
//             if (userAccount?.Privileges?.is_admin || userAccount?.Privileges?.is_supervisor) {
//                 next();
//             }
//         }
//     })
//     .catch((err) => {
//         res.status(401).json({error: 'Unauthorized'});
//     })
// }

export { loginHandler, logoutHandler, authenticateUser, authenticateAdmin, authenticateSupervisor };
*/