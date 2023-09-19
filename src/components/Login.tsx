import React, { useState } from "react";
import Link from "next/link";
import { NextPage } from "next";
import translate from "../../public/lang/home/login.json";
import translateLoginError from "../../public/lang/home/login/errorLoginText.json"
import { emailFormat } from "@/lib/patterns";
import _fetch from "isomorphic-fetch";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";


interface LoginProps {

    locale: string
}

const Login: NextPage<LoginProps> = (props) => {

    const router = useRouter();

    const [emailOrUsername, setEmailOrUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [checkedKeepSession, setCheckedKeepSession] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [visibleErrorMessage, setVisibleErrorMessage] = useState<boolean>(false);
    const [textErrorMessage, setTextErrorMessage] = useState<string>("");




    const handleCheckBoxChange = () => {

        setCheckedKeepSession(!checkedKeepSession);
        return;
    }


    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        setIsLoading(true);
        setVisibleErrorMessage(false);

        if (!emailFormat(emailOrUsername)) {
            {/*@ts-ignore*/ }
            setTextErrorMessage(translateLoginError.invalidEmailFormat[props.locale]);
            setVisibleErrorMessage(true);
            setIsLoading(false);
            return;
        }

        if (password.length < 1) {

            {/*@ts-ignore*/ }
            setTextErrorMessage(translateLoginError.passwordEmpty[props.locale]);
            setVisibleErrorMessage(true);
            setIsLoading(false);
            return;
        }

        await signInWithEmailAndPassword(auth, emailOrUsername, password)
            .then((value: UserCredential) => {
                router.push("/account/profile", "/account/profile", {locale : props.locale})
            })
            .catch((e) => {
                setVisibleErrorMessage(true);
                if (e?.message.toString().includes("not-found")) {
                    {/*@ts-ignore*/ }
                    setTextErrorMessage(translateLoginError.errorEmailOrPassword[props.locale]);
                }

                setTextErrorMessage(e?.message);
            }).finally(() => {

                setIsLoading(false);
            })

        return;

    }


    return (<form onSubmit={handleSubmitForm} className={`col-md-8 col-lg-6 col-xl-5 mt-5`}>
        <div className={`mt-3`}>
            <input type="text" className={`form-control`} autoComplete={"on"} value={emailOrUsername} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmailOrUsername(e.target.value);
                setVisibleErrorMessage(false);
                {/*@ts-ignore*/ }
            }} placeholder={`${translate.placeholderEmail[props.locale]}`} />
        </div>
        <div className={`mt-5`}>
            <input type="password" value={password} maxLength={12} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
                setVisibleErrorMessage(false);
                {/*@ts-ignore*/ }
            }} className={`form-control`} placeholder={`${translate.placeholderPassword[props.locale]}`} />
        </div>
        <div className={`d-flex align-items-center mt-4`}>
            <div><input type="checkbox" checked={checkedKeepSession} onChange={handleCheckBoxChange} name="" id="" /></div>
            {/*@ts-ignore*/}
            <div className={`mx-2`}><p className="m-0">{translate.keepsessionText[props.locale]}</p></div>
        </div>
        <div className={`mt-4 ${visibleErrorMessage ? "" : "d-none"}`}>
            <div className={`alert alert-danger`} role="alert">
                {textErrorMessage}
            </div>
        </div>
        <div className={`mt-5 ${isLoading ? "d-none" : ""}`}>
            {/*@ts-ignore*/}
            <input type="submit" className="btn btn-success w-100" value={`${translate.submitButtonText[props.locale]}`} />
        </div>
        <div className={`justify-content-center ${isLoading ? "d-flex" : "d-none"}`}>
            <div className={`spinner-border text-primary`} role="status">
                <span className={`visually-hidden`}>Loading...</span>
            </div>
        </div>
        <div className={`d-flex justify-content-center mt-5`}>
            {/*@ts-ignore*/}
            <Link href={"#"}>{translate.resetPasswordText[props.locale]}</Link>
        </div>
    </form>)
}


export default Login;