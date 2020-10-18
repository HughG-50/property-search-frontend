import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Typography,
} from '@material-ui/core';
import Moment from 'react-moment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  space: {
    marginTop: 25,
  },
});

const SimpleTable = ({ rows, className }) => {
  const classes = useStyles();

  const displayAuctionDetails = (row) => {
    if (row.auction_location && row.auction_time) {
      return (
        <TableCell align="left">
          <p>Location: {row.auction_location}</p>
          <p>
            Date/time:{' '}
            <Moment format="DD MMM h:mm A">{row.auction_time}</Moment>
          </p>
        </TableCell>
      );
    }
    return <TableCell align="left">N/A</TableCell>;
  };

  const populateTable = () => {
    if (rows.length === 0) {
      return (
        <Typography className={classes.space}>No results found</Typography>
      );
    } else {
      return (
        <TableContainer component={Paper} className={className}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Address</TableCell>
                <TableCell align="left">Land Area (m&#178;)</TableCell>
                <TableCell align="left">Frontage</TableCell>
                <TableCell align="left">Display Price</TableCell>
                <TableCell align="left">Sale Method</TableCell>
                <TableCell align="left">Auction Details</TableCell>
                <TableCell align="left">Agency</TableCell>
                <TableCell align="left">Agent</TableCell>
                <TableCell align="left">Listing</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.address}
                  </TableCell>
                  <TableCell align="left">{row.land_area}</TableCell>
                  <TableCell align="left">{row.frontage}</TableCell>
                  <TableCell align="left">{row.display_price}</TableCell>
                  <TableCell align="left">{row.sale_method}</TableCell>
                  {displayAuctionDetails(row)}
                  <TableCell align="left">{row.agency_name}</TableCell>
                  <TableCell align="left">{row.agent}</TableCell>
                  <TableCell align="left">
                    <Link href={row.listing_url} target="_blank">
                      {row.listing_url}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
  };

  return populateTable();
};

export default SimpleTable;
