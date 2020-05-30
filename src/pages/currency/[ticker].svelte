<script>
  import { ready, url } from "@sveltech/routify";

  export let ticker;
  ticker = ticker.toUpperCase();

  let data = {};

  $: updateTicker(ticker);

  function updateTicker(ticker) {
    fetch(`/botlog.json`)
      .then(res => res.json())
      .then(json => {
        data = json.raw_data[ticker] || {};
        $ready();
      });
  }
</script>

<h1>This is the page for {ticker}</h1>
<a href={$url('/')}>Go back</a>
{#if data}
  <ul>
  <li>Average Lending Rate: {data.averageLendingRate}</li>
  <li>Lent Sum: {data.lentSum}</li>
  <li>Max To Lend: {data.maxToLend}</li>
  <li>Today Earnings: {data.todayEarnings}</li>
  <li>Total Coins: {data.totalCoins}</li>
  <li>Total Earnings: {data.totalEarnings}</li>
  <li>Yesterday Earnings: {data.yesterdayEarnings}</li>
</ul>
{:else}
  No data for {ticker} :(
{/if}
