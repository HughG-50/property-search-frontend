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
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SimpleTable = ({ rows, className }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableContainer component={Paper} className={className}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell align="left">Land Area (m&#178;)</TableCell>
              <TableCell align="left">Display Price</TableCell>
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
                <TableCell align="left">{row.display_price}</TableCell>
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
    </React.Fragment>
  );
};

export default SimpleTable;
