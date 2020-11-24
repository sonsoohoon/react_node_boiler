import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  List,
  makeStyles
} from '@material-ui/core';
import NavItem from './NavItem';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


const items = [
  {
    href: '/admin/academy',
    title: '학원관리'
  },
  {
    href: '/admin/car',
    title: '차량관리'
  },
  {
    href: '/admin/driver',
    title: '실장관리'
  },
  {
    href: '/admin/driverTogether',
    title: '동승자관리'
  },
  {
    href: '/admin/children',
    title: '원생관리'
  },
  {
    href: '/admin/driveSchedule',
    title: '차량스케줄관리'
  }
];

const useStyles = makeStyles(() => ({
  desktopDrawer: {
    width: 170,
    top: 64,
    height: 'calc(100% - 64px)'
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
        <Paper classes={{ paper: classes.desktopDrawer }}>
          {content}
        </Paper>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
