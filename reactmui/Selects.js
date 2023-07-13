import {Stack,TextField,MenuItem} from '@mui/material';
import {useState} from 'react';
function Selects(){
    const [tech,setTech] = useState('')
    const [techs,setTechs] = useState([])
    const handleChange = (e) =>{
        const val = e.target.value;
        setTechs(val === {techs} ? val.split(',') : val);
    }
    return(
        <Stack spacing = {2}>
            <TextField label='Technology' required color = 'success' select value = {tech} onChange = {(e) => {setTech(e.target.value)}} fullWidth>
                <MenuItem value = 'Java'>Java</MenuItem>
                <MenuItem value = 'Python'>Python</MenuItem>
                <MenuItem value = 'C'>C</MenuItem>
            </TextField>
            {/* To select multiple items in dropdown */}
            <TextField label='Technologies' required color = 'success' select value = {techs} onChange = {handleChange} SelectProps = {{multiple:true}}>
                <MenuItem value = 'Java'>Java</MenuItem>
                <MenuItem value = 'Python'>Python</MenuItem>
                <MenuItem value = 'C'>C</MenuItem>
            </TextField>
        </Stack>
    );
}

export default Selects;