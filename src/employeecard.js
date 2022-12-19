import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
function EmployeeCard({ Id }) {
    const [employee, setEmployee] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!Id)
            return;
        setLoading(true);
        axios.get('https://api.matgargano.com/employees/' + Id).then((response) => {
            setEmployee(response.data);
            setLoading(false);
        })
    }, [Id]
    
    )
    console.log(Id)
    if (!Id)
        return;
    return (
        <div>{loading ? 'Loading Employee' : (
            <div className="card" style={{width: '18rem'}}>
            <img src={employee.photo} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{employee.name}</h5>
            <div>{employee.department}</div>
            <div>{employee.role}</div>
            <div>{employee.startDate}</div>
            </div>
          </div>
        )
        }</div>
    )
}
export default EmployeeCard;