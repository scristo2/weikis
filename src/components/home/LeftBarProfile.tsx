import InfoBar from "./InfoBar";
import styles from "@/styles/profile/Profile.module.css";
import InviteFriends from "./InviteFirends";
import BarButtonMobile from "./BarButtonsMobile";
import Calendary from "./Calendary";
import Footer from "./Footer";
const LeftBarProfile = () => {

    return (<>
        <div className={styles.bar}>
            <BarButtonMobile/>
            <InfoBar />
            <div className={`d-none d-xl-block`}>
                <p className="fw-bold p-1">Invita a tus amigos</p>
                <InviteFriends />
            </div>
            <div className={`d-none d-xl-block`}>
                <p className={`fw-bold p-1`}>Calendario</p>
                <hr />
                <Calendary/>
            </div>
            <Footer/>
        </div>
    </>);
}

export default LeftBarProfile;