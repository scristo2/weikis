import ProfileImage from "./home/ProfileImage";
import styles from "@/styles/profile/Profile.module.css";
import { useRouter } from "next/router";
import { UseContext } from "@/lib/contextAuthFirebase";
import { NextPage } from "next";
import { MutableRefObject, useEffect, useRef, useState } from "react";

interface NavBarInterface {

    locale: string
}

const NavBar: NextPage<NavBarInterface> = (props) => {

    const router = useRouter();
    const context = UseContext();

    const refHome = useRef<HTMLElement | null>(null);
    const refGlobal = useRef<HTMLElement | null>(null);
    const refProfile = useRef<HTMLElement | null>(null);
    const refMessages = useRef<HTMLElement | null>(null);


    const handleLink = async (href: string) => {

        await router.push(`${href}?user=${context.dataUser?.username}`, undefined, { locale: props.locale });

    }


    useEffect(() => {


        switch (router.pathname) {

            case "/account/home":

                refHome.current?.classList.add("text-warning");
                break;

            case "/account/messages":

                refMessages.current?.classList.add("text-warning")
                break;

            case "/account/activity-global":
                refGlobal.current?.classList.add("text-warning");
                break;

            case "/account/profile":
                refProfile.current?.classList.add("text-warning");    
        }


        return () => {

            refHome.current?.classList.remove("text-warning");
            refMessages.current?.classList.remove("text-warning");
            refGlobal.current?.classList.remove("text-warning");
            refProfile.current?.classList.remove("text-warning");
        }


    }, [])



    return (<>
        {/*para menos de xxl bottom*/}
        <nav className={`fixed-bottom d-xl-none`}>
            <div className="d-flex align-items-center justify-content-between mx-1  p-1">
                <div className="pe-auto" role={"button"}>
                    <i ref={refHome} className={`bi bi-house-fill fs-3  pe-auto`}></i>
                </div>
                <div className="pe-auto" role={"button"}>
                    <i className={`bi bi-globe-europe-africa fs-3 `}></i>
                </div>
                <div className="pe-auto" role={"button"}>
                    <i className="bi bi-plus-square fs-3"></i>
                </div>
                <div className="pe-auto" role={"button"}>
                    <ProfileImage width={30} height={30} />
                </div>
                <div className="pe-auto" role={"button"}>
                    <i className={`bi bi-three-dots fs-3 text-warning`}></i>
                </div>
            </div>
        </nav>
        {/*para mas de xxl*/}
        {/*para mas de xxl top*/}
        <nav className={`fixed-top d-none d-xl-block`}>

            <div className="d-flex align-items-center justify-content-between mx-1 bg-primary text-white p-1">
                <div className="pe-auto mx-3" role={"button"}>
                    <i id="profile" ref={refHome} onClick={() => handleLink("/account/home")} className={`bi bi-house-fill fs-3 pe-auto`}></i>
                </div>
                <div className="pe-auto" role={"button"}>
                    <i id="global" ref={refGlobal}  onClick={() => handleLink("/account/activity-global")} className={`bi bi-globe-europe-africa fs-3 `}></i>
                </div>
                <div className="pe-auto" role={"button"}>
                    <i className="bi bi-plus-square fs-3"></i>
                </div>
                <div className="pe-auto" role={"button"}>
                    <ProfileImage width={30} height={30} />
                </div>
                <div className="pe-auto" role="button" onClick={() => handleLink("/account/messages")}>
                    <i id="messages" ref={refMessages} className={`bi bi-envelope-fill fs-3 `}></i>
                </div>
                <div className="pe-auto mx-3" role={"button"}>
                    <i className={`bi bi-three-dots fs-3 text-warning`}></i>
                </div>
            </div>
        </nav>
        <div className="d-flex fixed-bottom mb-5 justify-content-end container">
            <div className="pe-auto bg-primary rounded p-2 text-center" role={"button"}>
                <i className={`bi bi-pencil-square text-light fs-3  pe-auto`}></i>
            </div>
        </div>
    </>)
}

export default NavBar;