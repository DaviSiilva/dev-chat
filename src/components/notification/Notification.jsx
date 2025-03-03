import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
import "./notification.css";

const Notification = () =>{
    return(
        <div className="notification">
            <ToastContainer position="bottom-right"/>
        </div>
    )
}

export default Notification;