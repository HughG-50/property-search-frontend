import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@reach/router';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const HomeView = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} spacing={3} className={classes.root}>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            component="h2"
            gutterBottom
          >
            Duplex Property Search
          </Typography>
        </Grid>

        <Grid item xs={6} spacing={3}>
          <Typography align="center" className={classes.root}>
            <Link to="ryde">Ryde Area Listings</Link>
          </Typography>
        </Grid>
        <Grid item xs={6} spacing={3}>
          <Typography align="center" className={classes.root}>
            <Link to="strathfield">Strathfield Area Listings</Link>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HomeView;
