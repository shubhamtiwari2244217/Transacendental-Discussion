import { useState } from "react";
import { ChatEngine } from "react-chat-engine";
import {sendMessage , isTyping} from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";


const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const {chatId, creds} = props;
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if(text.length > 0) sendMessage(creds, chatId, { text });
        setValue('')
        

    }

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props,chatId);


    }

    const handleUpload = (event) =>{
        sendMessage(creds,chatId,{ file:event.target.files,text:''})
        console.log(sendMessage);

    }

    
    
    return (
       <form className="message-form" onSubmit={handleSubmit}>
        <input type="text" 
        className="message-input"
        placeholder="Haribol Start the Discussion"
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        
        />
        <label htmlFor="upload-button">
            <span className="image-button">
                <PictureOutlined className="picture-icon"/>

            </span>
        </label>

        <input
            type="file"
            multiple={false}
            style ={{display:'none'}}
            onChange={handleUpload}
        
        />
        <button type="submit" className="send-button">
            <SendOutlined className="send-icon"/>
        </button>

       </form>
    );
}
export default MessageForm;