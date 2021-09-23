import React from 'react';
import {FormControlLabel, FormLabel, Grid, makeStyles, Paper, Radio, RadioGroup} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  }
}));

const SimplePaper = () => {
  const classes = useStyles();

  return (
        <div className={classes.root}>
            <Paper elevation={3} />
        </div>
  );
};

export default SimplePaper;
