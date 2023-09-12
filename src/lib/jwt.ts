import jwt from 'jsonwebtoken';



const createToken = (paylpad: Record<string, any>): String => {

    const token =  jwt.sign(paylpad, `${process.env.NEXT_PUBLIC_SECRETJWT}`, { algorithm: 'HS256', expiresIn : 40 });

    return token;
}

export { createToken };