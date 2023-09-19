import { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User, signOut, getAuth, Auth } from "firebase/auth";
import { auth, firestore, app } from "@/lib/firebaseConfig";
import Visits from "@/components/home/Visits";
import { GetServerSideProps } from 'next'
import { UseContext } from "@/lib/contextAuthFirebase";
import { useRouter } from "next/router";
import { doc, onSnapshot } from "firebase/firestore";
import { Users } from "@/lib/interfaces/users";
import NavBar from "@/components/NavBar";
import LeftBarProfile from "@/components/home/LeftBarProfile";
import styles from "@/styles/profile/Profile.module.css"
import RightBarProfile from "@/components/home/RightBarProfile";
import { ContextProvider as ContextProviderTabsMobile } from "@/lib/contextMobileTabs";
import ContentDiv from "@/components/home/ContentDiv";
interface ProfileProps {

    locale: string,

}

const Home: NextPage<ProfileProps> = (props) => {

    const context = UseContext();
    const router = useRouter();


    useEffect(() => {
        if (context.currentUser) {
            const userRef = doc(firestore, 'users', context.currentUser.uid);
            const unsubscribeFirestore = onSnapshot(userRef, (docSnapshot) => {
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();

                    context.setDataUser(userData as Users);
                    // Aquí agregamos el parámetro de consulta a la URL
                    const newQuery = { ...router.query, user: userData.username }; // Supongamos que userData tiene un campo 'username'

                    // Actualiza la URL sin recargar la página
                    router.push({ query: newQuery }, undefined, { shallow: true });

                }
            }, (error) => {
                //setError(true);
                //setMessageErrorPage(translateErrorPage.errorGetDataOrUpdateData[props.locale]);
                console.log("error");
            });

            return () => {
                unsubscribeFirestore();
            };
        }
    }, []);



    return (<>
        <Head>
            <title>Flumti- mi cuenta</title>
        </Head>
        <>
            <Layout>
                <div><NavBar locale={props.locale}/></div>
                <div>
                    <div className={`d-flex flex-column flex-xl-row`}>
                        <ContextProviderTabsMobile>
                            <LeftBarProfile />
                             <ContentDiv/>
                            <RightBarProfile />
                        </ContextProviderTabsMobile>
                    </div>
                </div>
                <div></div>
            </Layout>
        </>

    </>)

}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {

    console.log(context.locale);

    return {

        props: {

            locale: context.locale
        }
    }
}