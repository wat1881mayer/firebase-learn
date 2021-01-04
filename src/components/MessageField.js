import React ,{useState}from 'react'
import {TextField} from '@material-ui/core'
import {pushMessage} from '../firebase'

const MessageField = ({inputEL,name,setText,text}) => {
    const [isComposed,setIsComposed]= useState(false)

    return (
    <TextField 
        autoFocus
        fullWidth={true}
        inputRef={inputEL}
        onChange={(e)=>{
            setText(e.target.value)}
        }
        onKeyDown = {(e)=>{
            if(isComposed)return;
            const text = e.target.value
            if (text === '') return ;

            if(e.key === 'Enter'){
                pushMessage({name:'わたさん',text});
                setText('');
                e.preventDefault();
            }
        }}
        onCompositionStart={()=>setIsComposed(true)}
        onCompositionEnd={()=>setIsComposed(false)}
        value={text}
    />
    )
}

export default MessageField