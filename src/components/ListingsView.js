import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  }, []);

  return (
    <React.Fragment>
      {searchResults.length ? (
        <SimpleTable rows={searchResults} />
      ) : (
        <CircularProgress />
      )}
    </React.Fragment>
  );
};

export default ListingsView;
