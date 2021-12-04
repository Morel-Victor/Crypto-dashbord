import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NodeList from '../components/NodeList/index';

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
    <Container className={classes.root}>
      <div className={classes.item}>
        <NodeList />
      </div>
    </Container>
  );
}
