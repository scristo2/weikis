import { isMobile, isTablet } from "react-device-detect";

const detectDevice = () : boolean => {

    let mobile : boolean = false;
    
    if(isMobile || isTablet){

        mobile = true;
    }

    return mobile;
}

export {detectDevice}