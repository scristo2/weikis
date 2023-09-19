import InviteModal from "./modals/InviteUser";
import Link from "next/link";

const BarButtonMobile = () => {

    return (<>
        <div className={`d-flex d-xl-none justify-content-between mt-1 mb-3`}>
            <div className="">
                <Link className="btn btn-primary" data-bs-toggle="modal" href="#invitemodal1" role="button">invitar</Link>
            </div>
            <div className="">
                <input type="button" role="button" value={"mensajes"} className="btn btn-secondary" />
            </div>
        </div>
        <InviteModal />
    </>)
}

export default BarButtonMobile;