import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    // maxWidth: 500,
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
        <Router>
          <Grid item xs={6} spacing={3}>
            <Typography className={classes.root}>
              <Link component={} to="/ryde">
                Ryde Area Listings
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6} spacing={3}>
            <Typography className={classes.root}>
              <Link component={} to="/strathfield">
                Strathfield Area Listings
              </Link>
            </Typography>
          </Grid>
        </Router>
      </Grid>
    </React.Fragment>
  );
};

export default HomeView;
