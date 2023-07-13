import{Typography,Stack,TextField, MenuItem,Button, Card, Box, CardContent} from '@mui/material';
import {FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from '@mui/material';
import {useState} from 'react';
import {Checkbox,FormGroup} from '@mui/material';


function WebPage(){
    const [username,setName] = useState('');
    const [password,setPass] = useState('');
    const [tech,setTech] = useState([]);
    const [gender,setGender] = useState('');
    const [roles,setRoles] = useState([])
    const handleChange = (e) => {
        const val = e.target.value;
        setTech(val === {tech} ? val.split(',') : val);
    }

    function handleChange1(e){
        const data = roles.indexOf(e.target.value);
        //if the index is not present we are spreading the roles with existing roles.
        if(data === -1){
            setRoles([...roles,e.target.value])
        }
        //if the role is already checked we are removing it.
        else{
            setRoles(roles.filter(role => role !== e.target.value))
        }
    }

    function handleData(){
        document.write("Hi " + username + ".Account is created with the password " + password + " for " + tech + " Technology and the roles choosen are " + roles);
    }
    
    return(
        <Box width='500px' className = 'form'>
            
            <Card >
                <CardContent>
                    <Stack spacing = {2} >
                        <Typography variant = 'h5' color = 'blue' textAlign = 'center'>Register</Typography>
                        <Stack direction='row'>
                            <TextField label = 'Username' variant = 'outlined' color = 'success' size = 'small' value={username} onChange={(e)=>{setName(e.target.value)}} required fullWidth></TextField>
                        </Stack>

                        <Stack direction='row'>
                            <TextField label = 'Password' variant = 'outlined' color = 'success' size = 'small' value={password} onChange={(e)=>{setPass(e.target.value)}} required fullWidth error = {!password} type="password" helperText = {!password ? 'required' : 'Password should contain max 8 of length and a upper,lower and a special character'}></TextField>
                        </Stack>

                        <Stack direction = 'row'>
                            <TextField label='Technologies' variant = 'outlined' size = 'small' required color = 'success' select value = {tech} onChange = {handleChange} SelectProps = {{multiple:true}} helperText = "Select multiple Technologies" fullWidth>
                                <MenuItem value = 'Java'>Java</MenuItem>
                                <MenuItem value = 'Python'>Python</MenuItem>
                                <MenuItem value = 'C'>C</MenuItem>
                            </TextField>
                        </Stack>

                        <Stack direction = 'row'>
                            <FormControl>
                                <FormLabel required>Gender</FormLabel>
                                <RadioGroup name = 'gender' value = {gender} onChange = {(e) => setGender(e.target.value)} row>
                                    <FormControlLabel control = {<Radio size = 'small'/>} label = 'Female' value = 'Female'/>
                                    <FormControlLabel control = {<Radio size = 'small'/>} label = 'Male' value = 'Male' />
                                </RadioGroup>
                            </FormControl>
                        </Stack>

                        <Stack direction = 'row'>
                            <FormControl>
                                <FormLabel>Roles</FormLabel>
                                <FormGroup row>
                                    <FormControlLabel label = 'FSE Java' value = 'FSE Java' control = {<Checkbox size='small' color='secondary' checked = {roles.includes('FSE Java')} onChange={handleChange1}/>}></FormControlLabel>
                                    <FormControlLabel label = 'Cyber Security' value = 'Cyber Security' control = {<Checkbox size='small' color='secondary' checked = {roles.includes('Cyber Security')} onChange={handleChange1}/>}></FormControlLabel>
                                    <FormControlLabel label = 'SDE' value = 'SDE' control = {<Checkbox size ='small' color='secondary' checked = {roles.includes('SDE')} onChange={handleChange1}/>}></FormControlLabel>
                                </FormGroup>
                            </FormControl>
                        </Stack>

                        <Button variant = 'contained' color = 'primary' size = 'small' onClick = {handleData}>Register</Button>

                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}

export default WebPage;