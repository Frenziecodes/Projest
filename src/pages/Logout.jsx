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
      <button onClick={handleLogout} className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]">Logout</button>
    )
}

export default Logout;



  