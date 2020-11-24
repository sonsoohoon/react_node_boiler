import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import * as axios from "axios";
import {useNavigate} from "react-router-dom";

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const AcademyDetail = ({ className, academy, page, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [values, setValues] = useState(academy);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSaveButtonClick = async () => {
    //저장 api호출
    try {
      const academy = await axios.get('/api/academy');
      console.log(academy.data);
      navigate(`/admin/academy?page=${page}`, {replace: false});
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteButtonClick = async () => {
    //삭제 api 호출
    try {
      const academy = await axios.get('/api/academy');
      console.log(academy.data);
      navigate(`/admin/academy?page=${page}`, {replace: false});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="학원 정보를 등록하거나 수정할 수 있습니다."
          title="학원 등록/수정"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item lg={6}>
              <TextField
                fullWidth
                helperText="학원ID(수정불가)"
                label="학원ID"
                name="academyId"
                onChange={handleChange}
                required
                readOnly={true}
                disabled
                value={values.academyId}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="학원 이름"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="학원 전화번호"
                name="phonenum"
                onChange={handleChange}
                required
                value={values.phonenum}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box m={0}
          display="flex"
          justifyContent="space-between"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSaveButtonClick}
          >
            저장
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleDeleteButtonClick}
          >
            삭제
          </Button>
        </Box>
      </Card>
    </form>
  );
};

AcademyDetail.propTypes = {
  className: PropTypes.string
};

export default AcademyDetail;
