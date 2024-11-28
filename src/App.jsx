import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Authlayout from "./components/Authlayout";
import { useAuthContext } from "./context/AuthProvider";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
// import { setLocalStorage } from "./utils/localStorage";

function App() {
  const {user, updateUser} = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem('admin'));
    const employee = JSON.parse(localStorage.getItem('employee'));
    
    if(admin || employee) {
      if(admin){
        updateUser(admin.email, admin.password);
        navigate("/admin-dashboard");
       }else if(employee){
        updateUser(employee.email, employee.password);
        navigate("/dashboard")
       }else{
      localStorage.removeItem('admin');
      localStorage.removeItem('employee');
      if (!user) {
        navigate("/login");
      }
    }
  }else{
    localStorage.removeItem('admin');
    localStorage.removeItem('employee');
    if (!user) {
      navigate("/login");
    }
  }
}, []);

  return (
    <main className="">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        {user?.role == "employee" ? (
          <Route
            path="/dashboard"
            element={
              <Authlayout>
                <EmployeeDashboard />
              </Authlayout>
            }
          />
        ) : <Route
        path="/admin-dashboard"
        element={
          <Authlayout>
            <AdminDashboard />
          </Authlayout>
        }
      />}
        <Route path="/admin-dashboard/employee/:id" element={<Employee/>} />
      </Routes>
    </main>
  );
}

export default App;
