import Header from "./Header/Header"
import TaskList from "./Task List/TaskList"
import TaskOverview from "./Task overview/TaskOverview"

const EmployeeDashboard = () => {
  return (
    <div className="bg-[rgb(207,212,213)] min-h-screen h-full">
       <Header bg="bg-[rgb(251,251,251)]"/>
       <div className="px-4">
       <TaskOverview/>
       <TaskList/>
       </div>
    </div>
  )
}
export default EmployeeDashboard