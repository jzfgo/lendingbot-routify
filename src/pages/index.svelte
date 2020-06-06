<script>
  import { ready, url } from "@sveltech/routify";
  import TitleBar from "../components/TitleBar.svelte";
  import ListItem from "../components/ListItem.svelte";
  import CoinSummary from "../components/CoinSummary.svelte";

  let data = {};
  let coins = [];
  $: getData();

  function getData() {
    fetch(`/botlog.json`)
      .then(res => res.json())
      .then(json => {
        data = json || {};
        coins = Object.keys(data.raw_data);
        $ready();
      });
  }
</script>

<style>
  section {
    margin-top: 1.25rem;
  }

section h2 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0;
    font-weight: 700;
    font-size: 0.75rem;
  }

  .earnings-total {
    color: var(--main-fg-color);
    text-align: center;
    letter-spacing: 0;
    font-weight: 200;
    font-size: 2.25rem;
  }

  .earnings-24h {
    font-weight: 700;
    font-size: 0.75rem;
    color: var(--main-gain-color);
    letter-spacing: 0;
    text-align: center;
  }
</style>

{#if data}

  <TitleBar />

  <section class="summary">
    <h2>Total earnings since March 14, 2020</h2>
    <div class="earnings-total">$176.42</div>
    <div class="earnings-24h">+$3.25 24h</div>
  </section>

  <section class="currencies">
    <h2>Earnings by currency</h2>
    {#each coins as coin}
    <ListItem href={$url(`/currency/${coin.toLowerCase()}`)}>
      <CoinSummary {coin} />
    </ListItem>
    {/each}
  </section>

  <section class="module log">
    <h2>Activity log</h2>
    <ListItem href={$url(`/activity-log`)}>
      Using MACD as mindailyrate 0.0142% for BTC
    </ListItem>
  </section>

{:else}
  <p>No data :(</p>
{/if}
