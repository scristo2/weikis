import { FormEvent, useState } from "react";
import { functions } from "@/lib/firebaseConfig";
import { httpsCallable, HttpsCallableResult } from "firebase/functions";
import { UseContext } from "@/lib/contextAuthFirebase";
const InviteFriends = () => {

    const [countInvitations, setCountInvitations] = useState<number>(0);
    const context = UseContext()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const gettokenUser = await context.currentUser?.getIdToken();
        const test = httpsCallable(functions, "verifyTokenUser");

        try {

            const options = {
                headers: {
                  'Authorization': `Bearer ${gettokenUser}`,
                },
              };

            const result = await test(options).then((value: HttpsCallableResult) => {
                
                return value.data;
            });


            console.log(result);


        } catch (e) {

            console.log(e);
        }


    }

    return (<>
        <form className="flex-column p-1 mb-4" onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
            <p className="text-muted">{countInvitations} invitaciones</p>
            <div className="d-flex">
                <input type="text" className="form-control" placeholder={`Email`} />
                <input type="submit" value="invitar" className="btn btn-primary mx-1" />
            </div>
        </form>
    </>)
}

export default InviteFriends;