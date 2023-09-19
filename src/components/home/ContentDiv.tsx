import { NextPage } from "next";
import { UseContext as UseContextMobileTabs } from "@/lib/contextMobileTabs";
import { UseContext } from "@/lib/contextAuthFirebase";
import ActivityFriends from "./Activityfriends";
import { useEffect } from "react";
import styles from "@/styles/profile/Profile.module.css";
import ViralList from "./ViralList";
import Calendary from "./Calendary";
const ContentDiv: NextPage = () => {

    const contextTabs = UseContextMobileTabs();
    const context = UseContext();

    useEffect(() => {

        contextTabs.setTabActivityFriend(true);

        return () => {

            contextTabs.setTabActivityFriend(false);
        }

    }, [context]);



    return (<div className={`order-3 order-xl-2 flex-grow-1  ${styles.divContent}`}>
        {contextTabs.tabActivityFriends && <ActivityFriends />}
        {contextTabs.tabViral && <ViralList />}
        {contextTabs.tabCalendary && <Calendary/>}
    </div>)

}

export default ContentDiv;