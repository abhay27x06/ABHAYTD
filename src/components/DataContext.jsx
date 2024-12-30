import { createContext, useContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({children})=>{
    const name = "abhay";
    const age = 22;
    const data = {name, age};
    return (
    <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>);
}