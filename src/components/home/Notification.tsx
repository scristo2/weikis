import { NextPage } from "next";
import Link from "next/link";
import React from "react";
interface NotificationProps {

    href: string,
    total: number,
    text: string,
    notification: string, //
    children: React.ReactNode //aqui ponemos el el icono

}

const Notification: NextPage<NotificationProps> = (props) => {




    return (<>
        <div className={`mt-3 ${props.total < 1 ? "d-none" : ""}`}>
            <Link href={`${props.href}`} className={`text-decoration-none`}>
                <section className={`fw-bold  d-flex align-items-center text-success justify-content-center`}>
                    {props.children}
                    <p className={`m-0 mx-1`}>{props.total} {props.text}</p>
                </section>
            </Link>
        </div>
    </>)
}

export default Notification;