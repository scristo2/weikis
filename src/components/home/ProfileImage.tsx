
import { NextPage } from "next";
import Image from "next/image";
import { UseContext } from "@/lib/contextAuthFirebase";


interface ProfileImageInterface {

     width : number,
     height : number
}


const ProfileImage: NextPage<ProfileImageInterface> = (props) => {

    const context = UseContext();

    return (<>
        <Image src={`${context.dataUser?.urlimgprofile || "/profiledefault.png"}`} className={`rounded-circle`} alt="profile image" width={props.width} height={props.height} />
    </>)
}

export default ProfileImage;