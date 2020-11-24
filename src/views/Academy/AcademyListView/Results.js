import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  makeStyles
} from '@material-ui/core';
import * as axios from "axios";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, academys, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  학원ID
                </TableCell>
                <TableCell>
                  이름
                </TableCell>
                <TableCell>
                  학원전화번호
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {academys.slice(0, limit).map((academy) => (
                <TableRow
                  hover
                  key={academy.id}
                  selected={false}
                  onClick={() => {
                    navigate(`/admin/academy/${academy.academyId}`, {replace: false, state: academy});
                  }}
                >
                  <TableCell>
                    {academy.academyId}
                  </TableCell>
                  <TableCell>
                    {academy.name}
                  </TableCell>
                  <TableCell>
                    {academy.phonenum}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      <TablePagination
        component="div"
        count={academys.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  academys: PropTypes.array.isRequired
};

export default Results;
