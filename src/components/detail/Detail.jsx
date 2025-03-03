import "./detail.css";
import { auth } from "../lib/firebase";

const Detail = () => {
    return (
        <div className="detail">
             <div className="user">
                <img src="./avatar.png"/>
                <h2>Jane</h2>
                <p>lorem we working the aplicatoin chatbot.</p>
             </div>
             <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png"/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png"/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png"/>
                    </div>
                    <div className="photos">
                        <div className="photoitem">
                        <div className="photosDetail">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7neewXMc5dRfMpAglVIJnug3UO6DjTVl-A&s"/>
                            <span>phot_2024_2.png</span>
                        </div>
                            <img src="./download.png" className="icon"/>
                        </div>
                        <div className="photoitem">
                        <div className="photosDetail">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7neewXMc5dRfMpAglVIJnug3UO6DjTVl-A&s"/>
                            <span>phot_2024_2.png</span>
                        </div>
                            <img src="./download.png" className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared files</span>
                        <img src="./arrowUp.png"/>
                    </div>
                </div>
             </div>
            <button>Block User</button>
            <button className="logout" onClick={() => auth.signOut()}>Logout</button>
        </div>
    )
}

export default Detail;
