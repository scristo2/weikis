import jwt from 'jsonwebtoken';



const createToken = (paylpad: Record<string, any>): String => {


    const token = jwt.sign(paylpad, `${process.env.NEXT_PUBLIC_SECRETJWT}`, { algorithm: 'HS256', expiresIn: 40 });

    return token;
}

function verifyToken(token: string): boolean {
    try {
        const decodedToken: any = jwt.verify(token, `${process.env.NEXT_PUBLIC_SECRETJWT}`); // Reemplaza 'tu_secreto_secreto' por tu clave secreta real
        const expirationDate = new Date(decodedToken.exp * 1000); // Convertir la fecha de expiración en milisegundos
        const currentDate = new Date();

        // Verificar si el token ha caducado
        if (expirationDate < currentDate) {
            return false;
        }

        // Verificar si el campo "interaction" es igual a "auth"
        if (decodedToken.interaction !== 'auth') {
            return false;
        }

        // El token es válido y cumple con los requisitos
        return true;
    } catch (error) {
        // El token no es válido o ha ocurrido un error al verificarlo
        return false;
    }
}

export { createToken, verifyToken };