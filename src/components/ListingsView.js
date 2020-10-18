import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  CircularProgress,
  Typography,
  Box,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RydeRules from './RydeRules';
import CouncilRules from './CouncilRules';
import SimpleTable from './SimpleTable';
import { endpointURL, strathfieldCouncilRules } from '../constants/index';

const useStyles = makeStyles({
  space: {
    marginTop: 25,
    marginBottom: 25,
  },
});

const urlToDisplayNameMapping = {
  ryde: 'Ryde',
  strathfield: 'Strathfield',
  burwood: 'Burwood',
  canada_bay: 'Canada Bay',
  inner_west: 'Inner West',
  canterbury: 'Canterbury',
};

const councilDuplexRulesDisplay = (endpointName) => {
  if (endpointName === 'ryde') {
    return <RydeRules />;
  } else if (endpointName === 'strathfield') {
    return (
      <CouncilRules area={600} frontage={15}>
        <Typography align="left">
          <Box component="span" fontWeight="fontWeightBold" m={1}>
            Link:
          </Box>
          <Link href={strathfieldCouncilRules} target="_blank">
            Strathfield Developement Rules
          </Link>
        </Typography>
      </CouncilRules>
    );
  } else if (endpointName === 'parramatta') {
    return <CouncilRules area={600} frontage={15} />;
  } else if (endpointName === 'burwood') {
    return <CouncilRules area={600} frontage={15} />;
  } else if (endpointName === 'canada_bay') {
    return <CouncilRules area={600} frontage={15} />;
  } else if (endpointName === 'inner_west') {
    return <CouncilRules area={600} frontage={15} />;
  } else if (endpointName === 'canterbury') {
    return <CouncilRules area={600} frontage={15} />;
  }
};

const ListingsView = ({ endpointName }) => {
  const classes = useStyles();
  const [searchResults, setSearchResults] = useState('');

  useEffect(() => {
    const getData = () => {
      axios
        .get(`${endpointURL}/listings/${endpointName}`)
        .then((res) => {
          setSearchResults(res.data);
        })
        .catch((err) => console.log(err));
    };

    getData();
  }, [endpointName]);

  return (
    <Grid container>
      <Grid item xs={12} align="center" justify="center">
        <Typography
          variant="h4"
          align="center"
          color="primary"
          component="h2"
          gutterBottom
        >
          {urlToDisplayNameMapping[`${endpointName}`]}
        </Typography>
        {councilDuplexRulesDisplay(endpointName)}
        {searchResults ? (
          <SimpleTable rows={searchResults} className={classes.space} />
        ) : (
          <CircularProgress
            size={175}
            thickness={1}
            className={classes.space}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ListingsView;
