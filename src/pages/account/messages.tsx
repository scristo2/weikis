import { NextPage, GetServerSideProps } from "next"
import NavBar from "@/components/NavBar"
import Layout from "@/components/Layout"
import Head from "next/head"
interface MessagesInterface{

    locale : string
}

const Messages : NextPage<MessagesInterface> = (props) => {

    return (<>
      <Head>
        <title>Flumti-bandeja de entrada</title>
      </Head>
      <Layout>
        <div><NavBar locale={props.locale}/></div>
        <div><p>bandeja de mensajes</p></div>
        <div></div>
      </Layout>
    </>)
} 


export default Messages;

export const getServerSideProps: GetServerSideProps = async (context) => {

    return {

        props: {

            locale: context.locale
        }
    }
}