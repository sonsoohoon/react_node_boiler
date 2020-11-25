import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import data from './data';

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

const useStyles = makeStyles((theme) => ({
  root: {overflowX: "auto"},
}));

const Results = ({ className, currentPage, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [page, setPage] = useState(currentPage);
  const [count, setCount] = useState(0);
  const [tempAcademy] = useState(data);
  const [academys, setAcademys] = useState([]);

  useEffect(() => {
    //여기서 리스트 api 호출
    const startPage = page === 0 ? page : page*10;

    setCount(tempAcademy.length);
    setAcademys(tempAcademy.slice(startPage,startPage+10));
  }, [page])

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
              {academys.map((academy) => (
                <TableRow
                  hover
                  key={academy.id}
                  selected={false}
                  onClick={() => {
                    navigate(`/admin/academy/${academy.academyId}?page=${page}`, {replace: false, state: academy});
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
        count={count}
        onChangePage={handlePageChange}
        page={page}
        rowsPerPage={10} //50개로 고정
        rowsPerPageOptions={[10]}//페이지로우 옵션 없음
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  academys: PropTypes.array.isRequired
};

export default Results;
