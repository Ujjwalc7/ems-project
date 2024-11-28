import { useParams } from "react-router-dom"
import { employees } from "../utils/localStorage";
import svg from "./../assets/user.svg";
import { useEffect, useState } from "react";
import TaskList from "../components/Dashboard/Task List/TaskList";

const Employee = () => {
  const {id} = useParams();

  const [employee, setEmployee] = useState(null);
  
  useEffect(()=>{
    if(id){
      const data = employees.find((emp) => emp.id == id)
      if(data) setEmployee(data);
    }
  }, [id])
  
  return (
    <div className="bg-[rgb(207,212,213)] h-full min-h-screen">
      <div className="w-full flex items-center h-[200px] border px-5 bg-[rgb(251,251,251)]">
        <div className="w-[150px]">
          <div className="border shadow-innerShadow relative h-[150px] p-2 w-[150px] rounded-full overflow-hidden">
            <img className="absolute w-full h-full left-0 -bottom-5" src={svg} alt="user image" loading="lazy"/>
          </div>
        </div>
        <div className="w-[50%] flex flex-col pl-8">
          <h1 className="text-black text-2xl font-semibold mb-2">{employee?.first_name} {employee?.last_name}</h1>
          <p className="text-black">Designation: {employee?.designation}</p>
          <p className="text-black">Department: {employee?.department}</p>
          <p className="text-black">email: {employee?.email}</p>
        </div>
        <div className="w-[50%] flex justify-end">
          <div className="">
            <h1 className="text-black text-xl mb-2">Employee Details</h1>
            <p className="text-black text-sm">Job title: {employee?.job_title}</p>
            <p className="text-black text-sm">Employee status: {employee?.employee_status}</p>
            <p className="text-black text-sm">Gender: {employee?.gender}</p>
            <p className="text-black text-sm">Date of joining: {employee?.date_of_joining}</p>
          </div>
        </div>
      </div>
      <div className=" w-full px-2">
        <TaskList/>
      </div>
      </div>
  )
}
export default Employee