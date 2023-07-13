import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useState} from 'react';

function Togglebuttons() {
  const [data, setData] = useState('');
  const handleChange = (event, newdata) => {
    setData(newdata);
  };

  return (
    //exclusive - to select one at a time
    <ToggleButtonGroup color='primary' orientation='vertical' value={data} exclusive onChange={handleChange}>
        <ToggleButton value="Button1">Button1</ToggleButton>
        <ToggleButton value="Button2">Button2</ToggleButton>
        <ToggleButton value="Button3">Button3</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Togglebuttons;