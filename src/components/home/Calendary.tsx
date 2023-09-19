import { useEffect, useState } from "react";


const Calendary = () => {

  const [calendary, setCalendary] = useState<[] | null>(null);


  return (<>
    <div className={`mt-5 mt-xl-3`}>
      {calendary?.length! < 1 || !calendary ? <>
        <div className={`text-center`}>
          <p className="text-muted">Aqui puedes ver los eventos que has creado,te has unido, cumpleaños de tus amigos etc</p>
          <p>No tienes de momento ningun evento proximo.</p>
          <input type="button" role="button" className="btn btn-warning" value={"crear evento"} />
        </div>
      </> : <></>}
    </div>
  </>)
}

export default Calendary;