import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import prenode from '../assets/pre-node.png';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
    backgroundColor: '#1A2B3C',
  },
  content: {
    padding: 24,
    color: 'white',
  },
}));

export const NodeCard = React.memo(function ProjectCard() {
  const styles = useN03TextInfoContentStyles();
  const cardStyles = useStyles();

  return (
    <Card className={cx(cardStyles.root)} elevation={0}>
      <BrandCardHeader image={prenode} extra={'Node n° 1'} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={styles}
          overline={'PRESEARCH'}
          heading={'Stats :'}
        />
      </CardContent>
    </Card>
  );
});

export default NodeCard;
