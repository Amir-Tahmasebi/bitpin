import React from "react";
import { Button, Grid, Card, CardMedia, Typography } from "@mui/material";
import styles from "./MarketCard.module.scss";
import { usePrices } from "../../hooks/usePrices";
import clsx from "clsx";
import { commafy } from "../../utils/commafy";

export default function MarketCard(props) {
  const { currency1, id, price } = props;
  const [prices, isLoading] = usePrices();
  const currentPrice = isLoading ? commafy(price) : commafy(prices[id].price);

  const priceButtonColor = isLoading
    ? "inherit"
    : clsx(prices[id].change > 0 ? "success" : "error");

  return (
    <Grid item xs={6} lg={3} className={styles.MarketCardContainer}>
      <Card className={styles.MarketCard}>
        <CardMedia component="img" height="100" image={currency1.image} />
        <div className={styles.MarketCardInfoRow}>
          <Typography variant="body2" component="span">
            coin
          </Typography>
          <Typography variant="body2" component="span">
            {currency1.title}
          </Typography>
        </div>
        <div className={styles.MarketCardInfoRow}>
          <Typography variant="body2" component="span">
            price
          </Typography>
          <Button variant="contained" color={priceButtonColor}>
            {currentPrice}
          </Button>
        </div>
      </Card>
    </Grid>
  );
}
