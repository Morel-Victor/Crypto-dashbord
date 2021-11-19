import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NodeList from '../components/NodeList';

const useStyles = makeStyles({
  root: {
    paddingTop: 65,
  },
  item: {
    padding: 0,
  },
});

export default function Node() {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.item}>
            <NodeList />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
