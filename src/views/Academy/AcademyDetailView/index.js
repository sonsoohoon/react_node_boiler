import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import AcademyDetail from './AcademyDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AcademyDetailView = (props) => {
  const classes = useStyles();
  //const { id } = match.params;
  console.log(props);
  return (
    <Page
      className={classes.root}
      title="AcademyDetail"
    >
      <Container maxWidth="lg">
          <Grid item lg={12}>
            <AcademyDetail />
          </Grid>
      </Container>
    </Page>
  );
};

export default AcademyDetailView;
