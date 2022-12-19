import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import EmployeeList from './employeelist'
import EmployeeCard from './employeecard'
function App() {
  const [selectedId, setSelectedId] = useState('');
  return (
    <div className="App">
     <EmployeeList updateId={setSelectedId}/>
     <EmployeeCard Id={selectedId}/>
    </div>
  );
}

export default App;
