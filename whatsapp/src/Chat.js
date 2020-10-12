import React,{useState} from 'react';
import "./Chat.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { Avatar, IconButton } from '@material-ui/core';
import SelectInput from '@material-ui/core/Select/SelectInput';
import axios from './axios'

const Chat = ({messages}) =>{
const [input, setInput] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()

        axios.post( 'messages/new', {
            message: input,
            name: "Demo",
            timestamp: "00:00:00",
            received: false
        })

        setInput('')
    }

    return(
        <div className="chat">
            <div className='chat_header'>
                <Avatar />
                <div className='chat_headerInfo'>
                    <h3>Room Name</h3>
                    <p>last seen at...</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className = "chat_body">
                {messages.map((message)=>{
                    return(
                        <div key = {`${message.id}`}>
                        <p className ={`chat_message ${message.received && "chat_receiver"}`}>
                        <span className="chat_name">{message.name}</span>
                            {message.message}
                        <span className="chat_timestamp">
                            {message.timestamp}
                        </span>
                        </p>
                        </div>
                    )
                })}
            </div>

            <div className="chat_footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                
                <form>
                    <input
                        value= {input}
                        onChange={(e) => setInput(e.target.value)}
                        placehoder="Type a message"
                        type="text"
                    />
                    <button onClick= {sendMessage} type="submit">
                        Send a message
                    </button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat;