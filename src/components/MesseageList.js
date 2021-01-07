import React ,{useEffect , useState} from 'react'
import {List,ListItem} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {messagesRef} from '../firebase'
import MessageItem from './MessageItem'

const useStyles = makeStyles({
    root:{
        gridRow:1,
        width:'100%',
        overflow:'auto'
    }
})

const MesseageList = ()=> {
    const [messages,setMessages] = useState([])
    const classes = useStyles();

    useEffect(()=>{
    messagesRef
    .orderByKey()
    .limitToLast(3)
    .on('value',(snapshot)=> {
        const messages = snapshot.val()
        if(messages === null)return;
        
        const entries = Object.entries(messages)
        const newMessages = entries.map((entry) => {
            const [key,nameAndText] = entry
            return {key:key,...nameAndText}
        })
        setMessages(newMessages)
    })},[])
    
    
    return (
    <List className={classes.root}>
        {
            messages.map(({key,name,text}) => {
                return <MessageItem key={key} name={name} text={text}>item</MessageItem>
            })
        }
    </List>
    )
}

export default MesseageList