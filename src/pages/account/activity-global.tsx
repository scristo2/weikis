import { NextPage, GetServerSideProps } from "next"
import NavBar from "@/components/NavBar"
import Layout from "@/components/Layout"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
interface ActivityGlobalInterface{

    locale : string
}

const ActivityGlobal : NextPage<ActivityGlobalInterface> = (props) => {

    const router = useRouter();

   
  

    return (<>
      <Head>
        <title>Flumti-actividad global</title>
      </Head>
      <Layout>
        <div><NavBar locale={props.locale}/></div>
        <div><p>actividad global</p></div>
        <div></div>
      </Layout>
    </>)
} 


export default ActivityGlobal;

export const getServerSideProps: GetServerSideProps = async (context) => {

    return {

        props: {

            locale: context.locale
        }
    }
}