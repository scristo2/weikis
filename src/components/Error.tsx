import { NextPage } from "next";
import Layout from "./Layout";
import Image from "next/image";
import translateErrorPage from "../../public/lang/errorpage.json";
import { useRouter } from "next/router";
interface ErrorPageInterface {

    message: string,
    locale: string
}

const ErrorPage: NextPage<ErrorPageInterface> = (props) => {

    const router = useRouter();

    return (<>
        <Layout>
            {/*header*/}
            <div></div>
            {/*main*/}
            <div className="">
                <div className="text-center"><Image src="/error.gif"  width={200} height={200} alt="error image"/></div>
                <div className="mt-5 fw-bold fs-5 text-center"><p>{props.message}</p></div>
                {/*@ts-ignore*/}
                <div className="mt-5 mb-5 text-center"><input onClick={() => router.reload()} type="button" className="btn btn-danger" value={translateErrorPage.textReloadButton[props.locale]} /></div>
            </div>
            {/*footer*/}
            <div></div>
        </Layout>
    </>)
}

export default ErrorPage;