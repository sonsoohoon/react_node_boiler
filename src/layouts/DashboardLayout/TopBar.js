import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        관리자 페이지
      </Toolbar>
    </AppBar>
  );
};


export default TopBar;
