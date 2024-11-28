import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../../context/AuthProvider";

const Header = ({bg}) => {
  const {user, setUser} = useAuthContext();
  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("admin");
    localStorage.removeItem("employee");
    setUser(null);
    navigate('/login');
  }
  return (
    <div className={`px-6 py-3 ${bg ? bg : "bg-black"} ${bg ? "text-black" : "text-white"}`}>
        <div className="flex justify-between">
            <div>
                <p>Hello,</p>
                <h2 className="text-xl font-bold">{user ? user?.first_name : "User"}👋</h2>
            </div>
            <div className="flex items-center">
            <button 
            className="bg-[rgb(184,90,90)] rounded-md px-2 py-1 active:bg-[rgb(176,77,77)] text-white" 
            onClick={()=>logout()}
            >Log Out</button>
            </div>
        </div>
    </div>
  )
}
export default Header