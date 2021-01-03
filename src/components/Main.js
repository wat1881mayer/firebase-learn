import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import MessageInputField from './MessageInputField'
import MesseageList from './MesseageList'

const useStyles =  makeStyles({
    root:{
        display:'grid',
        height:'100vh',
        gridTemplateRows:'1fr auto'
    }
})
const Main = ({name})=> {
    const classes = useStyles();
    return (<div className={classes.root}>
        <MesseageList />
        <MessageInputField name={name}/>
        </div>
        )
};

export default  Main;