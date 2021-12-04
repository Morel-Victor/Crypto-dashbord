import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    top: '9rem',
    minWidth: '275',
    height: 500,
    backgroundColor: '#1A2B3C',
    color: 'white',
  },
  title: {
    fontSize: 14,
    color: 'white',
  },
});

export default function MarketSummaryItem({ name }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={15}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Rank
        </Typography>
        <Typography variant='div' component='h1'>
          Coin Name
        </Typography>
        <Typography variant='subtitle2'>
          <hr />
          {name}
        </Typography>
        <Grid container>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant='body1' component='div'>
              Price
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant='h6' component='div'>
              €0
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant='body1' component='div'>
              Marketcap
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant='h6' component='div'>
              €0
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
