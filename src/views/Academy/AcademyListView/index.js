import React, {useEffect, useState} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AcademyListView = ({...rest}) => {
  const classes = useStyles();
  const [academys] = useState(data);
console.log(rest);
  useEffect(() => {
    //학원정보 가져오기
  })
  return (
    <Page
      className={classes.root}
      title="학원 정보"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results academys={academys} />
        </Box>
      </Container>
    </Page>
  );
};

export default AcademyListView;
