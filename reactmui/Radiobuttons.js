import {Stack,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from '@mui/material';

function Radiobuttons(){
    return(
        //to display side by side we use row prop in radiogroup
        //we can mention any prev props like size,color etc in radio tag
        <Stack>
            <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup name = 'gender'>
                    <FormControlLabel control = {<Radio/>} label = 'Female' value = 'Female' />
                    <FormControlLabel control = {<Radio/>} label = 'Male' value = 'Male' />
                </RadioGroup>
            </FormControl>
        </Stack>
    );
}

export default Radiobuttons;