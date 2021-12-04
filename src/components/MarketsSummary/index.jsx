import { Card, Title, Typography } from './style';

export default function MarketSummary({ name }) {
  return (
    <Card>
      <Title>Rank</Title>
      <Typography>
        Coin Name
        {name}
      </Typography>
    </Card>
  );
}
