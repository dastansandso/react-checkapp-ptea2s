import React from 'react';
import { render } from 'react-dom';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Businessinfo from './businessinfo';

let showbusinessinfo = true;
const businessinfo =(event)=>{
  if(showbusinessinfo == true){
     render(  <Businessinfo/> , document.getElementById('businessinfo'));
     showbusinessinfo =false;
   }else{
     render(  '' , document.getElementById('businessinfo'));
     showbusinessinfo =true;
   }
}
const Checklists =(props)=>{
  // console.log(props.info[0])
  return(
    <div>
    <FormControl component="fieldset">
       <FormControlLabel
          value="end"          
          control={<Checkbox color="primary" onClick={businessinfo.bind(this)} />}
          label="Do your Business Have Name?"
          labelPlacement="end"
        />
        <div id="businessinfo" ></div>

        <FormControlLabel
          value="end"          
          control={<Checkbox color="primary" />}
          label="Do your Business Have Website?"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"          
          control={<Checkbox color="primary" />}
          label="Do your Business Have Social?"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"          
          control={<Checkbox color="primary" />}
          label="Is your business registered?"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"          
          control={<Checkbox color="primary" />}
          label="Do your Business Have Name?"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="end"          
          control={<Checkbox color="primary" />}
          label="Do your Business Have Name?"
          labelPlacement="end"
        />
      </FormControl>
        
    </div>
  )
}


export default Checklists;