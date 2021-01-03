import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Avatar,Grid} from '@material-ui/core'


const useStyles = makeStyles({
    root:{
        gridRow:2,
        margin:'26px'
    }
})

const MessageInputField = ()=> {
    const classes = useStyles()
    return (
    <div className= {classes.root}>
        <Grid container>
            <Grid xs={1}>
                <Avatar/>
            </Grid>
            <Grid xs={2}>入力 </Grid>
            <Grid xs={3}>ボタン</Grid>
        </Grid>
    </div>
    )
}

export default MessageInputField