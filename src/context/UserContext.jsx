import react, { useState, useEffect } from "react";
import { auth } from "../utils/firebase-config";

export const userContext = react.createContext(null);

export default function UserContextProvider({ children }) {

    const [user, setUser] = useState(null);

    const getUserProfile = async (email) => {
        const userRef = db.collection("users");
    
        const userCollection = await userRef.where("email", "==", email).get();
    }

    const createUser = async (userId, data) => {
        return db
          .collection("users")
          .doc(userId)
          .set({ ...data });
    };

    useEffect(()=>{
        auth.onAuthStateChanged(async (response) => {
            if(response) {
                
                const profile = await getUserProfile(response.email);

                if (!profile) {
                    profile = {
                      email: response.email
                    };
          
                    await createUser(firebaseUser.uid, profile);
                  }

                setUser({
                    name: response.displayName,
                    email: response.email
                })
            } else {
                setUser(null);
            }
        });
    }, [])

    return(
        <div>
            <userContext.Provider value={{
                user, setUser,
            }}>
                {children}
            </userContext.Provider>
        </div>
    )
}