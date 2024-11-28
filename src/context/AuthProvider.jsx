import { createContext, useContext, useState } from "react";
import { setUserLocalStorage } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const updateUser = (email, password) => {
    const data = setUserLocalStorage({ email: email, password: password });
    if (!data) {
      alert("wrong credentials");
      return;
    }
    if (data.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/dashboard");
    }
    setUser(data);
    setAuthenticated(true);
  };
  const markAsComplete = (id) => {
    const updatedUser = { ...user };
    updatedUser.tasks.forEach((task) => {
      if (task.id === id) {
        task.completed = true;
        task.active = false;
      }
    });
    updatedUser.task_counts.completed += 1;
    updatedUser.task_counts.active -= 1;
    setUser(updatedUser);
  };

  const markAsActive = (id) => {
    const updatedUser = { ...user };
    updatedUser.tasks.forEach((task) => {
      if (task.id === id) {
        task.active = true;
        task.new_task = false;
      }
    });
    updatedUser.task_counts.active += 1;
    if(updatedUser.task_counts.new_task > 0) updatedUser.task_counts.new_task -= 1;
    setUser(updatedUser);
  };

  const markAsFailed = (id) => {
    const updatedUser = { ...user };
    updatedUser.tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.failed = true;
      }
    });
    if(updatedUser.task_counts.active > 0) updatedUser.task_counts.active -= 1;
    updatedUser.task_counts.failed += 1;
    setUser(updatedUser);
  };

  const declineTask = (id) => {
    const updatedUser = { ...user };
    updatedUser.tasks.forEach((task) => {
      if (task.id === id) {
        task.declined = true;
        task.new_task = false;
      }
    });
    updatedUser.task_counts.declined += 1;
    if(updatedUser.task_counts.new_task > 0) updatedUser.task_counts.new_task -= 1;
    setUser(updatedUser);
  };

  return (
    <div>
      <AuthContext.Provider
        value={{ user, updateUser, authenticated, setUser, markAsComplete, markAsActive, declineTask, markAsFailed }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuthContext = () => useContext(AuthContext);
