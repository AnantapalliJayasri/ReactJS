import {Stack,Checkbox,FormControlLabel} from '@mui/material';
import {FormLabel,FormControl,FormGroup} from '@mui/material';
import {useState} from 'react';
function Checkboxs(){
    //const [val,setVal] = useState(false)
    const [roles,setRoles] = useState([])
    console.log(roles);
    function handleChange(e){
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
    //diaplying the checkbox is ticked or not.
    //alert(val)
    return(
        <Stack>
            {/* <Stack>
                <FormControlLabel label = 'I accept the above terms' control = {<Checkbox checked = {val} onChange={(e)=>setVal(e.target.value)}/>}></FormControlLabel>
            </Stack> */}
            {/* multiple checkboxes */}
            <Stack>
                <FormControl>
                    <FormLabel>Roles</FormLabel>
                    <FormGroup>
                        <FormControlLabel label = 'FSE Java' value = 'FSE Java' control = {<Checkbox checked = {roles.includes('FSE Java')} onChange={handleChange}/>}></FormControlLabel>
                        <FormControlLabel label = 'Cyber Security' value = 'Cyber Security' control = {<Checkbox checked = {roles.includes('Cyber Security')} onChange={handleChange}/>}></FormControlLabel>
                        <FormControlLabel label = 'SDE' value = 'SDE' control = {<Checkbox checked = {roles.includes('SDE')} onChange={handleChange}/>}></FormControlLabel>
                    </FormGroup>
                </FormControl>
            </Stack>
        </Stack>
    );
}

export default Checkboxs;