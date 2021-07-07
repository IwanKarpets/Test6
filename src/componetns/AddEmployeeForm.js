import React from 'react'

const AddEmployeeForm = () => {

    const addEmployee = (e)=>{
        e.preventDefault();
        console.log('Added')
    }
    return (
        <form className="addEmployeeForm">
        <div className="firstName">
            <input type="text" placeholder="Enter your first name"/>
        </div>
        <div className="lastName">
            <input type="text" placeholder="Enter your first name"/>
        </div>
        <button 
            className="add"
            onClick={addEmployee}
            >Add employee</button>
    </form>

    )
}

export default AddEmployeeForm
