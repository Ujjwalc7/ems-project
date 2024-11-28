import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckIcon from '@mui/icons-material/Check';
import { Button } from "@mui/material";
import { useAuthContext } from "../../../context/AuthProvider";
import CloseIcon from '@mui/icons-material/Close';

const Task = ({ task, role }) => {
  
  const {markAsComplete, markAsActive, declineTask, markAsFailed} = useAuthContext();
  const [expandTask, setExpandTask] = useState(false);

  function toggleExpandTask() {
    if (expandTask === false) {
      setExpandTask(true);
    } else {
      setExpandTask(false);
    }
  }

  function truncateString(str, length) {
    
    if (str.length > length) {
      return str.substr(0, length) + "...";
    }
    return str;
  }

  return (
    <li
      className={`w-full bg-[rgb(251,251,251)] relative rounded-lg shadow-[0px_0px_0px_rgb(0,0,0),_0_-6px_8px_rgba(46,79,76,0.22)]`}
    >
      <div className="flex justify-between py-1 px-2 mt-2">
        <div
          className="bg-red-400 rounded-md text-sm p-1 text-white"
        >
          {task.category}
        </div>
        <div className="text-sm text-black">Complete by: {task.complete_by}</div>
      </div>
      <div className="px-6 mt-4">
        <p className="text-black">Title: {task.task_title}.</p>
      </div>
      <div className="mt-2 px-6 flex gap-1">
        <p className="pb-6 text-black">
          {!expandTask
            ? truncateString(task.task_description, 50)
            : task.task_description}
        </p>
        {task?.task_description.length > 50 ? (
          <div className="cursor-pointer" onClick={() => toggleExpandTask()}>
            {!expandTask ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </div>
        ) : null}
      </div>
      {role === 'employee' && <div className="flex justify-between mb-10 px-3">
        {task.new_task ? (
          <>
          <Button variant="contained" onClick={()=>markAsActive(task.id)}>
            Accept
          </Button>
          <Button variant="contained" color="error" onClick={()=>declineTask(task.id)}>
            Decline
          </Button>
          </>
        ) : (
          <>
          {task.active && <Button variant="contained" color="success" onClick={()=>markAsComplete(task.id)}>
          Mark as completed
        </Button>}
        {task.active && <Button variant="contained" color="error" onClick={()=>markAsFailed(task.id)}>
          Mark as failed
        </Button>}
        {task.completed && <Button variant="contained" color="success">
          Completed <CheckIcon sx={{width:"20px", marginLeft:"3px"}}/>
        </Button>}
        {task.failed && <Button variant="contained" color="error">
          Failed <CloseIcon sx={{width:"20px", marginLeft:"3px", color:"white"}}/>
        </Button>}
        {task.declined && <Button variant="contained" color="error">
          Declined <CloseIcon sx={{width:"20px", marginLeft:"3px", color:"white"}}/>
        </Button>}
        </>)
        }
      </div>
      }
      {role  === "admin" && 
      <div className="absolute right-9 top-10">
        <p className="text-black">Status: {task.active ? "Active" : task.completed ? "Completed" : task.failed ? "Failed" : task.declined ? "Declined" : "Pending"}</p>
      </div>
      }
    </li>
  );
};
export default Task;
