import { useEffect, useState } from "react";


//Store an object in a local storage to not loose its state at the page reload
//It s a generic map
function UseLocalStorage(key:any,initValue:any){

    //read the value only once time 
    const [value, setValue] = useState(()=>{
        try{
            const item = localStorage.getItem(key);

            //return the stored objects if exist else initial value
            return item ? JSON.parse(item): initValue;
        }
        catch{
            return initValue;
        }
    });

    //synchronize the storage at each change
    useEffect(()=>{localStorage.setItem(key, JSON.stringify(value));},[key,value]);

    return [value, setValue];
}

export default UseLocalStorage;