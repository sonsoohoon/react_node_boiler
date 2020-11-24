import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import AcademyDetail from './AcademyDetail';
import {useLocation, useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AcademyDetailView = () => {
  const classes = useStyles();
  const { state: academy} = useLocation();

  return (
    <Page
      className={classes.root}
      title="AcademyDetail"
    >
      <Container maxWidth="lg">
          <Grid item lg={12}>
            <AcademyDetail academy={academy}/>
          </Grid>
      </Container>
    </Page>
  );
};

export default AcademyDetailView;
