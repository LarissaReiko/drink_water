import React, {createContext, useState} from 'react'

interface IUserContext {
    user: unknown;
    goal: number;
    setGoal: React.Dispatch<React.SetStateAction<number>>;
}

interface UserProviderProps{
    children: React.ReactNode;
}


export const  UserContext = createContext<IUserContext>({
    user: null,
    goal: 1700,
    setGoal: () => {},
});


export const  UserProvider: React.FC<UserProviderProps> = ({children})=>{
    const [goal, setGoal] = useState<number>(1500);
    const [user, setUser] = useState<unknown>(null);

    return(
    <UserContext.Provider value ={{user, goal, setGoal }}>
        {children}
    </UserContext.Provider>
    );
};



