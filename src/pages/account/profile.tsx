import { NextPage, GetServerSideProps } from "next"
import NavBar from "@/components/NavBar"
import Layout from "@/components/Layout"
import Head from "next/head"

interface ProfileInterface{

    locale : string
}

const Profile : NextPage<ProfileInterface> = (props) => {

    return (<>
      <Head>
        <title>Flumti-mi perfil</title>
      </Head>
      <Layout>
        <div><NavBar locale={props.locale}/></div>
        <div><p>mi perfil</p></div>
        <div></div>
      </Layout>
    </>)
} 


export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {

    return {

        props: {

            locale: context.locale
        }
    }
}