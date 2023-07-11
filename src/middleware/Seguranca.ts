import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'
import prismaClient from "../prisma/prismaClient";

type Payload = {
sub: string
}

    export function estaAutenticado(req: Request, res: Response, next: NextFunction){
        const tokenVerificacao = req.headers.authorization
        if(!tokenVerificacao){
            return res.status(401).end()
        }

        const [, token] = tokenVerificacao.split(" ");

        try{
            const { sub } = verify(token, process.env.JWT_SECRET) as Payload
            req.cod_usuario = sub

            next()
            
        }catch{
            return res.status(401).end()
        }    
    }

  export async function  usuarioAdministrador(req: Request, res: Response, next: NextFunction){
       if(!req.cod_usuario){
        return res.status(401).end()
       }
       const usuarioAdministrador = await prismaClient.funcionario.findFirst({
        where: {
            cod: req.cod_usuario
        }
       });

       if(!usuarioAdministrador){
        return res.status(401).end()
       }

       next()
    }

