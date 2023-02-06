import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'

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
        </div>
        <div className='chat__body'>

        </div>
        <div className='chat__footer'>
        
        </div>  
    </div>
  )
}

export default Chat
