<script>
  import { ready, url } from "@sveltech/routify";
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

<style lang="scss">
  $color-vivid-tangerine: #ff9580;
  $color-spring-wood: #f8f8f2;
  $color-mint-green: #8aff80;
  $color-kimberly: #7970a9;
  $color-hot-pink: #ff80bf;
  $color-heliotrope: #9580ff;
  $color-gun-powder: #454158;
  $color-dolly: #ffff80;
  $color-chardonnay: #ffca80;
  $color-charade: #22212c;
  $color-aquamarine: #80ffea;
:global(body) {
  background: $color-charade;
  color: $color-spring-wood;
  font-family: 'Nunito', sans-serif;
}
</style>

{#if data}
  <h1>{data.exchange} {data.label}</h1>
  <p>
    {data.last_status}<br>
    <small>{data.last_update}</small>
  </p>
  <ul>
  {#each coins as coin}
    <li>
      <a href={$url(`/currency/${coin.toLowerCase()}`)}>{coin}</a>
    </li>
  {/each}
  </ul>
{:else}
  <p>No data :(</p>
{/if}
