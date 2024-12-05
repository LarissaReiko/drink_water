import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

interface IUsePersisteState{}


const STORE_KEY = "@goal2";


interface IUsePersistReturn{
    localState: number;
    setLocalState: React.Dispatch<React.SetStateAction<number>>
}

export function usePersistState<X>(
    defaultValue: X,
    key: string,
    ): [X,(value:X)=> Promise<void>]{
    const [localState, setLocalState] = useState <X>(defaultValue);
    

    useEffect(() => {
        getData().then((data) => setLocalState(data));
        }, []);


    const storeData = async (value: X) => {
        try {
            setLocalState(value);

            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
            // saving error
            console.error("saving value", e);
        }
    };

    async function getData(): Promise<X> {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : defaultValue;
        } catch (e) {
            // error reading value
            console.error("erro reading value", e);
            return defaultValue;
        }
    }
        
        return [localState, storeData];
    };


