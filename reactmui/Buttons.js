import {Stack,Button,IconButton,ButtonGroup} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
function Buttons(){
    return(
        <Stack spacing = {3}>
            {/* for giving spaces b/w the buttons */}
            <Stack spacing = {2} direction = 'row'>
                <Button variant = 'text'>Confirm</Button>
                {/* we can use href with text variant for navigating to another page */}
                <Button variant = 'text' href="https:google.com">Link</Button>
                <Button variant = 'contained'>Login</Button>
                <Button variant = 'outlined'>Cancel</Button>
            </Stack>
            {/* color prop */}
            <Stack spacing={2} direction='row'>
                <Button variant = 'contained' color = 'primary'>Primary</Button>
                <Button variant = 'contained' color = 'secondary'>Secondary</Button>
                <Button variant = 'contained' color = 'info'>Info</Button>
                <Button variant = 'contained' color = 'warning'>Warning</Button>
                <Button variant = 'contained' color = 'success'>Success</Button>
                <Button variant = 'contained' color = 'error'>Error</Button>
            </Stack>
            {/* size prop */}
            <Stack spacing = {2} direction = 'row'>
                <Button variant = 'contained' color = 'primary' size = 'small'>Small</Button>
                <Button variant = 'contained' color = 'primary' size = 'medium'>Medium</Button>
                <Button variant = 'contained' color = 'primary' size = 'large'>Large</Button>
            </Stack>
            {/* adding icons */}
            <Stack spacing = {2} direction='row'>
                <Button variant = 'contained' startIcon = {<SendIcon/>}>Send</Button>
                <Button variant = 'contained' endIcon = {<SendIcon/>}>Send</Button>
            </Stack>
            {/* adding icons without text */}
            <Stack spacing = {2} direction='row'>
                <IconButton color = 'primary' size = 'medium'>
                    <SendIcon/>
                    <InsertEmoticonIcon/>
                </IconButton>
            </Stack>
            {/* to disable ripple effect and contained buttons are elevated and have a shadow */}
            <Stack spacing = {2} direction='row'>
                <Button variant = 'contained' color = 'success' startIcon = {<SendIcon/>} disableElevation>Send</Button>
                <Button variant = 'contained' color = 'secondary' endIcon = {<SendIcon/>} disableRipple>Send</Button>
            </Stack>
            {/* Button Group */}
            <Stack spacing = {2} direction = 'row'>
                <ButtonGroup variant = 'contained' color = 'warning' orientation ='vertical' size = 'medium' aria-label = 'press button'>
                    <Button>Click1</Button>
                    <Button>Click2</Button>
                </ButtonGroup>
            </Stack>
        </Stack>


    );
}

export default Buttons;