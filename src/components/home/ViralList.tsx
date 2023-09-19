import { useEffect, useState } from "react";


const ViralList = () => {

    const [viral, setViral] = useState<[] | null>(null);


    return (<>
      <div className={`mt-5`}>
        {viral?.length! < 1 || !viral ? <>
         <div className={`text-center`}>
            <p>Estamos empezando y no hay ninguna publicacion viral. :{`(`}</p>
         </div>
        </> : <><p>sss</p></>}
      </div>
    </>)
}

export default ViralList;