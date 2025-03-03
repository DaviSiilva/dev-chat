import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior: "smooth"})
    }, []);

    const handleEmoji = e => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    }
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png"/>
                    <div className="texts">
                        <span>Jane</span>
                        <p>Lorem Ipsum is simply dummy text.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" />
                    <img src="./video.png" />
                    <img src="./info.png" />
                </div>
            </div>
            <div className="center">
                <div className="massenge">
                    <img src="./avatar.png"/>
                    <div className="texts">
                        <p>Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="massenge own">
                    <div className="texts">
                        <p>Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="massenge">
                    <img src="./avatar.png"/>
                    <div className="texts">
                        <p>Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="massenge own">
                    <div className="texts">
                        <p>Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="massenge">
                    <img src="./avatar.png"/>
                    <div className="texts">
                        <p>Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>               
                <div className="massenge own">
                    <div className="texts">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7neewXMc5dRfMpAglVIJnug3UO6DjTVl-A&s"/>
                        <p>Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.
                        Lorem Ipsum is simply dummy text.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" />
                    <img src="./camera.png" />
                    <img src="./mic.png" />
                </div>
                <input 
                type="text"
                placeholder="Type a massege...."
                value={text}
                onChange={(e)=> setText(e.target.value)}
                />
                <div className="emoji">
                    <img 
                    src="./emoji.png" 
                    onClick={() => setOpen((prev) => !prev)}/>
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}
export default Chat;
