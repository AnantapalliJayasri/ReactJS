import {Stack,TextField, InputAdornment} from '@mui/material';
import {useState} from 'react';
function TextFields(){
    const [data,setData] = useState('');
    return(
        <Stack spacing = {3}>
            <Stack spacing={4} direction = 'row'>
                <TextField label = 'name' color = 'success' variant = 'filled'></TextField>
                <TextField label = 'city' color = 'primary' variant = 'standard'></TextField>
                <TextField label = 'state' color = 'warning' variant = 'outlined'></TextField>
            </Stack>
            {/* different props */}
            <Stack spacing={4} direction = 'row'>
                {/* helperText - the text will be displayed below the textfield */}
                <TextField label = 'password' color = 'success' variant = 'outlined' helperText = 'dont share'></TextField>
                {/* required - get a star mark saying the field is compulsory filled. */}
                <TextField label = 'password' color = 'success' variant = 'outlined' required></TextField>
                {/* type - it shows the password in dots */}
                <TextField label = 'password' color = 'success' variant = 'outlined' type='password'></TextField>
            </Stack>
            {/* to add prefix or suffix to the label */}
            <Stack spacing={4} direction = 'row'>
                <TextField label = 'Amount' InputProps={{startAdornment:<InputAdornment position = 'start'>Rs</InputAdornment>}} color = 'success' variant = 'filled'></TextField>
                <TextField label = 'weight' InputProps={{endAdornment:<InputAdornment position = 'end'>kg</InputAdornment>}} color = 'success' variant = 'filled'></TextField>
            </Stack>
            {/* error - field displays in red color if we not filled the data */}
            <Stack spacing={2} direction = 'row'>
                <TextField variant = 'outlined' label='password' required value={data} onChange={(e)=>setData(e.target.value)}
                            error = {!data} helperText = {!data ? 'required' : 'dont share'}>

                </TextField>
            </Stack>
        </Stack>
    );
}

export default TextFields;
