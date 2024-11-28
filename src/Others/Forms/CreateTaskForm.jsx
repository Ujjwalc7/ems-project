import { Button } from "@mui/material";
import { useReducer, useState } from "react";
import { reducer } from "../../Task Reducer/reducer";
import { ADD_TASK, DELETE_TASK } from "../../Task Reducer/action";
import {v4 as uuidv4} from "uuid";
const initialState = [];

const CreateTaskForm = ({employees, updateEmp}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState({
    task_title: "",
    complete_by: "",
    asign_to: "",
    category: "",
    task_description: "",
    active: false,
    new_task: true,
    completed: false,
    failed: false,
  });

  const addTask = () => {
    dispatch({ type: ADD_TASK, payload: data });
  };

  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const updatedEmployees = [...employees];
    
    updatedEmployees.forEach(employee =>{
      if(employee.id.toString() == data.asign_to) {
        employee.tasks.push(
          {
            id: id,
            task_title: data.task_title,
            complete_by: data.complete_by,
            category: data.category,
            task_description: data.task_description,
            active: data.active,
            new_task: data.new_task,
            completed: data.completed,
            failed: data.failed
          }
        )
        employee.task_counts.new_task += 1;
        updateEmp(updatedEmployees);
   }
  })
    
    setData({
      task_title: "",
      complete_by: "",
      asign_to: "",
      category: "",
      taskDescription: "",
      active: false,
    new_task: true,
    completed: false,
    failed: false,
    });
  };
  return (
    <div className="text-white">
      <form
        className="flex flex-col lg:flex-row justify-between gap-3"
        onSubmit={handleSubmit}
      >
        <div className="lg:w-[500px]">
          <div className="flex flex-col gap-1">
            <label htmlFor="taskTilte">Task Tile</label>
            <input
              required
              className="bg-transparent py-1 border rounded-md px-3"
              type="text"
              id="taskTilte"
              placeholder="Ex: Make a UI design"
              value={data.task_title}
              onChange={(e) => {
                setData((prev) => ({ ...prev, task_title: e.target.value }));
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="date">Complete by</label>
            <input
              required
              className="date_input bg-transparent py-1 border rounded-md px-3"
              type="date"
              id="date"
              value={data.complete_by}
              onChange={(e) => {
                setData((prev) => ({ ...prev, complete_by: e.target.value }));
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="asignTo">Asign to</label>
            <select
              required
              className="py-1 border rounded-md px-3 bg-transparent"
              id="asignTo"
              value={data.asign_to}
              onChange={(e) => {
                setData((prev) => ({ ...prev, asign_to: e.target.value }));
              }}
            >
              <option value="" className=" bg-[#1c1c1c]">
                Select an employee
              </option>
              {employees?.map((employee) => (
                <option
                  value={employee.id}
                  key={employee.id}
                  className=" bg-[#1c1c1c]"
                >
                  {employee.first_name} {employee.last_name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="category">Category</label>
            <input
              required
              className="bg-transparent py-1 border rounded-md px-3"
              type="text"
              id="category"
              placeholder="design, dev, etc"
              value={data.category}
              onChange={(e) => {
                setData((prev) => ({ ...prev, category: e.target.value }));
              }}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="description">Description</label>
            <textarea
              required
              id="description"
              className="bg-transparent p-3 border rounded-md lg:w-[500px] h-[250px] max-md:h-[200px]"
              value={data.task_description}
              onChange={(e) => {
                setData((prev) => ({
                  ...prev,
                  task_description: e.target.value,
                }));
              }}
            ></textarea>
          </div>
          <div>
            <Button
              color="success"
              variant="contained"
              sx={{ textTransform: "none", width: "100%" }}
              type="submit"
            >
              Create Task
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreateTaskForm;
{
  /* <input
              className="bg-transparent py-1 border rounded-md px-3"
              type="text"
              id="asignTo"
              placeholder="Employee name"
              value={data.asign_to}
              onChange={(e) => {
                setData((prev) => ({ ...prev, asign_to: e.target.value }));
              }}
            /> */
}
