import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

const CouncilRules = ({ area, frontage, children }) => {
  return (
    <Grid container>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Grid container spacing={2} justify="center">
          <Grid spacing={2} direction="column">
            <Typography align="left">
              <Box component="span" fontWeight="fontWeightBold" m={1}>
                Area:
              </Box>
              {area}m&sup2;
            </Typography>
            <Typography align="left">
              <Box component="span" fontWeight="fontWeightBold" m={1}>
                Frontage:
              </Box>
              {frontage}m
            </Typography>
            {Boolean(children) && { children }}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
};

export default CouncilRules;
