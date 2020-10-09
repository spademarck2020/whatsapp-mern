import React from 'react';
import "./Chat.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';

const Chat = () =>{
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
        </div>
    )
}

export default Chat;