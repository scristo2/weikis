import { User } from 'firebase/auth';
import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
    useEffect
} from 'react';
import { useRouter } from "next/router";
import { UseContext as UseContextAuth } from './contextAuthFirebase';
import { Users } from './interfaces/users';

interface ContextChildren {
    children: React.ReactNode;
}

interface AppContext {

   tabActivityFriends : boolean,
   setTabActivityFriend : Dispatch<SetStateAction<boolean>>,
   tabViral : boolean,
   setTabViral : Dispatch<SetStateAction<boolean>>,
   tabCalendary : boolean,
   setTabCalendary : Dispatch<SetStateAction<boolean>>


}

const ContextValue: AppContext = {
   
    tabActivityFriends : false,
    setTabActivityFriend : async () => {},
    tabViral : false,
    setTabViral : async () => {},
    tabCalendary : false,
    setTabCalendary : async () => {}

};

const AppContext = createContext<AppContext>(ContextValue);

const UseContext = () => useContext(AppContext);

const ContextProvider = ({ children }: ContextChildren) => {

    const router = useRouter();
    const context = UseContextAuth();
    
    const [tabActivityFriends,setTabActivityFriend] = useState<boolean>(false);
    const [tabViral, setTabViral] = useState<boolean>(false);
    const [tabCalendary, setTabCalendary] = useState<boolean>(false);

    

    return (
        <AppContext.Provider value={{ tabActivityFriends : tabActivityFriends, setTabActivityFriend : setTabActivityFriend,
        tabViral : tabViral, setTabViral : setTabViral,
        tabCalendary : tabCalendary, setTabCalendary : setTabCalendary}}>
            {children}
        </AppContext.Provider>
    );
};

export { UseContext, ContextProvider }