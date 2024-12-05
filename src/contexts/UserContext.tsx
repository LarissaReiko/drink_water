import React, { createContext, useEffect, useState } from 'react'
import { IUser } from '../types/UserInterface';
import { usePersistState } from '../hooks/usePersisteState';

interface IUserContext {
    user?: IUser;
    goal: number;
    goal2: number;
    age?: number;
    setAge: (value: number) => Promise<void>;
    setGoal: (value: number) => Promise<void>;
    setUser: (value: IUser) => Promise<void>;
    setGoal2 : (value: number) => Promise<void>;
}

interface UserProviderProps {
    children: React.ReactNode;
}
const GOAL = 2000;
const GOAL2 = 0;
const USER = {
    name: "Larissa Reiko",
    photo: "https://i.pinimg.com/236x/83/21/62/8321620da49a153dbf96472030e9aedd.jpg",
    age: 0
}
const AGE = 0;

export const UserContext = createContext<IUserContext>({
    goal: GOAL,
    goal2: GOAL2,
    user: USER,
    age: AGE,
    setGoal: () => Promise.resolve(),
    setUser: () => Promise.resolve(),
    setAge: () => Promise.resolve(),
    setGoal2: () => Promise.resolve(),

});


export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = usePersistState<IUser>(USER, "@user");
    const [goal, setGoal] = usePersistState<number>(GOAL, "goal1");
    const [age, setAge] = usePersistState<number>(AGE, "Idade");
    const [goal2, setGoal2] = usePersistState<number>(GOAL2, "goal2");


    return (
        <UserContext.Provider value={{ goal, user, age, goal2, setGoal, setUser, setAge, setGoal2 }}>
            {children}
        </UserContext.Provider>
    );
};

