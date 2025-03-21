import { useEffect, useRef, useState } from "react";
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    },[])

    const handleEmoji = e =>{
        setText((prev) => prev + e.emoji);
        setOpen(false)
    };

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor, sit amet.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>
                            Lore fkadhsfkahl djsfhahv jfh akhflks hfdh fka h
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="text">
                        <p>
                            Reply example message here...
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>
                            Lore fkadhsfkahl djsfhahv jfh akhflks hfdh fka h
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="text">
                        <p>
                            Reply example message here...
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>
                            Lore fkadhsfkahl djsfhahv jfh akhflks hfdh fka h
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="text">
                        <p>
                            Reply example message here...
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>
                            Lore fkadhsfkahl djsfhahv jfh akhflks hfdh fka h
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="text">
                        <img src="https://th.bing.com/th/id/OIP.CPCNF0WiJPREiMck_babDAHaEJ?w=292&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                        <p>
                            Reply example message here...
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input 
                type="text" 
                placeholder="Type a message..."
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                />
                <div className="emoji">
                    <img 
                    src="./emoji.png" 
                    alt="" 
                    onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="picker">
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat