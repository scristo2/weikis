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
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Loading from '@/components/loadingFullScreen';
import { Users } from './interfaces/users';

interface ContextChildren {
    children: React.ReactNode;
}

interface AppContext {

    currentUser: User | null,
    setCurrentUser: Dispatch<SetStateAction<User | null>>,
    dataUser : Users | null,
    setDataUser : Dispatch<SetStateAction<Users | null>>
   


}

const ContextValue: AppContext = {
    currentUser: null,
    setCurrentUser: async () => { },
    dataUser : null,
    setDataUser : async () => {}
    

};

const AppContext = createContext<AppContext>(ContextValue);

const UseContext = () => useContext(AppContext);

const ContextProvider = ({ children }: ContextChildren) => {

    const router = useRouter();
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [dataUser, setDataUser] = useState<Users | null>(null);


    useEffect(() => {
        // Obtener el usuario autenticado en tiempo real


        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {

            if (user) {
                setCurrentUser(user);

                //si ya esta logado,pero se mete en la pagina de inicio
                if (router.pathname === "/") {

                    router.push("/account/profile");
                }

            } else {

                //si no esta logado,y se mete en una pagina que es distinta al login


                //if (router.pathname !== "/") {
                    //router.push("/", "/");

                //}


            }

            setIsLoading(false);
        })


        return () => unsubscribeAuth();
    }, []);

    return (
        <AppContext.Provider value={{ currentUser: currentUser, setCurrentUser: setCurrentUser, dataUser : dataUser, setDataUser : setDataUser }}>
            {isLoading ? <Loading /> : children}
        </AppContext.Provider>
    );
};

export { UseContext, ContextProvider }