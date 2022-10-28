import { useEffect, useState } from "react";
import { client } from "../services/client";

export function useMarket() {
  const [marketLists, setMarketLists] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [state, setState] = useState({
    from: 0,
    to: 12,
  });

  useEffect(() => {
    client
      .get("/mkt/markets/")
      .then((res) => res.data)
      .then((coins) => {
        setMarketLists({
          ...coins,
          count: Math.round(coins.count / 20),
        });

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChangedPage = (value) => {
    setState({
      from: (value - 1) * 12,
      to: value * 12,
    });
  };

  const handlePagination = (e, value) => {
    setPage(value);
    handleChangedPage(value);
  };

  return {
    handlePagination,
    data: { marketLists, isLoading, page, state },
  };
}
