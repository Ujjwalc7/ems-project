import { useEffect, useState } from "react"
import Task from "./Task"
import TuneIcon from '@mui/icons-material/Tune';
import { useAuthContext } from "../../../context/AuthProvider";
import { useParams } from "react-router-dom";
import { employees } from "../../../utils/localStorage";

const options = [
  {value:"all_task", text:"All Task"},
  {value:"active", text:"Active Task"},
  {value:"new_task", text:"New Task"},
  {value:"completed", text:"Completed Task"},
  {value:"failed", text:"Failed Task"}
];

const TaskList = () => {
  const {id} = useParams();
  const {user} = useAuthContext();
  const [allTask, setAllTask] = useState(null);
  const [employeeUser, setEmployeeUser] = useState(null);
  
  
  const handleFilter = (e) =>{
    const filter = e.target.value;
    if(filter === "all_task"){
      if(user.role === "admin"){
        setAllTask(employeeUser.tasks);
      }else{
        setAllTask(user.tasks);
      }
    }else{
      if(user.role === "admin"){
        const updatedTasks = employeeUser.tasks.filter((task) => {
          if(filter === "active" && task.active){
            return task;
          }else if(filter === "new_task" && task.new_task){
            return task;
          }else if(filter === "completed" && task.completed){
            return task;
          }else if(filter === "failed" && task.failed){
            return task;
          }
        });
        setAllTask(updatedTasks);
      }else{
        const updatedTasks = user.tasks.filter((task) => {
          if(filter === "active" && task.active){
            return task;
          }else if(filter === "new_task" && task.new_task){
            return task;
          }else if(filter === "completed" && task.completed){
            return task;
          }else if(filter === "failed" && task.failed){
            return task;
          }
        });
        setAllTask(updatedTasks);
      }
    }
  }

  useEffect(()=>{
    if(id){
      const data = employees.find((emp) => (emp.id == id));
      setAllTask(data.tasks);
      setEmployeeUser(data);
    }else{
      setAllTask(user.tasks);
    }
  },[user,id]);

  return (
    <div className="mt-6">
      <div className="flex items-center mb-6 gap-4">
        <h1 className="">TaskList</h1>
        <select  className="bg-transparent w-5 border rounded-md h-5" onChange={handleFilter}>
          {options.map(opt => (
            <option key={opt.value} className="text-black" value={opt.value}>{opt.text}</option>
          ))}
        </select>
      </div>
        <ul className="w-full flex flex-col items-center justify-center">
          {allTask?.length > 0 ? (allTask.map(task => (
            <Task key={task.id} task={task} role={user.role}/>
          ))) : (
            <li>Empty task list!</li>
          )}
        </ul>
    </div>
  )
}
export default TaskList