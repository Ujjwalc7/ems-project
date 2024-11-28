import { useAuthContext } from "../../../context/AuthProvider"

const TaskOverview = () => {

  const {user} = useAuthContext();
  
  return (
    <div className=" mt-6 h-[200px] md:h-[150px]">
        <div className="grid max-md:grid-flow-row grid-flow-col max-md:grid-cols-2 gap-2 w-full h-full">
            <div className="border bg-red-400 rounded-xl flex flex-col justify-center gap-2">
              <h1 className="text-2xl font-semibold ml-2">{user.task_counts.new_task}</h1>
              <p className="ml-2 text-lg">New Tasks</p>
            </div>
            <div className="border bg-yellow-300 rounded-xl flex flex-col justify-center gap-2">
              <h1 className="text-2xl font-semibold ml-2">{user.task_counts.active}</h1>
              <p className="ml-2 text-lg">Active Tasks</p>
            </div>
            <div className="border bg-green-400 rounded-xl flex flex-col justify-center gap-2">
              <h1 className="text-2xl font-semibold ml-2">{user.task_counts.completed}</h1>
              <p className="ml-2 text-lg">Completed Tasks</p>
            </div>
            <div className="border bg-blue-400 rounded-xl flex flex-col justify-center gap-2">
              <h1 className="text-2xl font-semibold ml-2">{user.task_counts.failed}</h1>
              <p className="ml-2 text-lg">Failed Tasks</p>
            </div>
        </div>
    </div>
  )
}
export default TaskOverview