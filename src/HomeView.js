import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@reach/router';
import ryde2 from './assets/ryde2.jpg';
import strathfield from './assets/strathfield.jpeg';
import parramatta from './assets/parramatta.jpg';
import burwood from './assets/burwood.png';
import canadaBay from './assets/canadaBay.png';
import innerWest from './assets/innerWest.png';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  image: {
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    width: 300,
  },
  imageWrap: {
    width: 450,
    borderRadius: 25,
  },
});

const HomeView = () => {
  const classes = useStyles();

  return (
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

      <Grid item xs={12} lg={4} spacing={3} align="center">
        <Paper className={classes.imageWrap}>
          <Link to="ryde">
            <img src={ryde2} alt="ryde logo" className={classes.image} />
          </Link>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={4} spacing={3} align="center">
        <Paper className={classes.imageWrap}>
          <Link to="parramatta">
            <img
              src={parramatta}
              alt="parramatta logo"
              className={classes.image}
            />
          </Link>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={4} spacing={3} align="center">
        <Paper className={classes.imageWrap}>
          <Link to="strathfield">
            <img
              src={strathfield}
              alt="strathfield logo"
              className={classes.image}
            />
          </Link>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={4} spacing={3} align="center">
        <Paper className={classes.imageWrap}>
          <Link to="burwood">
            <img src={burwood} alt="burwood logo" className={classes.image} />
          </Link>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={4} spacing={3} align="center">
        <Paper className={classes.imageWrap}>
          <Link to="canada_bay">
            <img
              src={canadaBay}
              alt="canada bay logo"
              className={classes.image}
            />
          </Link>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={4} spacing={3} align="center">
        <Paper className={classes.imageWrap}>
          <Link to="inner_west">
            <img
              src={innerWest}
              alt="inner west logo"
              className={classes.image}
            />
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomeView;
