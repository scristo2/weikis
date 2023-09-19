import { User, getAuth } from "firebase/auth";
import {NextPage} from "next";
import { useEffect, useState } from "react";

import { UseContext } from "@/lib/contextAuthFirebase";
interface VisitsInterface{

    locale : string,
}

const Visits : NextPage<VisitsInterface>=(props) => {

    const context = UseContext();


    return (<>
        <div className={`d-flex  align-items-center m-1`}>
            <div className=""><i className="bi bi-bar-chart-fill text-primary me-1"></i></div>
            <div className=""><p className="fw-bold m-0">{context.dataUser?.visits} <span className="text-muted fw-normal">visitas a tu perfil</span></p></div>
        </div>
    </>)
}

export default Visits;