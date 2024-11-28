import { useNavigate } from "react-router-dom"

const EmployeeList = ({employees}) => {
 
  const navigate = useNavigate();
  
  return (
    <div className="bg-[#1c1c1c] p-4 mt-4">
        <div className="flex mb-2 text-white">
          <p className="w-1/2 text-center">Employee Name</p>
          <p className="w-1/2 text-center">New Task</p>
          <p className="w-1/2 text-center">Active Task</p>
          <p className="w-1/2 text-center">Completed Task</p>
          <p className="w-1/2 text-center">Failed Task</p>
        </div>
        <div className="bg-[rgb(234,244,243)] h-[160px] overflow-auto">
          {employees?.map((emp)=>(
            <div className="flex p-2 border-b-[1px] cursor-pointer" key={emp.id} onClick={()=>navigate(`/admin-dashboard/employee/${emp.id}`)}>
              <p className="text-black text-center w-1/2">{emp.first_name} {emp.last_name}</p>
              <p className="text-black text-center w-1/2">{emp.task_counts.new_task}</p>
              <p className="text-black text-center w-1/2">{emp.task_counts.active}</p>
              <p className="text-black text-center w-1/2">{emp.task_counts.completed}</p>
              <p className="text-black text-center w-1/2">{emp.task_counts.failed}</p>
          </div>
          ))}
        </div>
      </div>
  )
}
export default EmployeeList