import { UseContext } from "@/lib/contextAuthFirebase"
import ProfileImage from "./ProfileImage";
import Visits from "./Visits";
import Notifications from "./Notifications";

const InfoBar = () => {

    const context = UseContext();

    return (<>

        <div className={`bg-white mt-xl-5`}>
            <div className={`d-flex justify-content-center align-items-center`}>
                <ProfileImage width={80} height={80} />
                <div className="mt-xl-4">
                    <div> <p className="text-primary fw-bold">{context.dataUser?.name.charAt(0).toUpperCase()! + context.dataUser?.name.slice(1)} {context.dataUser?.surname.charAt(0).toUpperCase()! + context.dataUser?.surname.slice(1)}</p></div>
                    <Visits locale="" />
                </div>
            </div>
            <Notifications />
            <hr className="" />
        </div>

    </>)
}

export default InfoBar;