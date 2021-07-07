import React,{createContext, useEffect, useState, useMemo} from 'react';

export const EmployContext = createContext();

const EmployProvider = (props) => {

   const [employees, setEmployees] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
       const fetchData = async()=>{
           try{
            setLoading(true)
            const response = await fetch(`https://reqres.in/api/users?per_page=12`);
            const {data} = await response.json();
            setEmployees(data);
            setLoading(false);   
           }catch(e){
               console.log(e)
           }
                }
       fetchData();
   }, []);

const value=useMemo(() =>({loading, employees}), [loading, employees]); 

    return (
        <EmployContext.Provider
            value={value}
        >
        {props.children}
        </EmployContext.Provider>
    );
};


export default EmployProvider;
