import { FirebaseOptions, initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import {getFunctions, connectFunctionsEmulator} from "firebase/functions"



const firebaseConfig: FirebaseOptions = {
    apiKey: `${process.env.NEXT_PUBLIC_apiKey}`,
    authDomain: `${process.env.NEXT_PUBLIC_authDomain}`,
    projectId: `${process.env.NEXT_PUBLIC_projectId}`,
    storageBucket: `${process.env.NEXT_PUBLIC_storageBucket}`,
    messagingSenderId: `${process.env.NEXT_PUBLIC_messagingSenderId}`,
    appId: `${process.env.NEXT_PUBLIC_appId}`,
};




const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const functions = getFunctions(app);
if (process.env.NODE_ENV === 'development') {
    // Conectar la instancia de autenticación al emulador en modo de desarrollo
    connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(firestore, "127.0.0.1", 8080) ;// Reemplaza el puerto si es diferente
    connectFunctionsEmulator(functions, "127.0.0.1", 5001 );
}


export { app, auth, firestore, functions };
