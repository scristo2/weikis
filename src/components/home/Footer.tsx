import { useEffect, useState } from "react";

const Footer = () => {

    const [year, setYear] = useState<number | null>(null);


    const getYear = () => {

        const date = new Date();

        setYear(date.getFullYear());
    }

    useEffect(() => {

        getYear();
       
         return () => {

            setYear(null);
         }

    }, [])

    return (<>
        <div className={`d-none d-xl-block mb-xl-5 mt-xl-5 text-center`}>
            <p className="text-muted">Flumti. Copyright &copy; 2023-<span>{year === 2023 ? "" : year}</span></p>
        </div>
    </>)
}

export default Footer;