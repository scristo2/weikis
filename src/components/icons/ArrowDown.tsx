import { NextPage } from "next";
import type { IconInterface } from "@/lib/interfaces/icon";

const ArrowDown: NextPage<IconInterface> = (props) => {

    return (<>
        <i className={`bi bi-caret-down-fill ${props.textcolor} ${props.fontsize}`}></i>
    </>)
}

export default ArrowDown;