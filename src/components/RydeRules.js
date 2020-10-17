import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

const RydeRules = () => {
  return (
    <Grid container>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Grid container justify="space-between" direction="row">
          <Grid spacing={2} direction="column">
            <Typography align="left">
              <Box component="span" fontWeight="fontWeightBold" m={1}>
                Old Rules
              </Box>
            </Typography>
            <Typography align="left">
              <Box component="span" fontWeight="fontWeightBold" m={1}>
                Area:
              </Box>
              580m&sup2;
            </Typography>
            <Typography align="left">
              <Box component="span" fontWeight="fontWeightBold" m={1}>
                Frontage:
              </Box>
              20m (15m NSW R2)
            </Typography>
          </Grid>
          <Grid spacing={2} direction="column">
            <Typography align="left">
              <Box component="span" fontWeight="fontWeightBold" m={1}>
                New Rules
              </Box>
            </Typography>
            <Typography align="left">
              <Box component="span" fontWeight="fontWeightBold" m={1}>
                Area:
              </Box>
              750m&sup2;
            </Typography>
            <Typography align="left">
              <Box component="span" fontWeight="fontWeightBold" m={1}>
                Frontage:
              </Box>
              15.2m
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
};

export default RydeRules;
