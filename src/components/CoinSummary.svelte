<script>
  import { ready } from "@sveltech/routify";
  import RadialGraph from "./graphs/RadialGraph.svelte";
  import btc from "../assets/images/btc.svg";

  export let coin;

  let data = {};
  $: getData();

  function getData() {
    fetch(`/botlog.json`)
      .then(res => res.json())
      .then(json => {
        data = json || {};
        $ready();
      });
  }
</script>

<RadialGraph pct={Math.random(0, 1)} />
{coin}
<img src="{btc}" alt="BTC">
