import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MarketSummary from '../components/MarketsSummary/index.jsx';
import MarketItems from '../components/MarketsItems/index.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: 25,
  },
  item: {},
});

export default function Markets({ name }) {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={7} md={7} lg={8}>
          <Grid>
            <Grid item className={classes.item}>
              <MarketItems />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={4}>
          <MarketSummary name={name} />
        </Grid>
      </Grid>
    </Container>
  );
}
