import _fetch from "isomorphic-fetch";
import type { NextApiRequest, NextApiResponse } from "next";
import { createToken } from "@/lib/jwt";

type Data = {

    status: string,
    messageError: string,
    message: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {



    try {

        if (!req.body?.email || !req.body?.password || typeof req.body?.checkedsession !== "boolean") {

            throw new Error("Se necesita el token");
        }

        const token = createToken({email : req.body?.email, password : req.body?.password, keepsession : req.body?.checkedKeepSession});
        
        console.log(token);
      
        return res.status(200).json({ status: "ok", messageError: "", message: token });


    } catch (e: any) {
        console.log(e);
        return res.status(500).json({ status: "error", messageError: e?.message, message: [] });
    }
}


