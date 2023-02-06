import MoreVert from '@mui/icons-material/MoreVert'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Chat.css'

function Chat() {
  const [seed, setSeed] = useState("")
  const [input, setInput] = useState("")

    useEffect(() => {
			setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
      e.preventDefault()

      setInput('')
    }

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
          
          <p className={`chat__message ${true && 'chat__receiver'}`}>
          <span className='chat__name'>Ariel Perez</span>
            Hey guys
            <span className='chat__timestamp'>3:52 pm</span>
            </p>
          
        </div>
        <div className='chat__footer'>
          <InsertEmoticonOutlinedIcon />
          <form>
            <input
              value={input} 
              onChange={ e => setInput(e.target.value)}
              type='text'
              placeholder='Type a message'
            />
            <button
            onClick={sendMessage}
            type='submit'
            >Send a message</button>
          </form>
          <KeyboardVoiceIcon />
        </div>  
    </div>
  )
}

export default Chat
