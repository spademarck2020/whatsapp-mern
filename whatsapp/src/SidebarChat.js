import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';

const SidebarChat = () =>{
    return(
        <div className='sidebarChat'>
            <Avatar />
            <div className='sidebarChat_info'>
                <h2>Room Name</h2>
                <p>last message</p>
            </div>
        </div>
    )
}

export default SidebarChat