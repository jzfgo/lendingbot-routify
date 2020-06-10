<script>
  import { ready, url } from "@sveltech/routify";
  import * as Pancake from '@sveltejs/pancake';
  import TitleBar from "../../components/TitleBar.svelte";

  export let ticker;
  ticker = ticker.toUpperCase();

  let data = {};
  let points = [];
  let values = [];
  let yMin = 0;
  let yMax = 1;

  $: updateTicker(ticker);
  $: getHistory(ticker);

  const updateTicker = ticker => fetch(`/botlog.json`)
    .then(res => res.json())
    .then(json => {
      data = json.raw_data[ticker] || {};
      $ready();
    });

  const getHistory = ticker => fetch(`/history.json`)
    .then(res => res.json())
    .then(json => {
      values = json[ticker].map(p => p[1]);
      yMin = Math.min(...values);
      yMax = Math.max(...values);
      points = json[ticker].map(p => ({ x: p[0], y: p[1] }));
      $ready();
    });

</script>

<style>
  .chart {
    height: 100vw;
    padding: 3em 2em 2em 3em;
    box-sizing: border-box;
  }

  .axes {
    width: 100%;
    height: 100%;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
  }

  .y.label {
    position: absolute;
    left: -2.5em;
    width: 2em;
    text-align: right;
    bottom: -0.5em;
  }

  .x.label {
    position: absolute;
    width: 4em;
    left: -2em;
    bottom: -22px;
    font-family: sans-serif;
    text-align: center;
  }

  path.data {
    stroke: red;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 2px;
    fill: none;
  }
</style>

<TitleBar title={ticker} leftIcon="back" leftLink={$url('/')} />

{#if points.length}
<div class="chart">
  <Pancake.Chart x1={points[0].x} x2={points[points.length-1].x} y1={yMin} y2={yMax}>
    <Pancake.Box>
      <div class="axes"></div>
    </Pancake.Box>

    <Pancake.Grid vertical count={5} let:value>
      <span class="x label">{value}</span>
    </Pancake.Grid>

    <Pancake.Grid horizontal count={3} let:value>
      <span class="y label">{value}</span>
    </Pancake.Grid>

    <Pancake.Svg>
      <Pancake.SvgLine data={points} let:d>
        <path class="data" {d}/>
      </Pancake.SvgLine>
    </Pancake.Svg>
  </Pancake.Chart>
</div>
{/if}

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
