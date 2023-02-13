import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import DevoteesMessages from "./DevoteesMessages"

const ChatFeed=(props)=>{
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];
    const renderMessages = () =>{
        const keys = Object.keys(messages);
        console.log(keys);
    }

    renderMessages()
   

    return (
        <div>
            ChatFeed
        </div>
    )
}
export default ChatFeed;