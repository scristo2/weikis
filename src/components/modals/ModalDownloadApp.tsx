import { NextPage } from "next";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
interface ModalDownloadAppInterface {

    locale: string
}

const ModalDownloadApp: NextPage<ModalDownloadAppInterface> = (props) => {

    const refModaldownloadApp = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {

        refModaldownloadApp.current?.click();

    }, [])


    return (<>
        <div>
            {/* Button trigger modal */}
            <button type="button" ref={refModaldownloadApp} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#modalDownloadApp">
                Launch static backdrop modal
            </button>
            {/* Modal */}
            <div className="modal fade" id="modalDownloadApp" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Descarga nuestra app</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div>
                                <div role="button" className={`btn btn-dark p-2 d-flex align-items-center justify-content-center`}>
                                    <i className={`bi bi-apple fs-1`}></i>
                                    <p className={`text-light fw-bold  m-0`}>Apple store</p>
                                </div>
                                <div role="button" className={`btn btn-dark mt-5 d-flex align-items-center justify-content-center`}>
                                    <Image src={"/google-play.png"} width={50} height={50} priority alt="google play icon"/>
                                    <p className={`text-light fw-bold  m-0`}>Google Store</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">seguir en la web</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default ModalDownloadApp;