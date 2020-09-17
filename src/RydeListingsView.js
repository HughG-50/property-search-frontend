import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import SimpleTable from './components/SimpleTable';

const RydeListingsView = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('https://murmuring-everglades-73384.herokuapp.com/listings/ryde')
      .then((data) => {
        setSearchResults(data);
      })
      .catch((err) => console.log(err));
  };

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

export default RydeListingsView;
