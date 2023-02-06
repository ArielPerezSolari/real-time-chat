import MoreVert from '@mui/icons-material/MoreVert'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Chat.css'

function Chat() {
  const [seed, setSeed] = useState("")

    useEffect(() => {
			setSeed(Math.floor(Math.random() * 5000))
    }, [])

  return (

    <div className='chat'>
        <div className='chat__header'>
          <Avatar src={`https://api.dicebear.com/5.x/miniavs/svg?seed=${seed}`} />
          <div className='chat__headerInfo'>
            <h3>Room name</h3>
            <p>Last seen at ...</p>
          </div>
          <div className='chat__headerRight'>
            <IconButton>
              <SearchOutlined/>
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>

        <div className='chat__body'>

        </div>
        <div className='chat__footer'>
        
        </div>  
    </div>
  )
}

export default Chat
