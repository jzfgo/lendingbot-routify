const getJSON = async () => {
  let res = await fetch(`/botlog.json?${Date.now()}`);
  let data = await res.json();
  return data;
};

const processLog = (data) => {
  let logProcessed = [];

  if (data && data.log) {
    data.log.reverse();
    logProcessed = data.log.map((item) => ({
      time: item.substr(0, 19),
      message: item.substr(20),
    }));
  }

  return logProcessed;
};

const processCurrency = (ticker, data, displayCurrency) => {
  const averageLendingRate = data[ticker].averageLendingRate || 0;
  const lentSum = data[ticker].lentSum || 0;
  const maxToLend = data[ticker].maxToLend || 0;
  const todayEarnings = data[ticker].todayEarnings || 0;
  const totalCoins = data[ticker].totalCoins || 0;
  const totalEarnings = data[ticker].totalEarnings || 0;
  const yesterdayEarnings = data[ticker].yesterdayEarnings || 0;
  const highestBid = data[ticker].highestBid || 0;

  const sameCurrency = ticker == displayCurrency.currency;
  // 1 for BTC and the current display currency, ticker's exchange rate for the rest
  const tickerRate = sameCurrency || ticker === 'BTC' ? 1 : highestBid;
  // 1 for the current display currency, display currency's exchange rate for the rest
  const exchangeRate = sameCurrency ? 1 : displayCurrency.highestBid;

  return {
    averageLendingRate,
    earnings24h: yesterdayEarnings * tickerRate * exchangeRate,
    earningsTotal: totalEarnings * tickerRate * exchangeRate,
    pctLent: lentSum / maxToLend,
    ticker: ticker.toLowerCase(),
    todayEarnings,
    totalCoins,
  };
};

const processCurrencies = (data) => {
  let currencies = [];
  let summary = {};

  if (data && data['raw_data']) {
    const tickers = Object.keys(data.raw_data);

    tickers.forEach((ticker) => {
      let currency = processCurrency(
        ticker,
        data.raw_data,
        data.outputCurrency
      );
      currencies.push(currency);
    });

    summary = currencies.reduce((a, b) => ({
      earningsTotal: a.earningsTotal + b.earningsTotal,
      earnings24h: a.earnings24h + b.earnings24h,
    }));

    return { currencies, summary };
  }
};

export default async () => {
  const botlog = await getJSON();

  return {
    ...processCurrencies(botlog),
    log: processLog(botlog),
  };
};
