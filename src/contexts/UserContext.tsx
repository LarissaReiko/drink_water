import React, { createContext, useEffect, useState } from 'react'
import { IUser } from '../types/UserInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePersistState } from '../hooks/usePersisteState';

interface IUserContext {
    user?: IUser;
    goal: number;
    setGoal: (value:number)=> Promise<void>;
    setUser: (value:IUser)=> Promise<void>;
}

interface UserProviderProps {
    children: React.ReactNode;
}
const GOAL = 2000;
const USER={
    name: "Larissa Reiko",
    photo: "https://i.pinimg.com/236x/83/21/62/8321620da49a153dbf96472030e9aedd.jpg"
}

export const UserContext = createContext<IUserContext>({
    goal: GOAL,
    user: USER,
    setGoal:() =>Promise.resolve(),
    setUser:() =>Promise.resolve(),
});


export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = usePersistState<IUser>(USER, "@user");
    const [goal, setGoal] = usePersistState<number>(GOAL, "goal1");
    //const [goal2, setGoal2] = userPersistState<number>(GOAL, "goal2");


   
        return (
            <UserContext.Provider value={{ goal, user,setGoal, setUser }}>
                {children}
            </UserContext.Provider>
        );
    };

