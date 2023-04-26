import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        if (window.confirm("Are you sure you want to log out?")) {
          try {
            const auth = getAuth();
            await signOut(auth);
            navigate("/");
          } catch (error) {
            console.error(error);
          }
        }
      };      

    return(
      <button onClick={handleLogout} className="ml-2">Logout</button>
    )
}

export default Logout;



  