import {Stack,AppBar,Toolbar, Button, Typography, MenuItem,Menu,Link} from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Navbar(){
    const [data,setData] = useState(null);
    const open = Boolean(data);
    const handleClick = (e) =>{
        setData(e.currentTarget);
    }
    const handleClose = (e) => {
        setData(null)
    }
    
    return(
        <Stack>
            <AppBar color = 'success' position='static'>
                <Toolbar>
                    <Typography sx={{flexGrow : 1}}>Optum</Typography>
                    <Button type="text" href = "https:google.com" color = 'inherit'>Home</Button>
                    <Button type="text"  href={`Webpage`} color = 'inherit'>Register</Button>
                    <Button color = 'inherit'>Login</Button>
                    {/* whenever we click on this the menuitems should be shown */}
                    <Button color = 'inherit' id = 't2' size='medium' onClick = {handleClick} aria-controls = {open ? 't1' : undefined} aria-haspopup = 'true' aria-expanded = {open ? 'true' : undefined} endIcon = {<KeyboardArrowDownIcon/>}>Resources</Button>
                
                
                    <Menu id='t1' anchorEl = {data} open={open} MenuListProps = {{'aria-labelledby' : 't2'}} onClose = {handleClose}>
                        <MenuItem onClick = {handleClose}>Blog</MenuItem>
                        <Link href="https://optum.percipio.com/" underline = 'none' color = 'black'><MenuItem onClick = {handleClose}>Learnings</MenuItem></Link>
                        
                    </Menu>
            
             </Toolbar>
            </AppBar>
        </Stack>
    );
}

export default Navbar;