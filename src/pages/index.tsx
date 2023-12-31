import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import { GetServerSideProps } from 'next'
import language from "../../public/lang/home/head.json"
import translateFooter from "../../public/lang/home/footer.json";
import Login from '@/components/Login'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { detectDevice } from '@/lib/detectDevice'
import ModalDownloadApp from '@/components/modals/ModalDownloadApp'
const inter = Inter({ subsets: ['latin'] })

interface HomeProps {

  locale: string
}

export default function Home(props: HomeProps) {

  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {

      setIsMobile(detectDevice());

     return () => {

       setIsMobile(false);
     }
  }, [])

  return (<>

    <Head>
      {/*@ts-ignore*/}
      <title>{language.title[props.locale]}</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <div className={`${inter.className}`}><section className={`d-flex justify-content-center align-items-center mt-5`}>
        <h3>FLUMtI</h3>
        <Image src={"/favicon.ico"} alt='' width={32} height={32} />
      </section>
      </div>
      <div className={`${inter.className} row justify-content-center`}>
        {isMobile && <ModalDownloadApp locale={props.locale}/>}
        <Login locale={props.locale} />
      </div>
      <div className={`${inter.className} text-muted mt-5 mb-5`}>
        <div className={`w-100 text-center`}>
          {/*@ts-ignore*/}
          <p>{translateFooter.textCopyright[props.locale]} <Link href={"#"} className={`text-muted`}>Sergio Cristobal</Link>.Copyright © 2023</p>
        </div>
        <div>
          <hr />
        </div>
        <div>
          <Link href={"/"} className={`mx-3 text-muted`} locale={"es"}>Español</Link>
          <Link href={"/"} className={`mx-3 text-muted`} locale={"fr"}>Français</Link>
          <Link href={"/"} className={`mx-3 text-muted`} locale={"en"}>English</Link>
        </div>
      </div>
    </Layout>
  </>)

}


export const getServerSideProps: GetServerSideProps = async (context) => {

  return {

    props: {

      locale: context.locale
    }
  }
}
