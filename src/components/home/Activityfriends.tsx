import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
const ActivityFriends: NextPage = () => {

    const [activity, setActivity] = useState<[] | null>(null);



    return (<>
        <div className="mt-5">
            {activity?.length! < 1 || !activity?.length! ? <>
                <div className="text-center">
                    <p>No hay actividad reciente ,empieza a seguir a alguien o invita a alguien para que se una.</p>
                     <Link href={"/"} className="btn btn-warning">Buscar gente</Link> 
                </div>
            </> : <></>}
        </div>
    </>)
}

export default ActivityFriends;