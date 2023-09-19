
import styles from "@/styles/profile/Profile.module.css"
import ArrowDown from "../icons/ArrowDown";
import { RefObject, useRef } from "react";
import { UseContext as UseContextTabs } from "@/lib/contextMobileTabs";
import ViralList from "./ViralList";

const RightBarProfile = () => {

    const refActivity = useRef<HTMLInputElement | null>(null);
    const refViral = useRef<HTMLInputElement | null>(null);
    const refCalendary = useRef<HTMLInputElement | null>(null)
    const context = UseContextTabs();

    const handleClick = (e: RefObject<HTMLInputElement>) => {

        context.setTabActivityFriend(false);
        context.setTabViral(false);
        context.setTabCalendary(false);

        switch (e.current?.id.toString()) {

            case "activity":
                context.setTabActivityFriend(true);
                break;

            case "viral":
                context.setTabViral(true);
                break;

            case "calendary":
                context.setTabCalendary(true);
                break;

        }

    }

    return (<>
        <div className={`${styles.bar} order-2 order-xl-3`}>
            {/*div espaciador para que se vea*/}
            <div className="mt-xl-5 d-xl-none">
                {/*este div solo tendria que estar en en sidebar de la izquierda,pero para menos de 1200px,lo pongo a la derecha,para que quede abajo*/}
                <div className={`d-flex justify-content-between ${styles.test}`}>
                    <div className={``} ref={refActivity} onClick={() => handleClick(refActivity)} id="activity" role="button">
                        <p className={`fw-bold text-center m-0 ${context.tabActivityFriends ? "text-muted" : ""}`}>Actividad</p>
                    </div>
                    <div className={``} id="viral" ref={refViral} onClick={() => handleClick(refViral)} role="button">
                        <p className={`fw-bold text-center m-0 ${context.tabViral ? "text-muted" : ""}`}>popular</p>
                    </div>
                    <div className={``} ref={refCalendary} onClick={() => handleClick(refCalendary)} id="calendary" role="button">
                        <p className={`fw-bold text-center m-0 ${context.tabCalendary ? "text-muted" : ""}`}>Calendario</p>
                    </div>
                </div>
            </div>
            {/*fin del div solo para para menos de 1200px*/}
            <div className={` ${styles.divRightBar} d-none d-xl-block p-1`}>
                 <p className={`fw-bold`}>+ popular</p>
                 <hr />
                <ViralList/>
            </div>
        </div>
    </>)
}

export default RightBarProfile;