import React from 'react';
import "./Sidebar.css";
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';


function Sidebar(){
    return(
        <div className='sidebar'>
            <div className= 'sidebar_header'>
                <Avatar src='https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555388152/shape/mentalfloss/istock_000023765401_small.jpg' />
                <div className='sidebar_headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchOutlined />
                    <input placeholder='Search or start new chat' type='text' />
                </div>
            </div>
            <div className='sidebar_chats'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar