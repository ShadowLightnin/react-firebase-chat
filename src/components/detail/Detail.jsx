import "./detail.css"

const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>John Doe</h2>
                <p>Lorem ipsum dolor, sit amet.</p>
            </div>
            <div className="info">
            <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared PHotos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                            <div className="photoItem">
                                <div className="photoDetail">
                                <img src="https://th.bing.com/th/id/OIP.CPCNF0WiJPREiMck_babDAHaEJ?w=292&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                                <div className="photoDetail">
                                <img src="https://th.bing.com/th/id/OIP.CPCNF0WiJPREiMck_babDAHaEJ?w=292&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                                <div className="photoDetail">
                                <img src="https://th.bing.com/th/id/OIP.CPCNF0WiJPREiMck_babDAHaEJ?w=292&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                                <div className="photoDetail">
                                <img src="https://th.bing.com/th/id/OIP.CPCNF0WiJPREiMck_babDAHaEJ?w=292&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                                <div className="photoDetail">
                                <img src="https://th.bing.com/th/id/OIP.CPCNF0WiJPREiMck_babDAHaEJ?w=292&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout">Logout</button>
            </div>
        </div>
    )
}

export default Detail