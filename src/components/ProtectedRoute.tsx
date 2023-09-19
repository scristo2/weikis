import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/router";
import Loading from "./loadingFullScreen";
import { UseContext, ContextProvider } from "@/lib/contextAuthFirebase";

interface ProtectedInterface {

    children: React.ReactNode,
    locale: string,
}

const ProtectedPage: NextPage<ProtectedInterface> = (props) => {

    const context = UseContext();


    if (!context.currentUser) {

        return (<><Loading /></>)

    } else {

        return (
            props.children
        )
    }
}

export default ProtectedPage;