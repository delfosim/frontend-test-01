import axios from "axios";

export function getCovid19TimeLine(payload) {
  return axios.get(
    `https://api.covid19tracking.narrativa.com/api/country/${payload.country}`,
    {
      params: { date_from: payload.dateFrom, date_to: payload.dateTo },
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  );
}

export function getBitcoinTrades() {
  let sell = { name: "sell", data: [] };
  let buy = { name: "buy", data: [] };

  return axios
    .get(`https://www.mercadobitcoin.net/api/BTC/trades/`, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
    .then((response) => {
      response.data.map((trade) => {
        trade.type === "sell"
          ? sell.data.push(trade.price)
          : buy.data.push(trade.price);
      });
      return [sell, buy];
    });
}
