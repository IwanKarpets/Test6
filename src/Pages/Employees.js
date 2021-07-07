import React, {useContext} from 'react'
import { EmployContext } from '../context/EmployesContext'
import Loader from '../componetns/Loader'
import AddEmployeeForm from '../componetns/AddEmployeeForm'
const Employees = () => {
    const {loading, employees} = useContext(EmployContext);
    if(loading){
        return <Loader></Loader>
    }

    return (
        <div className="employees">
            <h1>Employees</h1>
        <AddEmployeeForm/>
        <table className="customers">
        <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
            {employees.map(({id,first_name,last_name})=>{
                return  <tr key={id}>
                            <td>{first_name}</td>
                            <td>{last_name}</td>
                            <td><button className="delete">Delete</button></td>
                        </tr> 
            })}
        </tbody>
</table>
</div>
    )
}

export default Employees
