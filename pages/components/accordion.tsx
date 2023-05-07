import React from 'react'
import MuiAccordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

export default function Accordion({ title, text,link, collapsed }: any) {
    return (
      <MuiAccordion defaultExpanded={!collapsed} TransitionProps={{ unmountOnExit: true }}>
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
          <Link className='no-underline mt-2' href={link}>
            Visit here
          </Link>
        </AccordionDetails>
      </MuiAccordion>
    )
}