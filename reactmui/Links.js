import { Routes,Route} from "react-router-dom";
import WebPage from './WebPage';
import { AppBar, Toolbar,Stack,Typography,Button,MenuItem,Menu,Link} from "@mui/material";
import {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Routers from './Routers';
function Links(){
    const [data,setData] = useState(null);
    const open = Boolean(data);
    const handleClick = (e) =>{
        setData(e.currentTarget);
    }
    const handleClose = (e) => {
        setData(null)
    }
    return(
        <div>
            <AppBar color = 'success' position='static'>
                <Toolbar>
                    <img  width = "50px" src = "https://th.bing.com/th/id/OIP.SwHpdCMR7oRWImjUd3uxTgHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt ="optum"></img>
                    <Typography sx={{flexGrow : 1}}></Typography>
                    {/* <Typography sx={{flexGrow : 1}}>Optum</Typography> */}
                    <Stack spacing = {2} direction = 'row'>
                        {/* navigating to other page using routers.js */}
                        <Button type = "text" href = {`home`} color = 'inherit'>Home</Button>
                        <Button type="text"  href={`Register`} color = 'inherit'>Register</Button>
                        <Button type="text" color = 'inherit'>Login</Button>
                        <Button color = 'inherit' id = 't2' size='medium' onClick = {handleClick} aria-controls = {open ? 't1' : undefined} aria-haspopup = 'true' aria-expanded = {open ? 'true' : undefined} endIcon = {<KeyboardArrowDownIcon/>}>Resources</Button>
                        <Menu id='t1' anchorEl = {data} open={open} MenuListProps = {{'aria-labelledby' : 't2'}} onClose = {handleClose}>
                            <Link href="https://www.optum.com" underline='hover' color = 'black'><MenuItem onClick = {handleClose}>Blog</MenuItem></Link>
                            <Link href="https://optum.percipio.com/" underline='hover' color = 'black'><MenuItem onClick = {handleClose}>Learnings</MenuItem></Link>
                        </Menu>
            
                    </Stack>
                </Toolbar>
            </AppBar>
            <Routes>
                
                <Route path='/Register' element = {<WebPage/>}></Route>
                
            </Routes>
        </div>
    );
}

export default Links;