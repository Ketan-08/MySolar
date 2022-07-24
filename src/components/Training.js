import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import training from './training.jpg'


function Training() {
    return (
        <div>
            <img id='training-img' src={training} alt="training-chart" />
            <h2 id='train-head'>Various Trainings and Workshop at MySolar</h2>
            <Accordion className='mt-5 '>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className='d-flex m-auto train-typo'>Only GCRT & PV Syst. Short Term Workshop</Typography>
                </AccordionSummary>
                <AccordionDetails className='accord-details' >
                    <Typography>
                        <strong>Workshop Highlights</strong> <br />
                        (From 3 August 2021 to 26 August 2021, 4 days a week, 6 to 8 pm, Platform: Zoom) <br />

                        &#9658; Grid connect solar rooftop system component selection <br />
                        &#9658; System designing for domestic, commercial & utility-scale projects <br />
                        &#9658; Policy procedure guidelines related to the GCRT system <br />
                        &#9658; 5 Days of online training on PVSyst software ( system designing ) <br />

                        <strong style={{ margin: '10px' }}>Fees : 4999/-</strong> <br />


                        <strong><em>Who should do?</em></strong> <br />
                        Students, entry-level professionals aspiring for a career in the solar industry.<br />
                        Management graduates who want to equip themselves with the necessary skills to enter the solar industry.<br />
                        Existing marketing and sales professionals. Entrepreneurs and business owners.<br />

                        <strong><em>Any Certification?</em></strong> <br />
                        Yes, you will get a certificate of participation. <br />

                        Enroll & Payment link :<br />

                        Enroll In Workshop : <a id='form' href='https://forms.gle/rRBDf4FfW9NuVjCAA'>https://forms.gle/rRBDf4FfW9NuVjCAA</a><br />

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='d-flex m-auto train-typo'>Off Grid Solar System 2 days Workshop</Typography>
                </AccordionSummary>
                <AccordionDetails className='accord-details' >
                    <Typography>
                    <strong>Workshop Highlights</strong> <br />
                        (From 3 August 2021 to 26 August 2021, 4 days a week, 6 to 8 pm, Platform: Zoom) <br />

                        &#9658; Grid connect solar rooftop system component selection <br />
                        &#9658; System designing for domestic, commercial & utility-scale projects <br />
                        &#9658; Policy procedure guidelines related to the GCRT system <br />
                        &#9658; 5 Days of online training on PVSyst software ( system designing ) <br />

                        <strong style={{ margin: '10px' }}>Fees : 4999/-</strong> <br />


                        <strong><em>Who should do?</em></strong> <br />
                        Students, entry-level professionals aspiring for a career in the solar industry.<br />
                        Management graduates who want to equip themselves with the necessary skills to enter the solar industry.<br />
                        Existing marketing and sales professionals. Entrepreneurs and business owners.<br />

                        <strong><em>Any Certification?</em></strong> <br />
                        Yes, you will get a certificate of participation. <br />

                        Enroll & Payment link :<br />

                        Enroll In Workshop : <a id='form' href='https://forms.gle/rRBDf4FfW9NuVjCAA'>https://forms.gle/rRBDf4FfW9NuVjCAA</a><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className='d-flex m-auto train-typo'> On Grid Solar System Domestic 2 Days Workshop </Typography>
                </AccordionSummary>
                <AccordionDetails className='accord-details' >
                    <Typography>
                    <strong>Workshop Highlights</strong> <br />
                        (From 3 August 2021 to 26 August 2021, 4 days a week, 6 to 8 pm, Platform: Zoom) <br />

                        &#9658; Grid connect solar rooftop system component selection <br />
                        &#9658; System designing for domestic, commercial & utility-scale projects <br />
                        &#9658; Policy procedure guidelines related to the GCRT system <br />
                        &#9658; 5 Days of online training on PVSyst software ( system designing ) <br />

                        <strong style={{ margin: '10px' }}>Fees : 4999/-</strong> <br />


                        <strong><em>Who should do?</em></strong> <br />
                        Students, entry-level professionals aspiring for a career in the solar industry.<br />
                        Management graduates who want to equip themselves with the necessary skills to enter the solar industry.<br />
                        Existing marketing and sales professionals. Entrepreneurs and business owners.<br />

                        <strong><em>Any Certification?</em></strong> <br />
                        Yes, you will get a certificate of participation. <br />

                        Enroll & Payment link :<br />

                        Enroll In Workshop : <a id='form' href='https://forms.gle/rRBDf4FfW9NuVjCAA'>https://forms.gle/rRBDf4FfW9NuVjCAA</a><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className='d-flex m-auto train-typo'> Solar Pump 2 Days Workshop </Typography>
                </AccordionSummary>
                <AccordionDetails className='accord-details' >
                    <Typography>
                    <strong>Workshop Highlights</strong> <br />
                        (From 3 August 2021 to 26 August 2021, 4 days a week, 6 to 8 pm, Platform: Zoom) <br />

                        &#9658; Grid connect solar rooftop system component selection <br />
                        &#9658; System designing for domestic, commercial & utility-scale projects <br />
                        &#9658; Policy procedure guidelines related to the GCRT system <br />
                        &#9658; 5 Days of online training on PVSyst software ( system designing ) <br />

                        <strong style={{ margin: '10px' }}>Fees : 4999/-</strong> <br />


                        <strong><em>Who should do?</em></strong> <br />
                        Students, entry-level professionals aspiring for a career in the solar industry.<br />
                        Management graduates who want to equip themselves with the necessary skills to enter the solar industry.<br />
                        Existing marketing and sales professionals. Entrepreneurs and business owners.<br />

                        <strong><em>Any Certification?</em></strong> <br />
                        Yes, you will get a certificate of participation. <br />

                        Enroll & Payment link :<br />

                        Enroll In Workshop : <a id='form' href='https://forms.gle/rRBDf4FfW9NuVjCAA'>https://forms.gle/rRBDf4FfW9NuVjCAA</a><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className='d-flex m-auto train-typo'>Online Interactive Training</Typography>
                </AccordionSummary>
                <AccordionDetails className='accord-details' >
                    <Typography>
                    <strong>Workshop Highlights</strong> <br />
                        (From 3 August 2021 to 26 August 2021, 4 days a week, 6 to 8 pm, Platform: Zoom) <br />

                        &#9658; Grid connect solar rooftop system component selection <br />
                        &#9658; System designing for domestic, commercial & utility-scale projects <br />
                        &#9658; Policy procedure guidelines related to the GCRT system <br />
                        &#9658; 5 Days of online training on PVSyst software ( system designing ) <br />

                        <strong style={{ margin: '10px' }}>Fees : 4999/-</strong> <br />


                        <strong><em>Who should do?</em></strong> <br />
                        Students, entry-level professionals aspiring for a career in the solar industry.<br />
                        Management graduates who want to equip themselves with the necessary skills to enter the solar industry.<br />
                        Existing marketing and sales professionals. Entrepreneurs and business owners.<br />

                        <strong><em>Any Certification?</em></strong> <br />
                        Yes, you will get a certificate of participation. <br />

                        Enroll & Payment link :<br />

                        Enroll In Workshop : <a id='enroll' href='https://forms.gle/rRBDf4FfW9NuVjCAA'>https://forms.gle/rRBDf4FfW9NuVjCAA</a><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Training
