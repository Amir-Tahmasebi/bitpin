import { useState } from "react";

export function usePrices() {
  const [data, setData] = useState({});
  const ws = new WebSocket("wss://ws.bitpin.org");
  const apiCall = { method: "sub_to_price_info" };
  const [isLoading, setIsLoading] = useState(true);
  ws.onopen = () => {
    ws.send(JSON.stringify(apiCall));
  };

  ws.onmessage = (event) => {
    const res = JSON.parse(event.data);
    try {
      if (!res.message) {
        setData(res);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error is :", error);
    }
  };

  return [data, isLoading];
}
