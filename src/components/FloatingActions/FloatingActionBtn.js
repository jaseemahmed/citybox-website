import { Fab } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from "./FloatingActionStyles";

const FloatingActionBtn = ({ icon, text, metaData }) => {
    const [IsOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!IsOpen)
    }
    const classes = useStyles()
    return (
        <>
            {
                IsOpen === false ?

                    <div className={classes.discoBtn}>
                        <Fab size="small" color="primary" aria- label="add" onClick={handleOpen} >
                            {icon}
                        </Fab >
                    </div>
                    :
                    <div className={classes.discoBtn}>
                        <p><a href={metaData}>{text}</a></p>
                        <Fab size="small" color="primary" aria-label="add" onClick={handleOpen}>
                            {icon}
                        </Fab>
                    </div>
            }
        </>
    )
}

export default FloatingActionBtn
