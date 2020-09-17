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

const SimpleTable = ({ rows }) => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell align="right">Land Area (m&#178;)</TableCell>
              <TableCell align="right">Display Price</TableCell>
              <TableCell align="right">Agency</TableCell>
              <TableCell align="right">Agent</TableCell>
              <TableCell align="right">Listing</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.address}
                </TableCell>
                <TableCell align="right">{row.land_area}</TableCell>
                <TableCell align="right">{row.display_price}</TableCell>
                <TableCell align="right">{row.agency_name}</TableCell>
                <TableCell align="right">{row.agent}</TableCell>
                <TableCell align="right">
                  <Link
                    href={row.listing_url}
                    onClick={preventDefault}
                    target="_blank"
                  >
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
