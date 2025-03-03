import { useState, useEffect } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";
import { useUserStore } from "../../lib/userStore";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";

const ChatList = () => {
    const [chats, setChats] = useState({});
    const [addMode, setAddMode] = useState(false);
    const { currentUser } = useUserStore();

    useEffect(() => {
        if (!currentUser?.id) return; // Evita erro se currentUser for null

        const unSub = onSnapshot(doc(db, "userchats", currentUser.id), (doc) => {
            if (doc.exists()) {
                setChats(doc.data()); // Define os chats se existirem
            } else {
                setChats({}); // Define como objeto vazio se não existir
            }
        });

        return () => unSub();
    }, [currentUser?.id]);

    console.log(chats);

    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" />
                    <input type="text" placeholder="Search" />
                </div>
                <img 
                    src={addMode ? "./minus.png" : "./plus.png"} 
                    className="add"
                    onClick={() => setAddMode((prev) => !prev)}
                />
            </div>
            {Object.values(chats).map((chat) => (
                <div className="item" key={chat.chatId}>
                    <img src="./avatar.png" />
                    <div className="text">
                        <span>Jane</span>
                        <p>{chat.lastMessage}</p>
                    </div>
                </div>
            ))}
            {addMode && <AddUser />}
        </div>
    );
};

export default ChatList;
