import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { emailFormat } from "@/lib/patterns";

const InviteModal = () => {

    const [totalInvitations, setTotalInvitations] = useState<number>(10);
    const [email, setEmail] = useState<string>("");
    const [errorFormatEmail, setErrorFormatEmail] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const refButtonOpenAnswer = useRef<HTMLButtonElement>(null);
    const refAnwersRequest = useRef<HTMLDivElement | null>(null);
    const [successRequests, setSuccessRequests] = useState<boolean>(false);


    useEffect(() => {

        return () => {

            setEmail("");
        }
    }, [])


    const handleChangeValueEmailInput = (e: ChangeEvent<HTMLInputElement>) => {

        setEmail(e.target.value);
        setErrorFormatEmail(false);
    }

    const handleInvite = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        setIsLoading(true);


        if (!emailFormat(email)) {

            setErrorFormatEmail(true);
            setIsLoading(false);
            return;
        }


        refButtonOpenAnswer.current?.setAttribute('data-bs-target', '#invitemodal2');
        refButtonOpenAnswer.current?.setAttribute('data-bs-toggle', 'modal');
        refButtonOpenAnswer.current?.click();

        setIsLoading(false);


    };



    return (<>
        {/* Modal */}
        <div>
            <div className="modal fade" id="invitemodal1" data-bs-backdrop="static" aria-hidden="true" aria-labelledby="invitemodalLabel1" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="invitemodalLabel1">Invita a gente</h1>
                            <button type="button" className="btn-close" onClick={() => {
                                setEmail("");
                                setIsLoading(false);
                                setErrorFormatEmail(false);
                            }} data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <p className="fw-bold text-muted">{totalInvitations} invitaciones</p>
                            <form onSubmit={handleInvite}>
                                <div className="d-flex align-items-center">
                                    <input type="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeValueEmailInput(e)} className="form-control me-1" placeholder="email" />
                                    <input type="submit" className={`btn btn-success ${isLoading ? "d-none" : ""}`} value="enviar" />
                                    <div className={`spinner-border me-2 text-primary ${isLoading ? "" : "d-none"}`} role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                <div className={`alert alert-danger mt-4 ${errorFormatEmail ? "d-block" : "d-none"}`} role="alert">
                                    <p className="m-0 p-0">Introduce un formato de email valido.</p>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refButtonOpenAnswer} className="btn btn-primary d-none"></button>
                        </div>
                    </div>
                </div>
            </div>
            {/*answer send invitacion, second modal*/}
            <div ref={refAnwersRequest} className="modal fade" id="invitemodal2" data-bs-backdrop="static" aria-hidden="true" aria-labelledby="invitemodalLabel2" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="invitemodalLabel2">Respuesta invitacion enviada</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="text-muted"><p>javier235hj@hotmail.com</p></div>
                            <div className={`alert alert-success`} role="alert">
                                La invitacion se ha enviado correctamente.
                            </div>
                            <div className={`alert alert-danger`} role="alert">
                                La invitacion no se ha podido enviar debido a un error.
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className={`btn btn-primary`} data-bs-target="#invitemodal1" onClick={() => {setEmail("");}} data-bs-toggle="modal">{successRequests ? "enviar otra" : "reintentar"}</button>
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" aria-label="Close">cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>)
}

export default InviteModal;