import React from 'react'
import {pushMessage} from '../firebase'
import {IconButton} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const MessageSubmitButton = ({inputEL,name,setText,text}) =>{
    return (
        <IconButton disabled={text === ''}　onClick = {()=>{
            pushMessage({name:'わたさん',text})
            setText('')
            inputEL.current.focus()
        }}>
            <SendIcon />
        </IconButton>
    )
}

export default MessageSubmitButton