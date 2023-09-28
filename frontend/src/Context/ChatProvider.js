import {createContext, useContext, useEffect, useState} from 'react';
import { useNavigate,Navigate} from 'react-router-dom';
const ChatContext = createContext();

const ChatProvider = ({children}) => {
    const [user,setUser] = useState();
    const [chats,setChats] = useState([]);
    const [notification,setNotification] = useState([]);
    const [selectedChat,setSelectedChat] = useState();
    const history= useNavigate();

    useEffect(() =>{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);
        if (!userInfo) {
            history("/");
        }
    },[history])

    return (
    <ChatContext.Provider value ={{user, setUser, selectedChat,setSelectedChat, chats,setChats,notification,setNotification}}>
        {children}
    </ChatContext.Provider>
    );
};
export const ChatState = ()=>{
    return useContext(ChatContext);
}

export default ChatProvider;