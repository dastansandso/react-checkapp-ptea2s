import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";
import Button from '@material-ui/core/Button';


import Checklists from './checklist'

highchartsMore(Highcharts);
solidGauge(Highcharts);

const options = {
  chart: {
    type: "solidgauge",    
  },  
   title: {
        text: 'Compliance Check',
        style: {
            fontSize: '24px'
        }
    },
  
  pane: {
        center: ['50%', '50%'],
        size: '100%',
        startAngle: 0,
        endAngle: 720,
    },
    
     yAxis: {
        min: 0,
        max: 200,
    },

  series: [
    { name:'Completed',
      data: [40],
       dataLabels: {
            format:'{y:.1f} %'
        },
        tooltip: {
            valueSuffix: '% Compliance'
        }
    }
  ]
};
const showthis = false;
 let showlist=false;
 function  showchecklist(event){
 
   if(showlist==false){     
      render(  <Checklists/> , document.getElementById('checklist'));
      showlist=true;  
    }else{
      render(  '' , document.getElementById('checklist'));  
      showlist=false;  
    }
    console.log('showlist',showlist);

  };
const Progresscard =(props)=>{

  // console.log(props.info[0])
  return(
    <div className="container mt-3 text-center">
       <HighchartsReact highcharts={Highcharts} options={options} />   
      <br/>
        <Button variant="contained" onClick={()=> showchecklist(event)} color="primary">CheckList</Button>
      
      <div id="checklist" className="my-4"></div>

    </div>
  );
}



export default Progresscard;