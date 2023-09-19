import Image from 'next/image'
import { UseContext } from '@/lib/contextAuthFirebase';
import { useEffect } from 'react';

const Loading = () => {
   
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <Image src={"/loadingfull.gif"} priority alt='Loading ...' width={200} height={200} />
        </div>)
}


export default Loading;