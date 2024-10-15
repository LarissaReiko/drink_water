import React, { createContext, useEffect, useState } from 'react'
import { IUser } from '../types/UserInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUserContext {
    user: IUser | undefined;
    goal: number;
    getData: () => Promise<number>;
    storeData: (value: number) => Promise<void>;
}

interface UserProviderProps {
    children: React.ReactNode;
}
const STORE_KEY = "@goal";
const GOAL = 2000;

export const UserContext = createContext<IUserContext>({
    goal: GOAL,
    user: undefined,
    getData: () => Promise.resolve(GOAL),
    storeData: () => Promise.resolve(),
});


export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [goal, setGoal] = useState<number>(GOAL);
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        getData().then((data) => setGoal(data));
        }, []);


    const storeData = async (value: number) => {
        try {
            setGoal(value);

            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("goal", jsonValue);
        } catch (e) {
            // saving error
            console.error("saving value", e);
        }
    };

    async function getData(): Promise<number> {
        try {
            const jsonValue = await AsyncStorage.getItem("goal");
            return jsonValue != null ? JSON.parse(jsonValue) : GOAL;
        } catch (e) {
            // error reading value
            console.error("erro reading value", e);
            return GOAL;
        }
    }
        return (
            <UserContext.Provider value={{ goal, storeData, user, getData }}>
                {children}
            </UserContext.Provider>
        );
    };

