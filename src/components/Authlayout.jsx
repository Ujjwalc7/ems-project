import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthProvider";

const Authlayout = ({children}) => {
    const authenticated = useAuthContext();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!authenticated){
            navigate('/login');
        }
    },[authenticated, navigate]);
    return children;
}
export default Authlayout