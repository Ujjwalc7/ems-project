import { useEffect, useState } from "react"
import CreateTaskForm from "../../Others/Forms/CreateTaskForm"
import Header from "./Header/Header"
import { employees } from "../../utils/localStorage";
import EmployeeList from "../EmployeeList";
import { useAuthContext } from "../../context/AuthProvider";

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  useEffect(()=>{
    setData(employees);
  },[])

  const updateEmp = (newData) => {
    setData(newData);
    
  }
  return (
    <div>
      {/* <h1 className="text-center mt-6 mb-6">ADMIN DASHBORAD</h1>
       */}
       <Header/>
      <div className="bg-[#1c1c1c] p-4">
        <CreateTaskForm employees={data} updateEmp={updateEmp}/>
      </div>
      {data && <EmployeeList employees={data} />}
    </div>
  )
}
export default AdminDashboard