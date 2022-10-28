import MarketCard from "../MarketCard/MarketCard";
import { Grid, Pagination } from "@mui/material";
import styles from "./MarketLists.module.scss";
import Lazy from "./../../components/Lazy";
import { useMarket } from "../../hooks/useMarket";

export default function MarketLists() {
  const { data, handlePagination } = useMarket();
  const { isLoading, marketLists, page, state } = data;

  const renderMarketCards = marketLists?.results
    .slice(state.from, state.to)
    .map((coin) => <MarketCard key={coin.id} {...coin} />);

  return (
    <>
      {isLoading ? (
        <Lazy />
      ) : (
        <>
          <Grid container spacing={1}>
            {renderMarketCards}
          </Grid>
          <div className={styles.marketListsPagination}>
            <Pagination
              page={page}
              count={marketLists?.count}
              siblingCount={0}
              onChange={handlePagination}
            />
          </div>
        </>
      )}
    </>
  );
}
