import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return(
        <ChatEngine
        height = "100vh"
        projectID ="ed8ee93f-196f-4196-9f1e-506ce42bea7b"
        userName="krishna_shubham_tiwari"
        userSecret="12345678"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        
        />
    );

}

export default App;