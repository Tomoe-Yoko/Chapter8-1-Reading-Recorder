import { PrismaClient } from "@prisma/client";
//global.prisma上にPrismaクライアントが存在すれば再利用
const prisma = grobal.prisma ?? new PrismaClient({ log: ["query"] });
//非Production環境ではglobal.prismaにオブジェクトを格納
if (process.env.NODE_ENV !== "production") global.prisma = prosma;

export default prisma;
