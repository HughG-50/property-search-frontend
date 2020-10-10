import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import SimpleTable from './SimpleTable';
import { endpointURL } from '../constants/index';

const ListingsView = ({ endpointName }) => {
  const [searchResults, setSearchResults] = useState([]);

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
        {searchResults.length ? (
          <SimpleTable rows={searchResults} />
        ) : (
          <CircularProgress size={200} thickness={1} />
        )}
      </Grid>
    </Grid>
  );
};

export default ListingsView;
