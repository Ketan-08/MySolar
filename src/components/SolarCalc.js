// import React from 'react';
import './SolarCalc.css';
import React, { useState,useEffect ,useContext} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Link } from 'react-router-dom';
import { myContext } from '../Context/MyContextFile';





// const marks = [
//     {
//         value: 0,
//         scaledValue: 50000,
//         label: 50000,
//     },
//     {
//         value: 25,
//         scaledValue: 300000,
//         label: 300000,
//     },
//     {
//         value: 50,
//         scaledValue: 1000000,
//         label: 1000000,
//     },
//     {
//         value: 75,
//         scaledValue: 1500000,
//         label: 1500000,
//     },
//     {
//         value: 100,
//         scaledValue: 2500000,
//         label: 2500000,
//     },
// ];



function valuetext(scaledValue) {
    return `${scaledValue}Rs`;
}

// export function DiscreteSliderLabel() {
//     return (
//         <Box className="Box" sx={{ width: 1000 }}>
//             <Slider
               
//                 aria-label="Always visible"
//                 defaultValue={50}
//                 getAriaValueText={valuetext}
//                 step={10}
//                 marks={marks}
//                 valueLabelDisplay="off"
//             />
//         </Box>
//     );
// }


export function ColorToggleButton(props) {
    const [alignment, setAlignment] = useState('opt1');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

   




    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            id='ToggleButtonGroup'
        >
            <ToggleButton value="Total Roof Top Area" onClick={() => { props.setActive('opt1') }} >Total Roof Top Area</ToggleButton>
            <ToggleButton value="Solar Panel Capacity you want to install" onClick={() => { props.setActive('opt2') }}>Solar Panel Capacity you want to install</ToggleButton>
            <ToggleButton value="Your budget" onClick={() => { props.setActive('opt3') }}>Your budget</ToggleButton>
        </ToggleButtonGroup>



    );
}








export default function SolarCalc(props) {

    

    const [active, setActive] = useState('opt1');
    

    useEffect(() => {
        // props.setProgress(30);
        props.setProgress(100);
        // props.setProgress(0);
        console.log("UseEffect from Calc = "+props.progress);
        
      },[]);

    const Option1 = () => {
        return (
            <form>
                <div className="input-group mb-3 m-5">
                    <input required type="text" id="sqft" className="form-control" placeholder="Enter your Rooftop Area" aria-label=" " aria-describedby="basic-addon2" required />
                    <span className="input-group-text" id="rs1">Sq. Ft</span>
                </div>

            </form>
        )
    }

    const Option2 = () => {
        return (
            <form>
                <div className="input-group mb-3 m-5">
                    <input required type="text" id="kw" className="form-control" placeholder="Solar Panel Capacity" aria-label=" " aria-describedby="basic-addon2" required />
                    <span className="input-group-text" id="rs2">KW</span>
                </div>
            </form>
        )
    }

    const Option3 = () => {
        return (
            <form>
                <div className="input-group mb-3 m-5">
                    <input required type="text"  id="amount" className="form-control" placeholder="Enter your Amount" aria-label=" " aria-describedby="basic-addon2" required />
                    <span className="input-group-text" id="rs3">Rs.</span>
                </div>
                {/* <DiscreteSliderLabel /> */}
            </form>
        )
    }
    let val,bill;
    const handleCalculate = () =>{
        
        if(active === 'opt1')
        {
         val = document.getElementById('sqft').value;
         bill = document.getElementById('bill').value;
        
        console.log(val);
        document.getElementById('plantSize').innerHTML = ((val*0.01).toFixed(2)+' kW '); 
        document.getElementById('withoutSubsidy').innerHTML = ('Rs.'+(val*0.01*41000).toFixed(2));
        document.getElementById('withSubsidy').innerHTML = ('Rs.'+((val*0.01*41000)*(40/100)).toFixed(2));
        document.getElementById('annual').innerHTML = ((val*0.01).toFixed(2)*5*365 +"kW");
        document.getElementById('25yr').innerHTML = (((val*0.01).toFixed(2)*5*365)*25 +"kWh");
        document.getElementById('monthlyIncome').innerHTML = ("Rs." +((((val*0.01).toFixed(2))*5*365)/12*bill));
        document.getElementById('annualIncome').innerHTML = ("Rs." +((((val*0.01).toFixed(2))*5*365)/12*bill)*12);
        document.getElementById('lifeTime').innerHTML = ("Rs." +((((val*0.01).toFixed(2))*5*365)/12*bill)*12*25);
        document.getElementById('carbon').innerHTML = ((val*0.01).toFixed(2)*31 + "tonnes");
        document.getElementById('teak').innerHTML = ((val*0.01).toFixed(2)*49 +"Teak trees over the life time");
      
        
        }
        if(active === 'opt2')
        {
         val = document.getElementById('kw').value;
         bill = document.getElementById('bill').value;
  
        console.log(val);
        document.getElementById('plantSize').innerHTML = (val+' kW '); 
        document.getElementById('withoutSubsidy').innerHTML = ('Rs.'+(val*41000).toFixed(2));
        document.getElementById('withSubsidy').innerHTML = ('Rs.'+((val*41000)*(40/100)).toFixed(2));
        document.getElementById('annual').innerHTML = ((val)*5*365+"kW");
        document.getElementById('25yr').innerHTML = (((val)*5*365)*25+"kWh");
        document.getElementById('monthlyIncome').innerHTML = ("Rs." +(((val)*5*365)/12*bill));
        document.getElementById('annualIncome').innerHTML = ("Rs." +(((val)*5*365)/12*bill)*12);
        document.getElementById('lifeTime').innerHTML = ("Rs." +(((val)*5*365)/12*bill)*12*25);
        document.getElementById('carbon').innerHTML = (val*31 + "tonnes");
        document.getElementById('teak').innerHTML = (val*49 + "Teak trees over the life time");
        
        }
        if(active === 'opt3')
        {
         val = document.getElementById('amount').value;
        console.log(val);
        document.getElementById('plantSize').innerHTML = (val+' kW '); 

        
        }
    }





    return (
        <div>
            <h1 className="m-5" style={{backgroundImage: 'linear-gradient(yellow,orange)',padding:'15px'}}>Solar Rooftop Calculator</h1>

            <div className="container">
                <b className="head1">1. Choose any one of the following :</b>

                <ColorToggleButton setActive={setActive} />

                {active === 'opt1' && <Option1 />}
                {active === 'opt2' && <Option2 />}
                {active === 'opt3' && <Option3 />}

                <hr />

                <b className="head1">2. What is your average Electricity Cost? :</b>

                <div className="input-group mb-3 m-5">
                    <input type="text" id='bill' className="form-control" placeholder="Enter Average Electricity Cost" aria-label=" " aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">Rs./Kwh</span>
                </div>




                
                <button type="submit" className="btn btn-primary m-5" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick = {handleCalculate} >
                    Calculate
                </button>
                

                <div className="modal fade Calc-content" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Solar Calculator Estimations</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Average solar irradiation in <b>MAHARASHTRA</b> state is <b>1266.52</b> W / sq.m
                                    1kWp solar rooftop plant will generate on an average over the year <b>5.0</b> kWh of electricity per day (considering 5.5 sunshine hours)</p>

                                <div >
                                    <table>
                                        <tr >
                                            <th className="color1">1. Size of Power Plant</th>
                                            <th className="color2"></th>

                                        </tr>
                                        <tr>
                                            <td className="color1" id="labelChange">Feasible Plant size as per your Capacity :</td>
                                            <td className="color2" id="plantSize">kW</td>

                                        </tr>
                                        <tr>
                                            <th className="color1">2. Cost of the Plant :</th>
                                            <td className="color2"></td>

                                        </tr>
                                        <tr>
                                            <td className="color1"> MNRE current Benchmark Cost :</td>
                                            <td className="color2">Rs. 41000 Rs. / kW</td>

                                        </tr>
                                        <tr>
                                            <td className="color1"> Without subsidy (Based on current MNRE benchmark) :</td>
                                            <td className="color2" id='withoutSubsidy'></td>

                                        </tr>
                                        <tr>
                                            <td className="color1">With subsidy <b>40% upto 3kW & 20% above 3kW upto 10kW</b> (Based on current MNRE benchmark)</td>
                                            <td className="color2" id='withSubsidy'></td>
                                        </tr>
                                        <tr>
                                            <th className="color1">3. Total Electricity Generation from Solar Plant :</th>
                                            <td className="color2"></td>
                                        </tr>
                                        <tr>
                                            <td className="color1">Annual :</td>
                                            <td className="color2" id='annual'>0kWh</td>
                                        </tr>
                                        <tr>
                                            <td className="color1"> Life-Time (25 years):</td>
                                            <td className="color2" id='25yr'>0kWh</td>
                                        </tr>
                                        <tr>
                                            <th className="color1">4) Financial Savings :</th>
                                            <td className="color2"></td>
                                        </tr>
                                        <tr>
                                            <th className="color1"> a) Tariff @ Rs.8/ kWh (for top slab of traffic) - No increase assumed over 25 years :</th>
                                            <td className="color2"></td>
                                        </tr>
                                        <tr>
                                            <td className="color1">   Monthly :</td>
                                            <td className="color2" id='monthlyIncome'>	Rs. 0</td>
                                        </tr>
                                        <tr>
                                            <td className="color1">    Annually :</td>
                                            <td className="color2" id='annualIncome'>Rs. 0</td>
                                        </tr>
                                        <tr>
                                            <td className="color1"> Life-Time (25 years) :</td>
                                            <td className="color2" id='lifeTime'>Rs. 0</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className=" eco-info" >
                                    <table>
                                    <tbody>
                                    <tr>
                                        <td className="color3">
                                            Carbon dioxide emissions mitigated is</td>
                                        <td className="color4" id='carbon'>0 tonnes.</td>
                                    </tr>
                                    <tr>
                                        <td className="color3">
                                        This installation will be equivalent to planting</td>
                                        <td className="color4" id='teak'>4920 Teak trees over the life time. </td>
                                    </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <Link to="/shop"><button type="button" data-bs-dismiss="modal" className="btn btn-primary">Let's SHOP &rarr;</button></Link>
                            </div>
                        </div>
                    </div>
                </div>










            </div>
        </div>
    )
}
