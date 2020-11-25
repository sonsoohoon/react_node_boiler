import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import {useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AcademyListView = () => {
  const classes = useStyles();
  const { search: queryString} = useLocation();
  const page = isNaN(queryString.split('=')[1]) ? 0 : queryString.split('=')[1];

  return (
    <Page
      className={classes.root}
      title="학원 정보"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results currentPage={page}/>
        </Box>
      </Container>
    </Page>
  );
};

export default AcademyListView;
