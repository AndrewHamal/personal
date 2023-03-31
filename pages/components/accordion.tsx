import React from 'react'
import MuiAccordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Accordion({ title, text, collapsed }: any) {
    return (
      <MuiAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {text}
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
    )
}