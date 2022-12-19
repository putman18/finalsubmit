import { useEffect, useState } from "react";
import axios from "axios";
function EmployeeList({updateId}) {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('https://api.matgargano.com/employees').then((response) => {
            setEmployees(response.data);
             setLoading(false);
        })
    }, []
 
    )
    
    return(
        <div>{loading?'Loading List':(
            <ul>
                {
                    employees.map(employee=>{
                        return(
                            <li key={employee.id}>
                                <a href="#" onClick={()=>updateId(employee.id)}>
                                    {employee.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        )
        }</div>
    )
}
export default EmployeeList;