import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class User {

    static async findUserByEmail(email: string) {
        try {
            return await prisma.user.findUnique({
                where: {
                    email: email,
                }
            })
        } catch (error) {
            console.error(error);
            throw new Error("Failed to fetch user from database");
        }
    }

    static async createUser(email: string, hashedPassword: string, username: string) {
        try {
            return await prisma.user.create({
                data: {
                    name: username, 
                    email: email, 
                    password: hashedPassword,
                }
            })
        } catch (error) {
            console.error(error);
            throw new Error("Failed to create new user");
        }
    }

}

export default User;