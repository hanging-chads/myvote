import React, { useState } from 'react';

import getCandidateList from '../../server/helpers/candidateList';

import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';

import Candidate from './Candidate.jsx';
import { ballot_item_list } from './response.json';

const userBallot = () => {
  getCandidateList(voter_device_id, '1217 Magazine St nola la').then(data => {
    const { ballot_item_list } = data.data;
  });
  console.log(ballot_item_list); // return ballot_item_list;
};
// userBallot();

const parseBallot = () => {
  let ballotData = {};

  ballot_item_list.map(ballot => {
    if (ballotData[ballot.kind_of_ballot_item]) {
      ballotData[ballot.kind_of_ballot_item].push(ballot);
    } else {
      ballotData[ballot.kind_of_ballot_item] = [ballot];
    }
  });
  return ballotData;
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const YourBallot = ({ updateMyBallot }) => {
  const [ballotList, setBallotList] = useState([parseBallot()]);
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();
  const { OFFICE } = ballotList[0];

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <h2>Your Local Ballot</h2>
      {OFFICE.map(office => (
        <Accordion
          expanded={expanded === office.id}
          onChange={handleChange(office.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={classes.heading}>
              {office.ballot_item_display_name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {office.candidate_list.map((candidate, index) => (
                <Candidate
                  candidate={candidate}
                  ind={index}
                  updateMyBallot={() => updateMyBallot(candidate)}
                />
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default YourBallot;
